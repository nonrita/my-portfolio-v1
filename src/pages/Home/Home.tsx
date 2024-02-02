import mySelfImage from '@/assets/myself-image.jpg';

const Home = () => {
  return (
    <>
      <header className=" w-full px-8 py-6 text-gray-800 bg-slate-100 border-b-8 border-slate-200 flex flex-row items-center justify-between">
        <h1 className=" text-4xl leading-7 font-[500]">My Portfolio</h1>
        <ul className="flex flex-row gap-8 [&>li]:inline-block [&>li]:mx-4 [&>li]:leading-8 [&>li]:capitalize [&>li]:text-xl [&>li]:font-[530] [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:border-b-2 [&>li>a]:border-transparent [&>li>a:hover]:border-slate-800 [&>li>a]:transition-colors [&>li>a]:ease-in">
          <li>
            <a href="#introduction">自己紹介</a>
          </li>
          <li>
            <a href="#skill">スキル</a>
          </li>
          <li>
            <a href="#works">作品</a>
          </li>
        </ul>
      </header>

      <main className=" h-screen w-full mb-96 text-gray-800 flex flex-col items-center">
        <a id="introduction" />
        <section className=" w-9/12 p-8 my-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col lg:flex-row items-end">
          <img
            src={mySelfImage}
            alt=""
            className=" w-full lg:w-1/2 h-full rounded-t-2xl lg:rounded-se-none lg:rounded-l-2xl border-4 border-b-0 lg:border-b-4 lg:border-r-0 border-slate-200 bg-cover"
          />
          <div className=" w-full lg:w-1/2 h-full p-8 rounded-b-2xl lg:rounded-es-none lg:rounded-r-2xl border-4 border-t-0 lg:border-t-4 lg:border-l-0 border-slate-200 flex flex-col justify-evenly">
            <h2 className=" text-4xl pb-2 mb-8 border-b-2 border-slate-200">
              久乗 建汰 (kunori kenta)
            </h2>
            <ul className=" h-full flex flex-col gap-8">
              <li>
                <p>所属-</p>
                <p className=" text-2xl ml-4">ECCコンピュータ専門学校</p>
              </li>
              <li>
                <p>卒業年次-</p>
                <p className=" text-2xl ml-4">2026/3</p>
              </li>
              <li>
                <p>希望職種-</p>
                <p className=" text-2xl ml-4">Webエンジニア</p>
              </li>
              <li>
                <p>メールアドレス-</p>
                <p className=" text-2xl ml-4">pontaiponji@gmail.com</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="skill" className=" w-9/12 py-8">
          <h3 className=" pl-4 pb-2 text-4xl border-b-4 border-slate-200">
            スキル
          </h3>
          <div className=" mt-4 grid grid-cols-2 gap-16">
            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center col-span-2">
              <h4 className=" text-2xl font-bold">コーディング</h4>
              <p className=" mb-4 text-center">
                最近はcssをtailwindで書くことが多いです。
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>HTML</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">フロントエンド</h4>
              <p className=" mb-4 text-center">
                ReactやNextをjavascriptで書いていたが
                <br />
                半年ほど前からTypescriptを使うようになった
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>javascript</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Typescript</td>
                    <td>半年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★</span>★★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Next.js</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Flutter</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Kotlin</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★</span>★★★★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">バックエンド</h4>
              <p className=" mb-4 text-center">
                最近expressを使って
                <br />
                APIやDBとの接続などいろいろ触って遊んでいます。
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>Node</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>java</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>SpringBoot</td>
                    <td>半年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★</span>★★★★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">DB</h4>
              <p className=" mb-4 text-center">
                NoSqlの使い方に苦労しModel化のありがたみがわかった。
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>MySql</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Firebase</td>
                    <td>半年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">インフラ・サーバー</h4>
              <p className=" mb-4 text-center">
                Dockerを学習してから
                <br />
                簡単に壊しても良い環境ができるので安心して学習できる。
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>Docker</td>
                    <td>半年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★</span>★★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>AWS</td>
                    <td>半年未満</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★</span>★★★★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">その他</h4>
              <p className=" mb-4 text-center">
                Atmic Deginを勉強してから
                <br />
                StoryBookを使うようになった。楽しい！
              </p>
              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>技術</th>
                    <th>経験年数</th>
                    <th>スキル</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>Figma</td>
                    <td>1年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>StoryBook</td>
                    <td>半年未満</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★</span>★★★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>git</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Notion</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★</span>★★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Discode</td>
                    <td>2年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★★★★</span>★
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Postman</td>
                    <td>半年</td>
                    <td>
                      <p className=" text-slate-400">
                        <span className=" text-slate-800">★</span>★★★★
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className=" p-8 bg-slate-100 rounded-2xl drop-shadow-2xl flex flex-col items-center">
              <h4 className=" text-2xl font-bold">保有資格</h4>
              <p className=" mb-4 text-center">
                現在、情報安全確保支援士を取るために勉強中
              </p>

              <table className=" w-full table-fixed">
                <thead>
                  <tr>
                    <th>資格</th>
                  </tr>
                </thead>
                <tbody className=" [&>tr>td]:py-2 [&>tr>td]:text-center">
                  <tr>
                    <td>基本情報技術者</td>
                  </tr>
                  <tr>
                    <td>Oracle Bronze</td>
                  </tr>
                  <tr>
                    <td>ビジネス文書実務検定１級</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
