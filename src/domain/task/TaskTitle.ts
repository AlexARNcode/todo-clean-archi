export class InvalidTaskTitleError extends Error {
  constructor(message = "Invalid task title") { super(message); this.name = "InvalidTaskTitleError"; }
}


export class TaskTitle {
    readonly _value: string;

    private constructor(value: string) {
        this._value = value;
    }

    static create(raw: string): TaskTitle {
        const trimmed = raw.trim();

        if (trimmed.length === 0) {
            throw new InvalidTaskTitleError();
        }

        return new TaskTitle(trimmed);
    }

    get value(): string {
        return this._value;
    }
}
