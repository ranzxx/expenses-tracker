export interface Expense {
    id: number,
    item: string,
    expense: number,
    category: 'Makan' | 'Transport' | 'Hiburan' | 'Kebutuhan'
}