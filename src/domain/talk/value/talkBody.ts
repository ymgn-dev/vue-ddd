export class TalkBody {
    constructor(private readonly _value: string) {
        if (_value.length === 0) {
            throw new Error('TalkBody cannot be empty')
        }
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
