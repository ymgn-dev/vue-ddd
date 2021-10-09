import { TalkRepositoryBase } from './talkRepositoryBase'

export class TalkService {
    constructor(private readonly _repository: TalkRepositoryBase) {}

    // TODO: 必要に応じてドメインサービスを書く
    // * ドメインサービス: 値オブジェクトやエンティティに書くべきでない処理

    // ex. トーク内容の重複をチェックする処理が必要になった場合、
    // トークエンティティに処理を書くと、トーク本体が自身の重複をチェックすることになる(違和感)
    // そういった、第三者によっておこなわれるべき処理はここに書く
}
