# 関数実行結果表示アプリケーション

このプロジェクトは、JavaScriptの関数の実行結果をリアルタイムで表示する、シンプルなWebアプリケーションです。


## プロジェクトの構成

主要なファイルとその役割：

- `src/logger.ts`
  - 計算用の関数が定義されているファイル
  - それぞれの関数の実装と、結果を収集する処理が含まれています

- `src/App.tsx`
  - 画面表示を担当するメインのコンポーネント
  - 関数の実行結果を見やすく表示します

## 使用している技術

- **React**: ユーザーインターフェースの構築
- **TypeScript**: 型安全なコード開発
- **Tailwind CSS**: スタイリング
- **Lucide React**: アイコン表示

## プロジェクトの起動方法

1. 必要なパッケージのインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. 開発サーバーの終了:
```bash
CTRL + c
y
```

## コードの説明

### 表示される情報

各関数の実行結果について、以下の情報が表示されます：

- 関数名と実行時の引数
- 計算結果
- 戻り値の型（number）

## カスタマイズ方法

新しい関数を追加する場合は、以下の手順で行います：

1. `logger.ts` に新しい関数を追加
2. `performLogging` 関数内の `results` 配列に、新しい関数の実行結果を追加

例：
```typescript
// 新しい関数を追加
function double(n: number): number {
  return n * 2;
}

// results配列に追加
const results = [
  // 既存の結果...
  {
    name: "double(10)",
    result: double(10)
  }
];
```