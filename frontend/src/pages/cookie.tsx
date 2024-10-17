interface CookiesProps {
    onClose: () => void;
    lang: 'en' | 'ru';
}

export default function Cookie({onClose, lang}: CookiesProps) {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
          .popup {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5); /* Dark background with some transparency */
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1000; /* Ensure the popup is above other content */
            }
            
            /* Styles for the popup content container */
            .popup-content {
              background: white;
              padding: 20px;
              border-radius: 8px;
              position: relative;
              max-width: 800px; /* Adjust max width as needed */
              width: 90%; /* Responsive width */
              max-height: 90vh; /* Max height relative to viewport height */
              overflow-y: auto; /* Allow scrolling if content is too long */
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for better appearance */
            }
            
            /* Close button styling */
            .close-btn {
                position: fixed; /* Fix the button position relative to the viewport */
                top: 10px;
                right: 10px;
                background: transparent;
                border: none;
                font-size: 20px;
                cursor: pointer;
                color: #333;
                z-index: 2; /* Ensure the close button is always on top */
              }
            
            /* Privacy content styles */
            .privacy {
              font-size: 16px; /* Adjust font size for readability */
              color: #333; /* Dark color for text */
              line-height: 1.5; /* Improve readability */
              padding: 20px; /* Ensure padding around the content */
              box-sizing: border-box; /* Include padding and border in element's total width and height */
            }
            
            /* Heading styling inside privacy content */
            .privacy .second-title {
              font-size: 24px; /* Larger font size for headings */
              margin-bottom: 20px; /* Space below the heading */
              text-align: left; /* Align text to the left */
            }
            
            /* Additional styles for links */
            .privacy a {
              color: #007bff; /* Primary link color */
              text-decoration: underline; /* Underline links for better visibility */
            }
            
            /* Ensure correct styling for preformatted text blocks */
            .privacy pre {
              white-space: pre-wrap; /* Ensure proper wrapping of preformatted text */
            }
        `
            }}/>
            <div className="popup">
                <div className="popup-content">
                    <button className="close-btn" onClick={onClose}>X</button>
                    {lang === 'ru' ? (
                        <div className='privacy pt-24'>
                            <div className='second-title'>Политика в отношении обработки персональных данных</div>
                            <div className='third-title'>
                                Общие положения
                            </div>

                            <br/> Настоящая политика обработки персональных данных составлена в соответствии с
                            требованиями Федерального закона
                            от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных
                            данных и меры по
                            обеспечению безопасности персональных данных ИНДИВИДУАЛЬНОГО ПРЕДПРИНИМАТЕЛЯ БУДИЛОВА
                            КИРИЛЛА ЕВГЕНЬЕВИЧА (далее –
                            Оператор).
                            <br/> <br/> 1. Оператор ставит своей важнейшей целью и условием осуществления своей
                            деятельности соблюдение прав и
                            свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав
                            на неприкосновенность
                            частной жизни, личную и семейную тайну.
                            <br/> <br/> 2. Настоящая политика Оператора в отношении обработки персональных данных (далее
                            – Политика) применяется
                            ко всей информации, которую Оператор может получить о посетителях любых страниц веб-сайтов
                            http://trendvi.ru,
                            https://trendvi.ru.

                            <div className='third-title'>
                                Основные понятия, используемые в Политике
                            </div>

                            <br/> <br/> 1. Автоматизированная обработка персональных данных – обработка персональных
                            данных с помощью средств
                            вычислительной техники;
                            <br/> <br/> 2. Блокирование персональных данных – временное прекращение обработки
                            персональных данных (за исключением
                            случаев, если обработка необходима для уточнения персональных данных);
                            <br/> <br/> 3. Веб-сайт – совокупность графических и информационных материалов, а также
                            программ для ЭВМ и баз данных,
                            обеспечивающих их доступность в сети интернет по сетевым адресам http://trendvi.ru,
                            https://trendvi.ru;
                            <br/> <br/> 4. Информационная система персональных данных — совокупность содержащихся в
                            базах данных персональных
                            данных, и обеспечивающих их обработку информационных технологий и технических средств;
                            <br/> <br/> 5. Обезличивание персональных данных — действия, в результате которых невозможно
                            определить без
                            использования дополнительной информации принадлежность персональных данных конкретному
                            Пользователю или иному
                            субъекту персональных данных;
                            <br/> <br/> 6. Обработка персональных данных – любое действие (операция) или совокупность
                            действий (операций),
                            совершаемых с использованием средств автоматизации или без использования таких средств с
                            персональными данными,
                            включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление,
                            изменение), извлечение,
                            использование, передачу (распространение, предоставление, доступ), обезличивание,
                            блокирование, удаление,
                            уничтожение персональных данных;
                            <br/> <br/> 7. Оператор – государственный орган, муниципальный орган, юридическое или
                            физическое лицо, самостоятельно
                            или совместно с другими лицами организующие и (или) осуществляющие обработку персональных
                            данных, а также
                            определяющие цели обработки персональных данных, состав персональных данных, подлежащих
                            обработке, действия
                            (операции), совершаемые с персональными данными;
                            <br/> <br/> 8. Персональные данные – любая информация, относящаяся прямо или косвенно к
                            определенному или
                            определяемому Пользователю веб-сайтов http://trendvi.ru, https://trendvi.ru;
                            <br/> <br/> 9. Пользователь – любой посетитель веб-сайтов http://trendvi.ru,
                            https://trendvi.ru;
                            <br/> <br/> 10. Предоставление персональных данных – действия, направленные на раскрытие
                            персональных данных
                            определенному лицу или определенному кругу лиц;
                            <br/> <br/> 11. Распространение персональных данных – любые действия, направленные на
                            раскрытие персональных данных
                            неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными
                            данными неограниченного
                            круга лиц, в том числе обнародование персональных данных в средствах массовой информации,
                            размещение в
                            информационно-телекоммуникационных сетях или предоставление доступа к персональным данным
                            каким-либо иным способом;
                            <br/> <br/> 12. Трансграничная передача персональных данных – передача персональных данных
                            на территорию иностранного
                            государства органу власти иностранного государства, иностранному физическому или
                            иностранному юридическому лицу;
                            <br/> <br/> 13. Уничтожение персональных данных – любые действия, в результате которых
                            персональные данные
                            уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания
                            персональных данных в
                            информационной системе персональных данных и (или) результате которых уничтожаются
                            материальные носители
                            персональных данных.

                            <div className='third-title'>
                                Оператор может обрабатывать следующие персональные данные
                            </div>

                            <br/> <br/> 1. Никнейм телеграм
                            <br/> <br/> 2. e-mail (электронная почта)
                            <br/> <br/> 3. Логин
                            <br/> <br/> 4. Также на сайте происходит сбор и обработка обезличенных данных о посетителях
                            (в т.ч. файлов «cookie») с
                            помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                            <br/> <br/> 5. Вышеперечисленные данные далее по тексту Политики объединены общим понятием
                            Персональные данные.

                            <div className='third-title'>
                                Цели обработки персональных данных
                            </div>

                            <br/> <br/> 1. Цель обработки персональных данных Пользователя — Консультации, а также,
                            предоставление доступ к
                            чат-ботам, указанным на сайтах.
                            <br/> <br/> 2. Также Оператор имеет право направлять Пользователю уведомления о новых
                            продуктах и услугах, специальных
                            предложениях и различных событиях. Пользователь всегда может отказаться от получения
                            информационных сообщений,
                            направив Оператору письмо на адрес электронной почты budilov02k@yandex.ru с пометкой «Отказ
                            от уведомлениях о новых
                            продуктах и услугах и специальных предложениях».
                            <br/> <br/> 3. Обезличенные данные Пользователей, собираемые с помощью сервисов
                            интернет-статистики, служат для сбора
                            информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.

                            <div className='third-title'>
                                Правовые основания обработки персональных данных
                            </div>

                            <br/> 1. Оператор обрабатывает персональные данные Пользователя только в случае их
                            заполнения и/или отправки
                            Пользователем самостоятельно через специальные формы, расположенные на сайтах
                            http://trendvi.ru, https://trendvi.ru;
                            <br/> <br/> 2. Заполняя соответствующие формы и/или отправляя свои персональные данные
                            Оператору, Пользователь
                            выражает свое согласие с данной Политикой.
                            <br/> <br/> 3. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это
                            разрешено в настройках
                            браузера Пользователя (включено сохранение файлов «cookie» и использование технологии
                            JavaScript).

                            <div className='third-title'>
                                Порядок сбора, хранения, передачи и других видов обработки персональных данных
                            </div>

                            <br/> 1. Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается
                            путем реализации
                            правовых, организационных и технических мер, необходимых для выполнения в полном объеме
                            требований действующего
                            законодательства в области защиты персональных данных.
                            <br/> <br/> 2. Оператор обеспечивает сохранность персональных данных и принимает все
                            возможные меры, исключающие
                            доступ к персональным данным неуполномоченных лиц.
                            <br/> <br/> 3. Персональные данные Пользователя никогда, ни при каких условиях не будут
                            переданы третьим лицам, за
                            исключением случаев, связанных с исполнением действующего законодательства.
                            <br/> <br/> 4. В случае выявления неточностей в персональных данных, Пользователь может
                            актуализировать их
                            самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора
                            budilov02k@yandex.ru с
                            пометкой «Актуализация персональных данных».
                            <br/> <br/> 5. Срок обработки персональных данных является неограниченным. Пользователь
                            может в любой момент отозвать
                            свое согласие на обработку персональных данных, направив Оператору уведомление посредством
                            электронной почты на
                            электронный адрес Оператора budilov02k@yandex.ru с пометкой «Отзыв согласия на обработку
                            персональных данных».

                            <div className='third-title'>
                                Трансграничная передача персональных данных
                            </div>

                            <br/> 1. Оператор до начала осуществления трансграничной передачи персональных данных обязан
                            убедиться в том, что
                            иностранным государством, на территорию которого предполагается осуществлять передачу
                            персональных данных,
                            обеспечивается надежная защита прав субъектов персональных данных.
                            <br/> <br/> 2. Трансграничная передача персональных данных на территории иностранных
                            государств, не отвечающих
                            вышеуказанным требованиям, может осуществляться только в случае наличия согласия в
                            письменной форме субъекта
                            персональных данных на трансграничную передачу его персональных данных и/или исполнения
                            договора, стороной которого
                            является субъект персональных данных.

                            <div className='third-title'>
                                Заключительные положения
                            </div>

                            <br/> 1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся
                            обработки его
                            персональных данных, обратившись к Оператору с помощью электронной почты
                            budilov02k@yandex.ru.
                            <br/> <br/> 2. В данном документе будут отражены любые изменения политики обработки
                            персональных данных Оператором.
                            Политика действует бессрочно до замены ее новой версией.
                            <br/> <br/> 3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по
                            адресам
                            http://trendvi.ru, https://trendvi.ru.
                        </div>
                    ) : (
                        <div className='privacy pt-24'>
                            <div className='second-title'>Cookies Policy</div>
                            <div className='third-title'>
                                What are cookies?
                            </div>

                            <br/>This Cookie Policy explains what cookies are and how we use them, the types of cookies
                            we use i.e, the
                            information we collect using cookies and how that information is used, and how to manage the
                            cookie settings.
                            <br/> Cookies are small text files that are used to store small pieces of information. They
                            are stored on your device
                            when the website is loaded on your browser. These cookies help us make the website function
                            properly, make it more
                            secure, provide better user experience, and understand how the website performs and to
                            analyze what works and where
                            it needs improvement.
                            <div className='third-title'>
                                How do we use cookies?
                            </div>
                            <br/>
                            As most of the online services, our website uses first-party and third-party cookies for
                            several purposes.
                            First-party cookies are mostly necessary for the website to function the right way, and they
                            do not collect any of
                            your personally identifiable data.
                            <br/>The third-party cookies used on our website are mainly for understanding how the
                            website performs, how you
                            interact with our website, keeping our services secure, providing advertisements that are
                            relevant to you, and all
                            in all providing you with a better and improved user experience and help speed up your
                            future interactions with our
                            website.
                            <div className='third-title'>
                                Cookies Policy
                            </div>

                            <br/>Manage cookie preferences
                            <br/>Cookie Settings
                            <br/>You can change your cookie preferences any time by clicking the above button. This will
                            let you revisit the
                            cookie consent banner and change your preferences or withdraw your consent right away.
                            <br/>In addition to this, different browsers provide different methods to block and delete
                            cookies used by websites.
                            You can change the settings of your browser to block/delete the cookies. Listed below are
                            the links to the support
                            documents on how to manage and delete cookies from the major web browsers.
                            <br/>Chrome: <a
                            href='https://support.google.com/accounts/answer/32050'>https://support.google.com/accounts/answer/32050</a>
                            <br/>Safari: <a href=' https://support.apple.com/en-in/guide/safari/sfri11471/mac'>
                            https://support.apple.com/en-in/guide/safari/sfri11471/mac</a>
                            <br/>Firefox: <a
                            href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US'>
                            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US</a>
                            <br/> Internet Explorer: <a
                            href=' https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc'>
                            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc</a>
                            <br/> If you are using any other web browser, please visit your browser’s official support
                            documents.

                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
