# Webシステム基礎実験（JavaScritpクラス）

## 環境設定編

### 利用するクラウドサービス

本演習では，以下のクラウドサービスを使用する．そこで，まずはアカウントを作成する．なお，Paiza Cloudは，Githubアカウントで利用できるので，そちらを利用しても構わない．

1. Github		https://github.io/
2. Paiza Cloud	https://paiza.cloud/

### Paiza Cloudの使い方
上記に記したPaiza CloudのURLにWebブラウザからアクセスすると，画面上部に「ログイン」というボタンが有るのでクリック（タップ）する．すると，作成したアカウントとパスワードを入力する画面が現れる．下の方に，別のサービスのアカウントを利用してログインするボタンが有るので，「Githubログイン」をクリック（タップ）する．

すると，Githubのユーザ名（またはメールアドレス）とパスワード入力画面になるので，入力して「Sign in」する．

### Paiza Cloudでのサーバの作成
Sign inすると，画面中央に「新規サーバ作成」ボタンが現れるので，作成する．その際，サーバ名はそのまま利用して良い．
その下の初期インストールするものの中で，Web開発の中の「Node.js」を選択し，「新規サーバ作成」を選ぶ
後々はデータベースの中の「MySQL」も利用するが，最初は「Node.js」のみで良い．

### Gitのユーザ名とメールアドレスを設定する
gitサーバにアップロードする際に必要なので，最初にやっておくと良い．

```
~$ git config --global user.name "Hiroshi Suda"
~$ git config --global user.email "suda@net.it-chiba.ac.jp"
```

以下のように確認してみよう

```
~$ git config --list
user.name=Hiroshi Suda
user.email=suda@net.it-chiba.ac.jp
```

### Githubからプログラムをダウンロードする
Paiza Cloudの画面内の「ターミナル」を開く．すると，Linuxのコマンド入力画面が現れる．ここで，gitコマンドを利用してファイルをダウンロードする．以下の最初の行を入力する．

```
~$ git clone https://github.com/sudahiroshi/websystem.git
Cloning into 'websystem'...
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (5/5), done.
Unpacking objects: 100% (8/8), done.
remote: Total 8 (delta 1), reused 5 (delta 1), pack-reused 0
~$
```

続いて，カレントディレクトリを変更し，プログラムを起動する．

```
~$ cd websystem
~/websystem$ node server1.js
```

すると左端にブラウザアイコンが追加されるので，クリックするとブラウザを経由してプログラムの出力を確認できる．
 

