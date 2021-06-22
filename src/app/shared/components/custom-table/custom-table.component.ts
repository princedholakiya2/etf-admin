import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Observable, Subject} from 'rxjs';
import {IBaseResponse, IPaginationAPIResponse} from '../../../core/models/base.models';
import {columnsTypes, ICustomTableColumnsSchema} from '../../models/customTable.model';
import {GlobalEnums} from '../../../core/enums/global.enums';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, take, takeUntil} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-custom-table',
    templateUrl: './custom-table.component.html',
    styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @Input() dataSource$: Observable<IBaseResponse<IPaginationAPIResponse<any>>>;
    @Input() apiCallFunction: any;
    @Input() columnsType: ICustomTableColumnsSchema[];
    @Input() searchControlPlaceHolder: string;
    @Input() updateHandler: any;
    @Input() deleteHandler: any;
    columnsTypes = columnsTypes;

    constructor(private  matSnackBar: MatSnackBar, private cd: ChangeDetectorRef) {}
    search: FormControl;
    private unsubscribed$ = new Subject<void>();

    get columnsId(): string[] {
        return this.columnsType.map(columnsData => columnsData.columnId);
    }

    ngOnInit(): void {
        this.search = new FormControl(null);
        this.modifyDataSource();
    }

    ngAfterViewInit(): void {
        this.search.valueChanges.pipe(
            distinctUntilChanged(),
            takeUntil(this.unsubscribed$),
            debounceTime(1000)).subscribe((value: string) => {
            this.modifyDataSource();
        });
    }

    ngOnDestroy(): void {
        this.unsubscribed$.next();
        this.unsubscribed$.complete();
    }

    changesInPaginator($event: PageEvent): void {
        this.modifyDataSource($event.pageIndex + 1, $event.pageSize);
    }

    displayData(row: any, column: ICustomTableColumnsSchema): string {
        const innerString = column?.columnInnerId;
        return row?.[column.columnParentId]?.[innerString] || null;
    }

    modifyDataSource(nextPage: number = 1, perPage: number = GlobalEnums.defaultPerPage): void {
        if (this.search.value) {
            this.dataSource$ = this.apiCallFunction(nextPage, perPage, this.search?.value?.trim());
        } else {
            this.dataSource$ = this.apiCallFunction(nextPage, perPage);
        }
    }

    deleteClickHandler(id: string): void {
            this.deleteHandler(id).pipe(take(1)).subscribe(() => {
                this.modifyDataSource();
                this.cd.detectChanges();
                this.matSnackBar.open('Record Successfully Deleted', 'close');
            }, error => this.matSnackBar.open(error?.message, 'close'));
    }
}


