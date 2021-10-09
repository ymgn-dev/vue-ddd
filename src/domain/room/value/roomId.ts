export class RoomId {
    constructor(private readonly _value: string) {
        if (_value.length === 0) {
            throw new Error('RoomId cannot be empty')
        }
    }

    get value() {
        return this._value
    }

    public equals(other: RoomId): boolean {
        if (!(other instanceof RoomId) || other === null) {
            return false
        }

        return this === other || this._value === other.value
    }
}
