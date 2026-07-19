# 住マッチング HP フォルダ

## 概要
住マッチング（smatching.jp）のHP構築・管理用フォルダ。
静的HTML/CSS/JSで先行構築済み。将来的にWordPress（SWELL）へ移行予定。

## 技術スタック
- 現在：静的HTML / CSS / Vanilla JS（移行前プロトタイプ）
- 将来CMS：WordPress（エックスサーバー）+ SWELLテーマ
- ドメイン：smatching.jp
- SEOプラグイン（予定）：RankMath
- フォント：Noto Sans JP（Google Fonts）

## 重要な設定値
- サービス名：住マッチング（SMATCHING）
- 運営会社：バーディー株式会社
- ドメイン：smatching.jp
- MAIL：info@smatching.jp
- 住所：〒514-0819 三重県津市高茶屋7丁目9-2
- 営業時間：10:00〜18:00（水曜定休）
- カラー：オレンジ #F97316 / ネイビー #0F2B5B / グリーン #22C55E

## ファイル構成
```
hp/
├── CLAUDE.md               ← このファイル
├── index.html              ← TOP（13セクション）
├── about.html              ← サービス説明ページ
├── reason.html             ← 選ばれる3つの理由
├── flow.html               ← ご相談の流れ（6ステップ）
├── voice.html              ← お客様の声（6件）
├── faq.html                ← よくある質問（カテゴリ別）
├── partners.html           ← 提携住宅会社一覧
├── staff.html              ← スタッフ紹介（てらさん・はやりん）
├── access.html             ← 店舗情報・アクセス
├── contact.html            ← お問い合わせフォーム
├── css/
│   └── style.css           ← 全ページ共通スタイル（デザインシステム）
├── js/
│   └── main.js             ← 全ページ共通JS（ハンバーガー・FAQ・アニメ）
├── blog/
│   ├── index.html          ← ブログ一覧（サイドバー付き）
│   ├── article_01.html     ← 三重県で注文住宅の相談をするなら？
│   ├── article_02.html     ← 津市でおすすめのハウスメーカー比較2026年版
│   ├── article_03.html     ← 鈴鹿市で注文住宅を建てる完全ガイド
│   ├── article_04.html     ← 松阪市で新築一戸建てを建てる！
│   └── article_05.html     ← 注文住宅で後悔しない！7つのポイント
├── docs/
│   └── hp_spec.md          ← HP引き継ぎ書（構築仕様書）
├── assets/                 ← ロゴ・写真・画像素材（未配置）
├── prompts/
│   └── blog_seo.md         ← SEOブログ記事生成プロンプト
└── structure/
    └── sitemap.md          ← サイト構造・ページ要件まとめ
```

## 設計の意図
- モバイルファーストで設計（スマホ縦型ユーザーが多い）
- LINE相談ボタンを常時固定表示（右下フロート）
- CTAボタンは「無料相談はこちら」と「LINE相談はこちら」の2種
- ブログでSEO集客（三重県×注文住宅）をメイン戦略とする
- IntersectionObserver でスクロールアニメーション実装済み
- カウンターアニメーション（1000+組、25社など）を数字セクションに実装

## 未設定・要差し替え箇所
- LINE URL：全ページで `href="#"` → 実際のLINE ID（@xxx）に差し替え
- Google Maps：access.html のiframeプレースホルダー → 実際の埋め込みURL
- 電話番号：059-000-0000 → 実際の番号に差し替え
- 提携会社名：partners.html のプレースホルダー → はやりんから提供の25社に差し替え
- スタッフ写真：staff.html の絵文字アイコン → 実際の写真に差し替え

## TODO
- [ ] LINE IDを取得してURLを全ページで差し替え
- [ ] Google Mapsの実際の埋め込みURLを設定
- [ ] 提携25社のロゴ・情報を取得（はやりんから提供予定）
- [ ] スタッフ写真・ロゴ素材をassetsに配置
- [ ] WordPress・SWELL導入（静的HTMLからWPへ移行）
- [ ] RankMath・Googleアナリティクス・サーチコンソール設定
- [ ] SEOブログ記事の追加量産（article_06以降）
- [ ] 将来：提携会社個別ページ（/partners/[社名]）追加

## 最終更新日
2026-06-15
