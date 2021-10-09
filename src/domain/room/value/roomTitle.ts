export class RoomTitle {
    constructor(private readonly _value: string) {
        if (_value.length === 0) {
            throw new Error('RoomTitle cannot be empty')
        }
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
