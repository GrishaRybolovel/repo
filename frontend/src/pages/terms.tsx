interface TermsProps {
    onClose: () => void;
    lang: 'en' | 'ru';
}

export default function Terms({onClose, lang}: TermsProps) {
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
                        <div className="privacy pt-24">
                            <div className="second-title">Пользовательское соглашение trendvi</div>
                            <br/>
                            Индивидуальный предприниматель Будилов Кирилл Евгеньевич, ИНН: 312324923920,
                            ОГРН: 322312300022105 (далее – Администрация Сервиса, Администратор)
                            оказывает услуги посредством предоставления доступа к сайту
                            https://trendvi.ru (далее сайт) в соответствии с настоящим пользовательским
                            соглашением (далее – Соглашение или Пользовательское соглашение) любому
                            лицу, прошедшему регистрацию на сайте (далее "пользователь"), совместно
                            именуемые Стороны.
                            <br/>
                            <br/>

                            Настоящее Пользовательское соглашение применяется для оказания услуг на
                            территории Российской Федерации и в соответствии с законодательством
                            Российской Федерации. Сайт trendvi не является средством массовой
                            информации.
                            <br/>
                            <br/>
                            Текст Пользовательского соглашения является публичной офертой в соответствии
                            с пунктом 2 статьи 437 Гражданского кодекса РФ. Надлежащим акцептом
                            настоящей оферты в соответствии со статьей 438 Гражданского кодекса РФ
                            считается совершение всех действий, указанных в Соглашении. Безусловным
                            принятием (акцептом) условий настоящего Соглашения считается действие,
                            свидетельствующее о согласии Заказчика с Соглашением: регистрация на сайте
                            Исполнителя.
                            <br/>
                            <br/>
                            Настоящее Соглашение, заключаемое путем акцепта настоящей оферты, не требует
                            двустороннего подписания.
                            <br/>
                            <br/>
                            1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ Услуга – услуга, оказываемая Исполнителем в рамках
                            настоящего Соглашения; <br/>
                            Сайт Исполнителя– принадлежащий Исполнителю составной (сложный) объект
                            интеллектуальной собственности в составе программ для ЭВМ и других
                            программных средств, баз данных, графического контента и других
                            произведений, объединенных для обеспечения функционирования Сайта
                            Исполнителя и использования пользователями Программного продукта сервиса
                            Trendvi; доступ к Сайту Исполнителя осуществляется посредством сети
                            Интернет.
                            <br/>
                            Сервис –программно-аппаратный комплекс trendvi, состоящий из Сайта,
                            программного обеспечения, а также включающий аудио, видео, графические
                            (изобразительные) материалы, тексты, названия, логотипы, средства
                            индивидуализации (фирменное наименование, коммерческое обозначение, товарный
                            знак), доменное имя (доменные имена) и иные объекты, которые могут быть
                            признаны объектами интеллектуальной собственности, и расположенный в сети
                            Интернет по адресу https://trendvi.ru и поддоменах. ; <br/>
                            Заказчик – физическое лицо или законный представитель юридического лица или
                            индивидуального предпринимателя, пользователь сети Интернет, в частности
                            Сайта Исполнителя, акцептовавшее оферту и заключившее настоящее Соглашение;
                            <br/>
                            Тариф – документ, принимаемый и изменяемый Исполнителем в порядке,
                            установленном Соглашением, и содержащий сведения о видах услуг, оказываемых
                            Исполнителем, порядке их заказа и стоимости; <br/>
                            Регистрация – совокупность действий Заказчика, а именно предоставление своих
                            данных и первичное введение логина и пароля, для создания учетной записи на
                            Сайте Исполнителя; <br/>
                            Личный кабинет – web-страница на Сайте Исполнителя, предоставляющая
                            возможность регистрации и пользования услугами Исполнителя; <br/>
                            Учетные данные – учетные данные Заказчика, в том числе: e-mail, пароль;
                            <br/>
                            Персональные данные - любая информация, относящаяся к прямо или косвенно
                            определенному, или определяемому физическому лицу (субъекту персональных
                            данных, далее – субъект); <br/>
                            Обработка персональных данных – обработка персональных данных - любое
                            действие (операция) или совокупность действий (операций), совершаемых с
                            использованием средств автоматизации или без использования таких средств с
                            персональными данными, включая сбор, запись, систематизацию, накопление,
                            хранение, уточнение (обновление, изменение), извлечение, использование,
                            передачу (распространение, предоставление, доступ), обезличивание,
                            блокирование, удаление, уничтожение персональных данных; <br/>
                            Оператор персональных данных - государственный орган, муниципальный орган,
                            юридическое лицо или физическое лицо, самостоятельно или совместно с другими
                            лицами организующие и (или) осуществляющие обработку персональных данных, а
                            также определяющие цели обработки персональных данных, состав персональных
                            данных, подлежащих обработке, действия (операции), совершаемые с
                            персональными данными; <br/>
                            Обработчик персональных данных – лицо, осуществляющее обработку персональные
                            данных в интересах и по поручению оператора персональных данных. <br/>
                            <br/>
                            2. ПРЕДМЕТ СОГЛАШЕНИЯ 2.1. Исполнитель обязуется оказывать Заказчику
                            комплекс услуг по предоставлению аналитики трендов видео на платформе
                            Youtube, формированию описаний к ранее загруженным видео по ссылке,
                            формированию тэгов, рекомендаций по внешнему виду обложек к видео,
                            формированию сценариев видео, а также любых иных функций, которые будут
                            представлены в дальнейшем на платной и бесплатной основе в соответствии с
                            условиями Соглашения. Пользователь обязуется использовать оказанные услуги в
                            строгом соответствии с условиями Соглашения, а также оплачивать
                            Администратору оказанные услуги в случаях, предусмотренных Соглашением.
                            <br/>
                            <br/>
                            2.2. Обязательным условием оказания услуг в соответствии с настоящим
                            Соглашением является принятие, соблюдение Пользователем и применение к
                            отношениям Сторон требований и положений, определенных настоящим
                            Соглашением.
                            <br/>
                            2.3. Вся информация, размещенная Пользователем на Сайте, в том числе, его
                            персональные данные, хранятся на сервере Администратора, и Пользователь дает
                            согласие на размещение, хранение и обработку информации в соответствии с
                            Политикой конфиденциальности Сайта, присоединившись к данному Соглашению.

                            <br/>
                            <br/>
                            3. ПОРЯДОК ОКАЗАНИЯ УСЛУГ <br/>
                            3.1. В целях регистрации в Личном кабинете Пользователь в специальной форме
                            регистрации заполняет адрес своей электронной почты, указывает пароль.
                            <br/>
                            3.2. Пользователь формирует Логин и Пароль самостоятельно. <br/>
                            3.3. Пользователь подтверждает достоверность указанных им данных и факт
                            регистрации в Личном кабинете путем введения Пароля. <br/>
                            3.4. Факт Регистрации в Личном кабинете означает полное и безоговорочное
                            принятие Пользователем условий настоящего Соглашения с соответствующего
                            момента времени. <br/>
                            3.5. Все действия совершенные в Личном кабинете Пользователя, считаются
                            действиями совершенными Пользователем. <br/>
                            3.6. Доступ к платным услугам, оказываемым Администратором осуществляется
                            только после внесения Пользователем оплаты. <br/>
                            3.7. Услуга считается оплаченной с момента поступления денежных средств на
                            счет Администратора и действует до истечения срока, на который была внесена.
                            <br/>
                            3.8. В период прекращения предоставления платных услуг, Пользователь может
                            пользоваться только бесплатными услугами, предоставляемыми Администратором.
                            <br/>
                            <br/>
                            4. ИСПОЛЬЗОВАНИЕ ЛИЧНОГО КАБИНЕТА <br/>
                            4.1. Пользователь посредством Личного кабинета имеет возможность: <br/>
                            4.1.1. Получать информацию об Услугах Администратора. <br/>
                            4.1.2. Выбирать, подключать/изменять Услуги Администратора. <br/>
                            4.1.3. Получать и передавать информацию Администратору. <br/>
                            4.2. Администратор вправе: <br/>
                            4.2.1. Изменять перечень Услуг в Личном кабинете. <br/>
                            4.2.2. Приостановить, изменить порядок предоставления либо прекратить
                            предоставление доступа Пользователю в Личный кабинет в случае нарушения
                            Пользователем условий настоящего Соглашения, а также в случаях,
                            предусмотренных действующим законодательством.

                            <br/>
                            <br/>
                            5. ПРАВА И ОБЯЗАННОСТИ СТОРОН <br/>
                            5.1. Администратор обязуется: <br/>
                            5.1.1. Обеспечить предоставление Пользователю доступа к Услугам
                            Администратора, в том числе к платным Услугам при условии их оплаты
                            Пользователем. <br/>
                            5.1.2. Не разглашать, не передавать информацию третьим лицам о Пользователе
                            и его действиях в Личном кабинете, за исключением случаев, предусмотренных
                            действующим законодательством Российской Федерации и Политикой
                            конфиденциальности Сайта.
                            <br/>
                            5.2. Администратор имеет право: <br/>
                            5.2.1. Отказать Пользователю в предоставлении доступа к Личному кабинету, в
                            случае нарушения Пользователем своих обязательств по настоящему Соглашению,
                            положений Политики конфиденциальности Сайта или иных документов
                            Администратора, регламентирующих работу и использование Сайта, нарушения
                            применимого законодательства. <br/>
                            5.2.2. Приостановить оказание платных Услуг при истечении срока, на который
                            Услуга была оплачена, до внесения Пользователем очередного платежа в
                            соответствии с Тарифом. <br/>
                            5.2.3. Осуществлять ограничение доступа к Личному кабинету (в том числе с
                            использованием автоматизированных систем) в целях реализации установленных
                            действующим законодательством РФ обязанностей Администратора по защите
                            информации и персональных данных. <br/>
                            5.2.4. Вносить изменения в работу и наполнение Сайта и Программного продукта
                            trendvi в связи с внедрением новых продуктов и услуг, а также предоставлять
                            доступ к новым сервисам без предварительного уведомления Пользователя.
                            <br/>
                            5.2.5. Изменять условия настоящего Соглашения в одностороннем порядке без
                            предварительного уведомления Пользователя. Старая редакция Соглашения
                            перестает действовать с момента размещения на Сайте нового текста
                            Соглашения. <br/>

                            5.3. Пользователь обязан: <br/>
                            5.3.1. Предоставить при Регистрации и использовании Личного кабинета
                            достоверные Учетные данные о себе. <br/>
                            5.3.2. Производить действия в Личном кабинете от имени юридического лица,
                            либо индивидуального предпринимателя только при наличии соответствующих
                            полномочий, например, доверенности, выданной данными лицами до момента
                            совершения действий в Личном кабинете. <br/>
                            5.3.3. Обеспечить сохранность Учетных данных и информации, содержащейся в
                            Личном кабинете. При использовании Личного кабинета, до момента получения от
                            Пользователя информации о нарушении режима конфиденциальности, все действия,
                            совершенные и направленные с помощью Личного кабинета, даже если такие
                            действия были совершены иными лицами, считаются совершенными Пользователем.
                            В этом случае права и обязанности, а также ответственность наступают у
                            Пользователя. <br/>
                            5.3.4. Нести ответственность за все действия, предпринятые через Личный
                            кабинет, а также при использовании Сайта, имевшие место после регистрации
                            Пользователя в Личном кабинете. <br/>
                            <br/>
                            5.4. Заказчик имеет право: <br/>
                            5.4.1. Пользоваться Личным кабинетом, Сайтом Исполнителя и Программным
                            продуктом trendvi согласно условиям настоящего Соглашения. <br/>
                            5.4.2. Использовать по своему выбору бесплатную или платную версию trendvi
                            <br/>
                            5.4.2.1. Бесплатная версия Программного продукта trendvi предусматривает:
                            <br/>
                            1) Ограниченные функциональные возможности Программного продукта trendvi в
                            формате тестового периода, согласно Тарифам; <br/>

                            5.4.2.3. Платная версия Программного продукта trendvi предусматривает:
                            <br/>
                            1) Расширенные функциональные возможности, согласно выбранного тарифа.
                            <br/>
                            2) Все актуальные редакции тарифов размещены на Сайте. <br/>
                            5.5. Пользователь не имеет права: <br/>
                            5.5.1. Использовать Сайт и Программный продукт trendvi в незаконных и
                            недобросовестных целях, в нарушение условий настоящего Соглашения и
                            применимого законодательства. <br/>
                            <br/>
                            <br/>

                            6. ПЕРСОНАЛЬНЫЕ ДАННЫЕ <br/>
                            6.1. Пользователь дает согласие Администратору на автоматизированную
                            обработку персональных данных, предоставленных Пользователем при регистрации
                            на Сайте, а также в процессе использования Личного кабинета, а также на
                            обработку персональных данных третьими лицами по поручению Администратора.
                            <br/>
                            6.2. Администратор осуществляет обработку персональных данных в соответствии
                            с Политикой конфиденциальности, размещенной на Сайте. <br/>
                            <br/>
                            6.3. Оператор осуществляет обработку персональных данных в соответствии с
                            действующим законодательством, в том числе в соответствии с Федеральным
                            законом РФ от 27.07.2006 N 152-ФЗ "О персональных данных". <br/>
                            <br/>
                            <br/>

                            7. ОТВЕТСТВЕННОСТЬ <br/>
                            7.1. Пользователь самостоятельно несет ответственность за разглашение
                            Учетных данных и за доступ третьих лиц к информации, содержащейся в Личном
                            кабинете. <br/>
                            7.2. Пользователь обязуется возместить Администратору убытки, возникшие у
                            Администратора по причине несоблюдения Пользователем настоящего Соглашения,
                            Политики конфиденциальности Сайта, иных документов Администратора,
                            регламентирующих работу и использование Сайта, а также применимого
                            законодательства, в том числе в размере ответственности, возложенной
                            государственными органами на Администратора. <br/>
                            7.3. Администратор не несет ответственность за убытки, причиненные
                            Пользователю в результате разглашения третьим лицам Учетных данных
                            Пользователя, произошедшего не по вине Администратора. Если любое лицо,
                            помимо Пользователя, авторизуется в Личном кабинете, используя пароль
                            Пользователя, то все действия, совершенные таким лицом, будут считаться
                            совершенными этим Пользователем, до тех пор, пока Пользователь не уведомит
                            Администратора о раскрытии Учетных данных. <br/>
                            7.4. Администратор не несет ответственности за убытки, причиненные
                            Пользователем третьим лицам в результате использования Программного продукта
                            trendvi. <br/>
                            7.5. Администратор не несет ответственности за неисполнение или ненадлежащее
                            исполнение обязательств по Соглашению, а также возможные убытки, возникшие,
                            в том числе, но не ограничиваясь, в результате: <br/>
                            – неправомерных действий Пользователей, направленных на нарушение
                            информационной безопасности или нормального функционирования Сайта; <br/>
                            – отсутствия (невозможности установления, прекращения и пр.) интернет -
                            соединения между сервером Пользователя и сервером Администратора; <br/>
                            – других случаев, связанных с действиями (бездействием) Пользователей и/или
                            других субъектов, направленными на ухудшение общей ситуации с использованием
                            сети Интернет и/ или компьютерного оборудования, существовавшей на момент
                            заключения Соглашения, а также любых других действий, направленных на Сайт;
                            <br/>
                            – выполнения профилактических/технических работ. <br/>
                            7.6. Администратор оставляет за собой право по своему собственному
                            усмотрению, а также при получении информации от других пользователей Сайта,
                            либо третьих лиц о нарушении Пользователем настоящего Соглашения
                            приостанавливать, ограничивать или прекращать доступ Пользователя к Личному
                            кабинету в любое время по любой причине или без объяснения причин, с
                            предварительным уведомлением или без такового, не отвечая за любой вред,
                            который может быть причинен таким действием. <br/>
                            7.7. Администратор оставляет за собой право удалить Личный кабинет
                            Пользователя и (или) приостановить, ограничить или прекратить доступ
                            Пользователя к любому из сервисов Сайта, если обнаружит, что, по его мнению,
                            Пользователь представляет угрозу для Сайта. Администрация Сайта не несет
                            ответственности за осуществленное в соответствии с настоящим условием
                            временное блокирование или удаление информации либо удаление Личного
                            кабинета (прекращение регистрации) Пользователя. Удаление Личного кабинета
                            Пользователя означает автоматическое удаление всей информации, размещенной
                            на ней. После удаления Личного кабинета Пользователь теряет права доступа к
                            Личному кабинету. <br/>
                            7.8. Ни одна из Сторон не несет ответственности за полное или частичное
                            неисполнение любой из своих обязанностей, если неисполнение является
                            следствием таких обстоятельств, как наводнение, пожар, землетрясение, другие
                            стихийные бедствия, война или военные действия и другие обстоятельства
                            непреодолимой силы, возникшие после заключения Соглашения и не зависящие от
                            воли Сторон. <br/>
                            <br/>
                            <br/>
                            8. ПОРЯДОК РАЗРЕШЕНИЯ СПОРОВ 8.1. В случае возникновения споров между
                            Пользователем и Администратором по вопросам, связанным с исполнением
                            Соглашения, Стороны примут все меры к разрешению их путем переговоров.
                            Претензионный порядок разрешения споров обязателен. Стороны имеют право
                            направлять претензии на электронные адреса, указанные в Соглашении. Срок
                            рассмотрения претензии составляет – 20 (двадцать) дней с момента направления
                            претензии. 8.2. Все споры между Сторонами подлежат разрешению путем
                            переговоров. При не достижении соглашения, спор рассматривается в
                            Арбитражном суде г. Москвы.
                            <br/>
                            <br/>
                            9. ПРОЧИЕ УСЛОВИЯ 9.1. Пользователь дает согласие на получение на
                            электронную почту сообщений информационного характера, документов и
                            сведений. <br/>
                            9.2. Адресом электронной почты Администратора, на который может быть
                            направлена претензия, заявление и т.д. является:budilov02k@yandex.ru, для
                            Пользователя: адрес электронной почты, указанный Пользователем в Личном
                            кабинете. <br/>
                            9.3. Признание судом какого-либо положения Соглашения недействительным или
                            не подлежащим принудительному исполнению не влечет недействительности иных
                            положений Соглашения. <br/>
                            9.4. Во всем остальном, что не урегулировано Соглашением, Стороны
                            руководствуются действующим законодательством Российской Федерации. <br/>
                            9.5. Настоящее Соглашение вступает в силу с момента акцепта оферты
                            Заказчиком и заключается на неопределенный срок. <br/>
                            9.6. В случае, если после регистрации Пользователь, либо лицо, чьи интересы
                            представляет Пользователь, не будет согласно с условиями настоящего
                            Соглашения, либо с условиями Соглашения в новой редакции, опубликованной на
                            Сайте, оно должно незамедлительно обратиться к Администратору для блокировки
                            Личного кабинета Пользователя. В противном случае продолжение использования
                            Сайта означает, что Пользователь, либо лицо, чьи интересы представляет
                            Пользователь, согласно с условиями Соглашения. <br/>
                            9.7. Вопросы, не урегулированные настоящим Соглашением, подлежат разрешению
                            в соответствии с законодательством РФ. <br/>
                            9.8. Пользователь подтверждает, что ознакомился со всеми положениями
                            Соглашения, понимает и принимает их. <br/>
                            10. РЕКВИЗИТЫ АДМИНИСТРАЦИИ <br/>
                            <br/>
                            ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ БУДИЛОВ КИРИЛЛ ЕВГЕНЬЕВИЧ <br/>
                            ИНН: 312324923920 <br/>
                            ОГРН: 322312300022105,<br/>
                            E-mail: <a href="mailto:budilov02k@yandex.ru">budilov02k@yandex.ru</a>
                        </div>
                    ) : (
                        <div className="privacy pt-24">
                            <div className="second-title">Terms of service</div>
                            <br/>
                            Last update July 05,2024

                            <br/>
                            <br/>
                            AGREEMENT TO OUR LEGAL TERMS <br/>
                            We are Sole Proprietor Budilov Kirill Evgenevich, doing business as Trendvi
                            ("Company," "we," "us," "our"), a company registered in Russia at Moscow,
                            Moscow, Moscow 115470. Our VAT number is 322312300022105.

                            <br/>
                            We operate the website www.trendvi.media (the "Site"), as well as any other
                            related products and services that refer or link to these legal terms (the
                            "Legal Terms") (collectively, the "Services"). <br/>
                            You can contact us by email at fabricbotai@gmail.com or by mail to Moscow,
                            Moscow, Moscow 115470, Russia.
                            <br/>
                            <br/>
                            These Legal Terms constitute a legally binding agreement made between you,
                            whether personally or on behalf of an entity ("you"), and Sole Proprietor
                            Budilov Kirill Evgenevich, concerning your access to and use of the
                            Services. You agree that by accessing the Services, you have read,
                            understood, and agreed to be bound by all of these Legal Terms. IF YOU DO
                            NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED
                            FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY. <br/>
                            Supplemental terms and conditions or documents that may be posted on the
                            Services from time to time are hereby expressly incorporated herein by
                            reference. <br/>
                            We reserve the right, in our sole discretion, to make changes or
                            modifications to these Legal Terms from time to time. We will alert you
                            about any changes by updating the "Last updated" date of these Legal Terms,
                            and you waive any right to receive specific notice of each such change. It
                            is your responsibility to periodically review these Legal Terms to stay
                            informed of updates. You will be subject to, and will be deemed to have been
                            made aware of and to have accepted, the changes in any revised Legal Terms
                            by your continued use of the Services after the date such revised Legal
                            Terms are posted. <br/>
                            The Services are intended for users who are at least 13 years of age. All
                            users who are minors in the jurisdiction in which they reside (generally
                            under the age of 18) must have the permission of, and be directly supervised
                            by, their parent or guardian to use the Services. If you are a minor, you
                            must have your parent or guardian read and agree to these Legal Terms prior
                            to you using the Services. <br/>
                            We recommend that you print a copy of these Legal Terms for your records.
                            <br/>OUR SERVICES <br/>
                            INTELLECTUAL PROPERTY RIGHTS <br/>
                            USER REPRESENTATIONS <br/>
                            USER REGISTRATION <br/>
                            PURCHASES AND PAYMENT <br/>
                            SUBSCRIPTIONS <br/>
                            PROHIBITED ACTIVITIES <br/>
                            USER GENERATED CONTRIBUTIONS <br/>
                            CONTRIBUTION LICENSE <br/>
                            SERVICES MANAGEMENT <br/>
                            PRIVACY POLICY <br/>
                            TERM AND TERMINATION <br/>
                            MODIFICATIONS AND INTERRUPTIONS <br/>
                            GOVERNING LAW <br/>
                            DISPUTE RESOLUTION <br/>
                            CORRECTIONS <br/>
                            DISCLAIMER <br/>
                            LIMITATIONS OF LIABILITY <br/>
                            INDEMNIFICATION <br/>
                            USER DATA <br/>
                            ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES <br/>
                            CALIFORNIA USERS AND RESIDENTS <br/>
                            MISCELLANEOUS <br/>
                            CONTACT US

                            <br/><br/>
                            Our services <br/>
                            The information provided when using the Services is not intended for
                            distribution to or use by any person or entity in any jurisdiction or
                            country where such distribution or use would be contrary to law or
                            regulation or which would subject us to any registration requirement within
                            such jurisdiction or country. Accordingly, those persons who choose to
                            access the Services from other locations do so on their own initiative and
                            are solely responsible for compliance with local laws, if and to the extent
                            local laws are applicable.
                            <br/>
                            The Services are not tailored to comply with industry-specific regulations
                            (Health Insurance Portability and Accountability Act (HIPAA), Federal
                            Information Security Management Act (FISMA), etc.), so if your interactions
                            would be subjected to such laws, you may not use the Services. You may not
                            use the Services in a way that would violate the Gramm-Leach-Bliley Act
                            (GLBA). <br/><br/>
                            2. INTELLECTUAL PROPERTY RIGHTS <br/>
                            <br/>
                            Our intellectual property <br/>
                            We are the owner or the licensee of all intellectual property rights in our
                            Services, including all source code, databases, functionality, software,
                            website designs, audio, video, text, photographs, and graphics in the
                            Services (collectively, the "Content"), as well as the trademarks, service
                            marks, and logos contained therein (the "Marks"). <br/>
                            Our Content and Marks are protected by copyright and trademark laws (and
                            various other intellectual property rights and unfair competition laws) and
                            treaties in the United States and around the world. <br/>
                            The Content and Marks are provided in or through the Services "AS IS" for
                            your personal, non-commercial use or internal business purpose only. <br/>
                            Your use of our Services <br/>
                            Subject to your compliance with these Legal Terms, including the "PROHIBITED
                            ACTIVITIES" section below, we grant you a non-exclusive, non-transferable,
                            revocable license to: <br/>
                            access the Services; and <br/>
                            download or print a copy of any portion of the Content to which you have
                            properly gained access. <br/>
                            solely for your personal, non-commercial use or internal business purpose.
                            <br/>
                            Except as set out in this section or elsewhere in our Legal Terms, no part
                            of the Services and no Content or Marks may be copied, reproduced,
                            aggregated, republished, uploaded, posted, publicly displayed, encoded,
                            translated, transmitted, distributed, sold, licensed, or otherwise exploited
                            for any commercial purpose whatsoever, without our express prior written
                            permission. <br/>
                            If you wish to make any use of the Services, Content, or Marks other than as
                            set out in this section or elsewhere in our Legal Terms, please address your
                            request to: fabricbotai@gmail.com. If we ever grant you the permission to
                            post, reproduce, or publicly display any part of our Services or Content,
                            you must identify us as the owners or licensors of the Services, Content, or
                            Marks and ensure that any copyright or proprietary notice appears or is
                            visible on posting, reproducing, or displaying our Content. <br/>
                            We reserve all rights not expressly granted to you in and to the Services,
                            Content, and Marks. <br/>
                            Any breach of these Intellectual Property Rights will constitute a material
                            breach of our Legal Terms and your right to use our Services will terminate
                            immediately. <br/>
                            Your submissions <br/>
                            Please review this section and the "PROHIBITED ACTIVITIES" section carefully
                            prior to using our Services to understand the (a) rights you give us and (b)
                            obligations you have when you post or upload any content through the
                            Services. <br/>
                            Submissions: By directly sending us any question, comment, suggestion, idea,
                            feedback, or other information about the Services ("Submissions"), you agree
                            to assign to us all intellectual property rights in such Submission. You
                            agree that we shall own this Submission and be entitled to its unrestricted
                            use and dissemination for any lawful purpose, commercial or otherwise,
                            without acknowledgment or compensation to you. <br/>
                            You are responsible for what you post or upload: By sending us Submissions
                            through any part of the Services you: <br/>
                            • confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and
                            will not post, send, publish, upload, or transmit through the Services any
                            Submission that is illegal, harassing, hateful, harmful, defamatory,
                            obscene, bullying, abusive, discriminatory, threatening to any person or
                            group, sexually explicit, false, inaccurate, deceitful, or misleading;
                            <br/>
                            to the extent permissible by applicable law, waive any and all moral rights
                            to any such Submission; <br/>
                            warrant that any such Submission are original to you or that you have the
                            necessary rights and licenses to submit such Submissions and that you have
                            full authority to grant us the above-mentioned rights in relation to your
                            Submissions; and <br/>
                            warrant and represent that your Submissions do not constitute confidential
                            information. <br/>
                            You are solely responsible for your Submissions and you expressly agree to
                            reimburse us for any and all losses that we may suffer because of your
                            breach of (a) this section, (b) any third party's intellectual property
                            rights, or (c) applicable law. <br/><br/>
                            3. USER REPRESENTATIONS <br/>
                            <br/>
                            By using the Services, you represent and warrant that: (1) all registration
                            information you submit will be true, accurate, current, and complete; (2)
                            you will maintain the accuracy of such information and promptly update such
                            registration information as necessary; (3) you have the legal capacity and
                            you agree to comply with these Legal Terms; (4) you are not under the age of
                            13; (5) you are not a minor in the jurisdiction in which you reside, or if a
                            minor, you have received parental permission to use the Services; (6) you
                            will not access the Services through automated or non-human means, whether
                            through a bot, script or otherwise; (7) you will not use the Services for
                            any illegal or unauthorized purpose; and (8) your use of the Services will
                            not violate any applicable law or regulation. <br/>
                            If you provide any information that is untrue, inaccurate, not current, or
                            incomplete, we have the right to suspend or terminate your account and
                            refuse any and all current or future use of the Services (or any portion
                            thereof). <br/><br/>
                            4. USER REGISTRATION
                            <br/>
                            You may be required to register to use the Services. You agree to keep your
                            password confidential and will be responsible for all use of your account
                            and password. We reserve the right to remove, reclaim, or change a username
                            you select if we determine, in our sole discretion, that such username is
                            inappropriate, obscene, or otherwise objectionable. <br/><br/>
                            5. PURCHASES AND PAYMENT
                            <br/>
                            We accept the following forms of payment: <br/>
                            Visa <br/>
                            Mastercard <br/>
                            You agree to provide current, complete, and accurate purchase and account
                            information for all purchases made via the Services. You further agree to
                            promptly update account and payment information, including email address,
                            payment method, and payment card expiration date, so that we can complete
                            your transactions and contact you as needed. Sales tax will be added to the
                            price of purchases as deemed required by us. We may change prices at any
                            time. All payments shall be in US dollars. <br/>
                            You agree to pay all charges at the prices then in effect for your purchases
                            and any applicable shipping fees, and you authorize us to charge your chosen
                            payment provider for any such amounts upon placing your order. We reserve
                            the right to correct any errors or mistakes in pricing, even if we have
                            already requested or received payment. <br/>
                            We reserve the right to refuse any order placed through the Services. We
                            may, in our sole discretion, limit or cancel quantities purchased per
                            person, per household, or per order. These restrictions may include orders
                            placed by or under the same customer account, the same payment method,
                            and/or orders that use the same billing or shipping address. We reserve the
                            right to limit or prohibit orders that, in our sole judgment, appear to be
                            placed by dealers, resellers, or distributors. <br/><br/>
                            6. SUBSCRIPTIONS
                            <br/>
                            Billing and Renewal <br/>
                            Your subscription will continue and automatically renew unless canceled. You
                            consent to our charging your payment method on a recurring basis without
                            requiring your prior approval for each recurring charge, until such time as
                            you cancel the applicable order. The length of your billing cycle is
                            monthly. <br/>
                            Free Trial <br/>
                            We offer a 30-day free trial to new users who register with the Services.
                            The account will not be charged and the subscription will be suspended until
                            upgraded to a paid version at the end of the free trial. <br/>
                            Cancellation <br/>
                            You can cancel your subscription at any time by logging into your account.
                            Your cancellation will take effect at the end of the current paid term. If
                            you have any questions or are unsatisfied with our Services, please email us
                            at fabricbotai@gmail.com. <br/>
                            Fee Changes <br/>
                            We may, from time to time, make changes to the subscription fee and will
                            communicate any price changes to you in accordance with applicable law.
                            <br/><br/>
                            7. PROHIBITED ACTIVITIES <br/>
                            <br/>You may not access or use the Services for any purpose other than that
                            for which we make the Services available. The Services may not be used in
                            connection with any commercial endeavors except those that are specifically
                            endorsed or approved by US. <br/>As a user of the Services, you agree not
                            to: <br/>Systematically retrieve data or other content from the Services to
                            create or compile, directly or indirectly, a collection, compilation,
                            database, or directory without written permission from us. <br/>
                            Trick, defraud, or mislead us and other users, especially in any attempt to
                            learn sensitive account information such as user passwords. <br/>
                            Circumvent, disable, or otherwise interfere with security-related features
                            of the Services, including features that prevent or restrict the use or
                            copying of any Content or enforce limitations on the use of the Services
                            and/or the Content contained therein. <br/>
                            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
                            Services. <br/>
                            Use any information obtained from the Services in order to harass, abuse, or
                            harm another person. <br/>
                            Make improper use of our support services or submit false reports of abuse
                            or misconduct. <br/>
                            Use the Services in a manner inconsistent with any applicable laws or
                            regulations <br/>
                            Engage in unauthorized framing of or linking to the Services. <br/>
                            Upload or transmit (or attempt to upload or to transmit) viruses, Trojan
                            horses, or other material, including excessive use of capital letters and
                            spamming (continuous posting of repetitive text), that interferes with any
                            party's uninterrupted use and enjoyment of the Services or modifies,
                            impairs, disrupts, alters, or interferes with the use, features, functions,
                            operation, or maintenance of the Services. <br/>
                            Engage in any automated use of the system, such as using scripts to send
                            comments or messages, or using any data mining, robots, or similar data
                            gathering and extraction tools. <br/>
                            Delete the copyright or other proprietary rights notice from any Content.
                            <br/>
                            Attempt to impersonate another user or person or use the username of another
                            user. <br/>
                            Upload or transmit (or attempt to upload or to transmit) any material that
                            acts as a passive or active information collection or transmission
                            mechanism, including without limitation, clear graphics interchange formats
                            ("gifs"), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes
                            referred to as <br/>
                            "spyware" or "passive collection mechanisms" or "pcms"). <br/>
                            Interfere with, disrupt, or create an undue burden on the Services or the
                            networks or services connected to the Services. <br/>
                            Harass, annoy, intimidate, or threaten any of our employees or agents
                            engaged in providing any portion of the Services to you. <br/>
                            Attempt to bypass any measures of the Services designed to prevent or
                            restrict access to the Services, or any portion of the Services. <br/>
                            Copy or adapt the Services' software, including but not limited to Flash,
                            PHP, HTML, JavaScript, or other code. <br/>
                            Except as permitted by applicable law, decipher, decompile, disassemble, or
                            reverse engineer any of the software comprising or in any way making up a
                            part of the Services. <br/>
                            Except as may be the result of standard search engine or Internet browser
                            usage, use, launch, develop, or distribute any automated system, including
                            without limitation, any spider, robot, cheat utility, scraper, or offline
                            reader that accesses the Services, or use or launch any unauthorized script
                            or other software. <br/>
                            Use a buying agent or purchasing agent to make purchases on the Services.
                            <br/>
                            Make any unauthorized use of the Services, including collecting usernames
                            and/or email addresses of users by electronic or other means for the purpose
                            of sending unsolicited email, or creating user accounts by automated means
                            or under false pretenses. <br/>
                            Use the Services as part of any effort to compete with us or otherwise use
                            the Services and/or the Content for any revenue-generating endeavor or
                            commercial enterprise. <br/>
                            Use the Services to advertise or offer to sell goods and services. <br/>
                            Use the Services to get analytics.
                            <br/>
                            <br/>
                            8. USER GENERATED CONTRIBUTIONS <br/>
                            The Services does not offer users to submit or post content.
                            <br/><br/>
                            9. CONTRIBUTION LICENSE <br/>
                            <br/>
                            You and Services agree that we may access, store, process, and use any
                            information and personal data that you provide and your choices (including
                            settings). <br/>
                            By submitting suggestions or other feedback regarding the Services, you
                            agree that we can use and share such feedback for any purpose without
                            compensation to you. <br/><br/>
                            10. SERVICES MANAGEMENT <br/>
                            <br/>
                            We reserve the right, but not the obligation, to: (1) monitor the Services
                            for violations of these Legal Terms; (2) take appropriate legal action
                            against anyone who, in our sole discretion, violates the law or these Legal
                            Terms, including without limitation, reporting such user to law enforcement
                            authorities; (3) in our sole discretion and without limitation, refuse,
                            restrict access to, limit the availability of, or disable (to the extent
                            technologically feasible) any of your Contributions or any portion thereof;
                            (4) in our sole discretion and without limitation, notice, or liability, to
                            remove from the Services or otherwise disable all files and content that are
                            excessive in size or are in any way burdensome to our systems; and (5)
                            otherwise manage the Services in a manner designed to protect our rights and
                            property and to facilitate the proper functioning of the Services.
                            <br/><br/>
                            11. PRIVACY POLICY <br/>
                            <br/>
                            We care about data privacy and security. By using the Services, you agree to
                            be bound by our Privacy Policy posted on the Services, which is incorporated
                            into these Legal Terms. Please be advised the Services are hosted in Russia.
                            If you access the Services from any other region of the world with laws or
                            other requirements governing personal data collection, use, or disclosure
                            that differ from applicable laws in Russia, then through your continued use
                            of the Services, you are transferring your data to Russia, and you expressly
                            consent to have your data transferred to and processed in Russia. Further,
                            we do not knowingly accept, request, or solicit information from children or
                            knowingly market to children. Therefore, in accordance with the U.S.
                            Children's Online Privacy Protection Act, if we receive actual knowledge
                            that anyone under the age of 13 has provided personal information to us
                            without the requisite and verifiable parental consent, we will delete that
                            information from the Services as quickly as is reasonably practical.
                            <br/><br/>
                            12. TERM AND TERMINATION <br/>
                            These Legal Terms shall remain in full force and effect while you use the
                            Services. <br/>
                            <br/>
                            WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE
                            RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY
                            ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                            TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION
                            FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE
                            LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
                            USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT
                            OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
                            DISCRETION. <br/>
                            If we terminate or suspend your account for any reason, you are prohibited
                            from registering and creating a new account under your name, a fake or
                            borrowed name, or the name of any third party, even if you may be acting on
                            behalf of the third party. <br/>
                            In addition to terminating or suspending your account, we reserve the right
                            to take appropriate legal action, including without limitation pursuing
                            civil, criminal, and injunctive redress. <br/><br/>
                            13. MODIFICATIONS AND INTERRUPTIONS <br/>
                            <br/>
                            We reserve the right to change, modify, or remove the contents of the
                            Services at any time or for any reason at our sole discretion without
                            notice. However, we have no obligation to update any information on our
                            Services. We will not be liable to you or any third party for any
                            modification, price change, suspension, or discontinuance of the Services.
                            <br/>
                            We cannot guarantee the Services will be available at all times. We may
                            experience hardware, software, or other problems or need to perform
                            maintenance related to the Services, resulting in interruptions, delays, or
                            errors. We reserve the right to change, revise, update, suspend,
                            discontinue, or otherwise modify the Services at any time or for any reason
                            without notice to you. You agree that we have no liability whatsoever for
                            any loss, damage, or inconvenience caused by your inability to access or use
                            the Services during any downtime or discontinuance of the Services. Nothing
                            in these Legal Terms will be construed to obligate us to maintain and
                            support the Services or to supply any corrections, updates, or releases in
                            connection therewith. <br/><br/>
                            14. GOVERNING LAW <br/>
                            These Legal Terms shall be governed by and defined following the laws of
                            Russia. <br/>
                            <br/>
                            Sole Proprietor Budilov Kirill Evgenevich and yourself irrevocably consent
                            that the courts of Russia shall have exclusive jurisdiction to resolve any
                            dispute which may arise in connection with these Legal Terms. <br/><br/>
                            15. DISPUTE RESOLUTION <br/>
                            Binding Arbitration <br/>
                            Any dispute arising out of or in connection with these Legal Terms,
                            including any question regarding its existence, validity, or termination,
                            shall be referred to and finally resolved by the International Commercial
                            Arbitration Court under the European Arbitration Chamber (Belgium, Brussels,
                            Avenue Louise, 146) according to the Rules of this ICAC, which, as a result
                            of referring to it, is considered as the part of this clause. The number of
                            arbitrators shall be one (1). The seat, or legal place, or arbitration shall
                            be Moscow, Russia. The language of the proceedings shall be Russian. The
                            governing law of these Legal Terms shall be substantive law of Russia.
                            Restrictions <br/>
                            <br/>
                            The Parties agree that any arbitration shall be limited to the Dispute
                            between the Parties individually. To the full extent permitted by law, (a)
                            no arbitration shall be joined with any other proceeding; (b) there is no
                            right or authority for any Dispute to be arbitrated on a class-action basis
                            or to utilize class action procedures; and (c) <br/>
                            there is no right or authority for any Dispute to be brought in a purported
                            representative capacity on behalf of the general public or any other
                            persons. <br/>
                            Exceptions to Arbitration <br/>
                            The Parties agree that the following Disputes are not subject to the above
                            provisions concerning binding arbitration: (a) any Disputes seeking to
                            enforce or protect, or concerning the validity of, any of the intellectual
                            property rights of a Party; (b) any Dispute related to, or arising from,
                            allegations of theft, piracy, invasion of privacy, or unauthorized use; and
                            (c) any claim for injunctive relief. If this provision is found to be
                            illegal or unenforceable, then neither Party will elect to arbitrate any
                            Dispute falling within that portion of this provision found to be illegal or
                            unenforceable and such Dispute shall be decided by a court of competent
                            jurisdiction within the courts listed for jurisdiction above, and the
                            Parties agree to submit to the personal jurisdiction of that court.
                            <br/><br/>
                            16. CORRECTIONS <br/>
                            There may be information on the Services that contains typographical errors,
                            inaccuracies, or omissions, including descriptions, pricing, availability,
                            and various other information. We reserve the right to correct any errors,
                            inaccuracies, or omissions and to change or update the information on the
                            Services at any time, without prior notice.
                            <br/><br/>
                            17. DISCLAIMER <br/>
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
                            YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
                            PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
                            CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
                            LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                            PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
                            REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT
                            OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES
                            AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
                            MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR
                            PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND
                            USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                            SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
                            STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
                            THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
                            TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY
                            ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE
                            OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                            TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT
                            WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
                            SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
                            HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY
                            BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
                            RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
                            PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
                            SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST
                            JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
                            <br/><br/>
                            18. LIMITATIONS OF LIABILITY <br/>
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU
                            OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                            INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
                            REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                            SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO
                            YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL
                            AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE
                            ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE
                            LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES
                            OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO
                            YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO
                            YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            <br/><br/>
                            19. INDEMNIFICATION <br/>
                            You agree to defend, indemnify, and hold us harmless, including our
                            subsidiaries, affiliates, and all of our respective officers, agents,
                            partners, and employees, from and against any loss, damage, liability,
                            claim, or demand, including reasonable attorneys' fees and expenses, made by
                            any third party due to or arising out of: (1) use of the Services; (2)
                            breach of these Legal Terms; (3) any breach of your representations and
                            warranties set forth in these Legal Terms; (4) your violation of the rights
                            of a third party, including but not limited to intellectual property rights;
                            or (5) any overt harmful act toward any other user of the Services with whom
                            you connected via the Services. Notwithstanding the foregoing, we reserve
                            the right, at your expense, to assume the exclusive defense and control of
                            any matter for which you are required to indemnify us, and you agree to
                            cooperate, at your expense, with our defense of such claims. We will use
                            reasonable efforts to notify you of any such claim, action, or proceeding
                            which is subject to this indemnification upon becoming aware of it.
                            <br/><br/>
                            20. USER DATA <br/>
                            We will maintain certain data that you transmit to the Services for the
                            purpose of managing the performance of the Services, as well as data
                            relating to your use of the Services. Although we perform regular routine
                            backups of data, you are solely responsible for all data that you transmit
                            or that relates to any activity you have undertaken using the Services. You
                            agree that we shall have no liability to you for any loss or corruption of
                            any such data, and you hereby waive any right of action against us arising
                            from any such loss or corruption of such data.
                            <br/><br/>
                            21. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES <br/>
                            Visiting the Services, sending us emails, and completing online forms
                            constitute electronic communications. You consent to receive electronic
                            communications, and you agree that all agreements, notices, disclosures, and
                            other communications we provide to you electronically, via email and on the
                            Services, satisfy any legal requirement that such communication be in
                            writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                            ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
                            AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
                            SERVICES. You hereby waive any rights or requirements under any statutes,
                            regulations, rules, ordinances, or other laws in any jurisdiction which
                            require an original signature or delivery or retention of non-electronic
                            records, or to payments or the granting of credits by any means other than
                            electronic means.
                            <br/><br/>
                            22. CALIFORNIA USERS AND RESIDENTS <br/>
                            If any complaint with us is not satisfactorily resolved, you can contact the
                            Complaint Assistance Unit of the Division of Consumer Services of the
                            California Department of Consumer Affairs in writing at 1625 North Market
                            Bivd., Suite N 112, Sacramento, California 95834 or by telephone at (800)
                            952-5210 or (916) 445-1254.
                            <br/><br/>
                            23. MISCELLANEOUS <br/>

                            These Legal Terms and any policies or operating rules posted by us on the
                            Services or in respect to the Services constitute the entire agreement and
                            understanding between you and us. Our failure to exercise or enforce any
                            right or provision of these Legal Terms shall not operate as a waiver of
                            such right or provision. These Legal Terms operate to the fullest extent
                            permissible by law. We may assign any or all of our rights and obligations
                            to others at any time. We shall not be responsible or liable for any loss,
                            damage, delay, or failure to act caused by any cause beyond our reasonable
                            control. If any provision or part of a provision of these Legal Terms is
                            determined to be unlawful, void, or unenforceable, that provision or part of
                            the provision is deemed severable from these Legal Terms and does not affect
                            the validity and enforceability of any remaining provisions. There is no
                            joint venture, partnership, employment or agency relationship created
                            between you and us as a result of these Legal Terms or use of the Services.
                            You agree that these Legal Terms will not be construed against us by virtue
                            of having drafted them. You hereby waive any and all defenses you may have
                            based on the electronic form of these Legal Terms and the lack of signing by
                            the parties hereto to execute these Legal Terms.
                            <br/><br/>
                            24. CONTACT US In order to resolve a complaint regarding the Services or to
                            receive further information regarding use of the Services, please contact us
                            at:
                            <br/>
                            Sole Proprietor Budilov Kirill Evgenevich <br/>
                            Moscow <br/>
                            Russia <br/>
                            <a href="mailto: fabricbotai@gmail.com"> fabricbotai@gmail.com</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
