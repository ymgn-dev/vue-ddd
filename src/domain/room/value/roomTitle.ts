export class RoomTitle {
    private readonly _value: string

    constructor(value: string) {
        if (value.length === 0) {
            throw new Error('RoomTitle cannot be empty')
        }
        this._value = value
    }

    get value() {
        return this._value
    }

    public equals(other: RoomTitle): boolean {
        if (!(other instanceof RoomTitle) || other === null) {
            return false
        }

        return this === other || this._value === other.value
    }
}
