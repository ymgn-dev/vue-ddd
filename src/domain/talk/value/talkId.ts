export class TalkId {
    private readonly _value: string

    constructor(value: string) {
        if (value.length === 0) {
            throw new Error('TalkId cannot be empty')
        }
        this._value = value
    }

    get value() {
        return this._value
    }

    public equals(other: TalkId): boolean {
        if (!(other instanceof TalkId) || other === null) {
            return false
        }

        return this === other || this._value === other.value
    }
}
