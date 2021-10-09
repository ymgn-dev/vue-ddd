export class TalkId {
    constructor(private readonly _value: string) {
        if (_value.length === 0) {
            throw new Error('TalkId cannot be empty')
        }
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
