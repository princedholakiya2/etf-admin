import {ElementRef, TemplateRef, Type} from '@angular/core';

export enum columnsTypes {
    text = 'text',
    component = 'component',
    template = 'template',
    date = 'date',
    time  = 'time',
    update = 'update',
    delete = 'delete'
}

export interface IBaseMultipleColumnsSchema{
    column: string;
    class?: string[];
    columnType: columnsTypes;
}

export interface MultipleColumnsSchema{
    separator?: string;
    multiple: IBaseMultipleColumnsSchema;
}

export interface ICustomTableColumnsSchema{
    columnId: string;
    columnParentId?: string;
    columnInnerId?: string;
    label: string[];
    columnType: columnsTypes;
    labelSeparators?: string;
    labelClass?: string[];
    component?: Type<any>[];
    template?: TemplateRef<ElementRef>;
    class?: string[];
    updateRedirectUrl?: string;
    multipleColumn?: MultipleColumnsSchema;
}
