export class TalkBody {
    private readonly _value: string

    constructor(value: string) {
        if (value.length === 0) {
            throw new Error('TalkBody cannot be empty')
        }
        this._value = value
    }

    get value() {
        return this._value
    }

    public equals(other: TalkBody): boolean {
        if (!(other instanceof TalkBody) || other === null) {
            return false
        }

        return this === other || this._value === other.value
    }
}
