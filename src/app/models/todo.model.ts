export interface ITodo {
    id: number;
    todo: string;
    completed: boolean;
}
export interface ITodos {
    isLoading?: boolean;
    todos: ITodo[];
}
