import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <a href="http://bit.ly/waartria" target="_blank">
            <img className="chat" src="/static/image/chat.png" />
          </a>
        </body>
      </html>
    );
  }
}