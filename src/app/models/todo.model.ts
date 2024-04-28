export interface ITodo {
    id: number;
    title: string;
    status: string;
}
export interface ITodos {
    isLoading?: boolean;
    todos: ITodo[];
}
