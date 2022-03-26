interface ListFilters {
    isDeleted?: boolean
    includeDeleted?: boolean
}

export interface GetAllPersonasFilters extends ListFilters {}
export interface GetAllGradosFilters extends ListFilters{}
export interface GetAllGruposFilters extends ListFilters{}
