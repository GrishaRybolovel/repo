// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      balance: "Balance",
      credits: "Credits",
      analytics: "Analytics",
      query: "Query",
      currentPlan: 'Current plan',
      submitRate: 'Extend access',
      tool: "Select a tool",
      seo: 'SEO Optimization',
      video: 'Video script',
      nicheTrends: 'Niche trends',
      shorts: 'Shorts script',
      channelAudit: 'Channel audit',
      seoInput: 'Send video link',
      scriptInput: 'Send a description of the scenario',
      analyticsInput: 'Tell us about your channel',
      result: "Result",
      copy: "Copy",
      requestHistory: "Request history",
      aiStudio: "AI Studio",
      aiTools: "AI Tools",
      seoAi: "SEO AI",
      analyticsSidebar: "Analytics",
      auditSidebar: "Audit",
      creativitySidebar: "Creativity",
      profileSidebar: "My profile",
      learning: "Learning",
      support: "Support",
      Agreement: "Agreement",
      user: "User",
      information: 'Information',
      noHistory: 'No history available.',
      profileChangePassword: 'Change password',
      referalSystem: 'Referal system',
      analyticsPerMounth: 'analytics per month',
      creditsPerMounth: 'credits per month',
      personalManager: 'Personal manager',
      profileTip: '1 credit = 1 request in SEO/Scripts',
      author: 'Author',
      creator: 'Creator',
      agency: "Agency",
      login: "Login",
      currentRate: "Current rate",
      accesDate: "Subscription before",
      authorPrice: '79$',
      creatorPrice: '129$',
      agencyPrice: '250$',
      inputPassword: "Enter new password",
      repeatPassword: 'Repeat password',
      sendCode: "Send email code",
      enterCode: "Enter code",
      refreshPassword: "Change password",
      referalText: "Your referal link",
      logout: "Logout",
      password: "Password",
      register: "Register",
      forgotPassword: "Forgot password?",
      notHaveAccount: "Not have account?",
      rememberPassword: "Remember your password?",
      passwordChange: "Password change",
      newPassword: "New password",
      refferer: "Refferer",
      date: "Date",
      status: "Status",
      file: "File",
      presentation: "Presentation",
      inProgress: "In progress",
      ready: "Ready",
      loginIncorrent: "Login incorrect",
      changeEmail: "Change email address",
      sendCodeAgain: "Send code again",
      emailSended: "Email sent on",
      seoTip: "To get the title, description, and tags for the video, write a link to your YouTube video in the input line\n" +
        "\n" +
        "**Important: it must be uploaded in the access link** \n" +
        "\n" +
        "Example: https://www.youtube.com/watch?v=fk52YodL4Sc\n",
      aiTip: "To get a video script or shorts, tell us what you want to make a video about, templates have already been uploaded to the system by screenwriters, such as the \"method\" of the slippery slide and others\n" +
        "\n" +
        "**Important: describe the idea in as much detail as possible, specify which channel you need the video for, you can also specify the duration of the video and who will be the main character, whether you will shoot it in the first person, and so on.**\n" +
        "\n" +
        "A bad example: how to relieve stress quickly\n" +
        "\n" +
        "**A good example: a video for a psychologist's channel about the fact that having regular physical activity ensures a healthy state of mind, including 3 tips on what simple daily things we can do to relieve stress. Duration - 20 minutes**\n",
      analyticsTip: "To get analytics, tell us what you want to make a video about.\n\nYou can use templates from 3 questions with an example:\n\n • Tell us what your channel is about\n\nMy channel is about developing application programs with clean architecture and detailed explanations of various implementation stages. I do programming on my channel using Python, PostgreSQL, FastAPI.\n\n • Tell us about your audience?\n\nDevelopers ranging from junior to senior, eager to learn.\n\n • What are the 3 goals for your channel?\n\nTo gain an audience to launch paid courses. I am also promoting my Telegram channel, where I write about programming. In it, I plan to run ads not only for my courses but also for products/services of advertisers.\n\nIf you have a channel, attach a link to it. If you don't have a channel, you can attach a link to a competitor's channel.",
      howToSeoTitle: "SEO optimization for YouTube: how to rank your videos",
      howToAnalyticsTitle: "How to Analyze trends and choose a topic for your YouTube channel",
      howToScenarioTitle: "How to easily create video scripts for YouTube",
      howToNamingTitle: "How to create effective titles and descriptions for YouTube videos",
      howToThumbnailTitle: "How to create an effective thumbnail for your video",
      howToTrends: "**How to choose a topic for a YouTube channel**\n" +
          "\n" +
          "Starting a YouTube channel requires a thoughtful approach - it's important to define the channel's goal from the outset. Do you want to share knowledge, entertain, or inspire? Choose a topic that resonates with you and interests you. For example, if you love cooking, a culinary channel will be a natural choice for you. But don't forget about your skills and expertise. Choose a topic in which you have experience or are willing to learn.\n" +
          "\n" +
          "Many authors abandon their channels because they don't see quick views and become discouraged, but in fact, a competent approach and patience are needed. Understanding that running a channel should first be interesting to you is where your future views begin. But videos start to gain views only when viewers also like them because then the algorithms start promoting them. That's why it's important to analyze trends and regularly analyze competitors, viewer behavior, and try to understand what exactly people like in your niche. It's important to understand who your audience is and what they want to get from watching content. Without this, you can create many videos that are initially irrelevant, even if you invested good money in production.\n" +
          "\n" +
          "Remember that the main interest of any video hosting service is to make people spend as much time as possible watching videos because that way it has the opportunity to show more ads and earn more money from advertisers, as well as provide a valuable service of free promotion to authors.\n" +
          "\n" +
          "**Why is it important to focus on viewers?**\n" +
          "\n" +
          "Viewers are the main element of your channel. Understanding their interests and needs helps create content that will be useful and interesting to them. Start by studying your target audience. For example, if you're creating content for young mothers, it's important to understand their problems and needs. Analyze the age, gender, geographic location, and interests of your audience.\n" +
          "\n" +
          "Pay attention to the comments and messages they leave online. Regularly conduct surveys and discussions to find out what topics interest your audience. By involving viewers in the content creation process, you increase their loyalty and interest in your channel. Constant communication with viewers allows you to respond promptly to their requests and improve content.\n" +
          "\n" +
          "**What indicators determine your success?**\n" +
          "\n" +
          "Success on YouTube is measured by various indicators. Most people think it's the number of views and subscribers, but that's not all. In fact, watch time is one of the key factors. YouTube values videos that hold viewers' attention. The longer a viewer watches your video, the higher its ranking. This is one of the key rules - make sure your video initially 'hits' the viewers' interests and holds their attention from start to finish.\n" +
          "\n" +
          "**Common mistakes of beginners and false concepts**\n" +
          "\n" +
          "Beginners often make several common mistakes that can be avoided. One of them is the lack of a plan. Posting videos without regularity and strategy leads to the loss of viewers. Create a posting schedule and stick to it. Another mistake is underestimating quality. Viewers appreciate good video and sound quality. Invest in a good camera and microphone. Even simple improvements can significantly enhance your content quality.\n" +
          "\n" +
          "Don't ignore SEO for YouTube. Proper use of keywords, tags, and descriptions helps your videos rank better in search results. Learn how YouTube algorithms work and optimize your videos for better ranking. Another mistake is trying to copy successful channels. Instead, find your unique style and presentation. Viewers appreciate originality and authenticity. And most importantly - be patient. Channel growth takes time and effort.\n" +
          "\n" +
          "**What to consider when choosing a niche**\n" +
          "\n" +
          "Choosing a niche is one of the most important steps. The niche should not only be interesting to you but also in demand by the audience. Study competitors and determine how saturated the market is. Analyze which topics are popular and which are overlooked. Your content should be unique and interesting. Think about what makes you stand out from the competition. Perhaps you have unique knowledge or experience that you can share.\n" +
          "\n" +
          "Use tools to analyze trends and popular topics. They will help you understand which topics are currently trending. But remember, it's important not only to follow trends but also to find your niche. Try to choose a topic that will be relevant in the long term. And of course, consider your interests and expertise. The more passionate you are about your topic, the easier it will be to create quality content.\n" +
          "\n" +
          "**How to simplify the process with [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "Using analytical tools significantly simplifies the work on YouTube. They help track trends, analyze competitors, and choose the best topics for your channel. With the [Trend.vi](http://trend.vi/) analytics, you can start understanding which topics will be popular and how best to present your content. To get such analytics, you need to go to the “Analytics” section of your personal account and tell about your project (channel). After the service conducts research, you will receive a data table.\n" +
          "\n" +
          "**How to use this table** \n" +
          "\n" +
          "This table presents selected video ideas from other authors in your niche that have shown themselves to be the best over the past week, month, and year. More than 15 thousand videos are selected for analysis, but only about 300 of the most successful ones remain. Thus, you can see what your viewers are watching, which topics, concepts, and videos they like. \n" +
          "\n" +
          "![Screenshot](/images/AnalyticsScreenTwo.png \"Screenshot\") ![Screenshot](/images/AnalyticsScreenTwoEn.png \"Screenshot\")\n" +  // Добавляем изображения
          "\n" +
          "**How to compile a list of video ideas** \n" +
          "\n" +
          "Using this table, you can select the topics you liked and use them as the basis for creating your own videos by building a content funnel as explained in the first lesson. \n" +
          "\n" +
          "With such introductory data, your chances of success are much higher! Choosing a topic for a YouTube channel requires time and effort, but careful preparation and analysis will lead you to success. Consider viewers' interests, analyze metrics, and avoid common mistakes to make your channel popular and in demand. Invest in creating quality content and building a connection with your audience, and your efforts will be rewarded.",
      howToScenario: "**How to create content without stress and effort**\n" +
          "\n" +
          "Creating content can be easy if you have a clear plan. Start by choosing a topic that interests you. This will help you stay motivated. Identify the key points you want to cover in the video. Break them down into logical parts and develop a brief plan. Use planning tools such as calendars or specialized apps. They will help structure your ideas and manage your time.\n" +
          "\n" +
          "Regularity is an important aspect of content creation. Post videos at the same time every week. This helps retain viewers and simplifies planning. Find your work rhythm and stick to it. If you have free time, use it to create content in advance. This will reduce pressure and help avoid panic before deadlines.\n" +
          "\n" +
          "**What is important to consider when creating videos with high retention**\n" +
          "\n" +
          "Videos with high retention require attention to detail. The beginning of the video is the most important. Viewers decide whether they will continue watching within the first few seconds. Start with an interesting introduction or question. This will grab attention and make viewers keep watching. The structure of the video is also important. Break the video into logical parts and use headings for each part. This will help viewers better absorb the information. Maintain a dynamic pace: alternate different types of content, such as talking points, graphics, and inserts. Use calls to action (CTAs). Ask viewers to like, comment, and subscribe. This increases engagement and helps you better understand what interests your audience. Pay attention to comments and analyze which videos get more feedback and views. This will help you adapt your content to the interests of viewers.\n" +
          "\n" +
          "**How to simplify the process with [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "[Trend.vi](http://trend.vi/) is a powerful tool for analyzing trends and popular topics on YouTube. Use it to find relevant and in-demand topics for your videos. Enter keywords to see which topics are gaining popularity, and adapt them to your content. This will help you stay on trend and attract more viewers.\n" +
          "\n" +
          "Based on the selected idea, you can also get a script concept. The service already has 5 key approaches to scriptwriting, which are used to create films and books. Therefore, Trend.vi will form the conceptual idea and general strokes for you.\n" +
          "\n" +
          "To do this, you need to formulate the video idea and send it to the field in the service's personal account:\n" +
          "\n" +
          "**Example:** a video for a psychologist's channel about why it's important to care for the inner child. The main idea is that paying attention to the inner child and their desires is the key to happiness. It's important to convey to people why this is, and also sell a consultation through the video. Duration - about 10 minutes \n" +
          "\n" +
          "![Screenshot](/images/ScenarioScreenTwoEn.png \"Screenshot\") ![Screenshot](/images/ScenarioScreenOneEn.png \"Screenshot\")\n\n" +  // Добавляем изображения
          "\n" +
          "**What is the script creation mechanism based on?**\n" +
          "\n" +
          "The script creation mechanism begins with UA research. Study your audience and determine what interests them. Identify the main goal of the video and highlight the key points. Divide the script into parts: introduction, main part, conclusion. Fill each part with details and examples. This will help make the content more informative and engaging. Use simple and understandable words. Avoid complex terms and long sentences. This will help viewers easily understand your content. Try to be natural and authentic. This will build trust and help you connect with your audience.\n" +
          "\n" +
          "### How to write scripts for YouTube videos: step-by-step guide\n" +
          "\n" +
          "1. - **Choosing the topic and goal of the video**: Identify a topic that interests you and your audience. Clearly formulate the goal of the video — what exactly you want to convey to viewers.\n" +
          "2. - **Creating the script structure**:\n" +
          "    - **Introduction**: Grab viewers' attention in the first few seconds. Start with an interesting fact, question, or short story.\n" +
          "    - **Main part**: Share the main ideas or tips. Break them down into logical blocks and use headings for each block.\n" +
          "    - **Conclusion**: Summarize, repeat the main points, and suggest further actions to viewers (e.g., subscribing to the channel, liking, or commenting).\n" +
          "- **Filling in details and examples**: Back up your ideas with concrete examples, facts, and stories. This will make your content more convincing and interesting.\n" +
          "- **Simplicity and clarity**: Use clear and accessible language. Avoid complex terms and long sentences. Try to write as you speak to maintain naturalness and authenticity.\n" +
          "- **Review and editing**: Read the script aloud to ensure it sounds natural. This will help identify awkward phrases and improve text flow. If possible, ask someone to review the script and provide feedback.\n" +
          "- **Filming and editing**: Follow your plan during filming, but don't be afraid to improvise. Sometimes the best moments happen spontaneously. After filming, review the material and choose the best shots. Editing is an important part of the process. Use it to make the video dynamic and interesting.\n" +
          "\n" +
          "**What to do with the scripts received**\n" +
          "\n" +
          "After creating the script, be sure to check it. Read it aloud to ensure that the text sounds natural. This will help identify errors and improve the text. If possible, ask someone to review the script and provide feedback.\n" +
          "\n" +
          "When the script is ready, start filming. Follow your plan, but don't be afraid to improvise. Sometimes the best moments happen spontaneously. After filming, review the material and choose the best shots. Editing is an important part of the process. Use it to make the video dynamic and interesting.\n" +
          "\n" +
          "Publish the video according to your schedule. After publication, analyze the results. Pay attention to the number of views, likes, and comments. Use this information to improve future scripts. Continuous learning and adaptation will help you create better content.\n" +
          "\n" +
          "Creating scripts for YouTube videos can be an exciting and straightforward process if approached with thought and planning. Follow these tips, and your content will attract more and more viewers.",
      howToSEO: "**SEO optimization for YouTube: how to get your video to the top**\n" +
          "\n" +
          "SEO (Search Engine Optimization) for YouTube helps your video rank high in search results. This increases visibility and attracts more viewers. Optimization involves using keywords, metadata, and improving user engagement. A proper SEO strategy increases the chances that your video will be recommended to viewers and appear in the suggested video list. This is especially important on a competitive platform like YouTube, where millions of videos vie for viewers' attention.\n" +
          "\n" +
          "To get your video to the top of search queries, start with keyword research. Use tools to analyze popular queries related to your topic. Include these keywords in the video title, description, and tags. The title should be short but informative to grab viewers' attention. The description should contain detailed information about the video content and include several keywords. Don't forget about video quality. High-resolution video with good sound is more appealing to viewers and YouTube's algorithms. Increasing audience retention also affects video ranking. Create an engaging and informative beginning to keep viewers watching longer. Include calls to action such as likes, comments, and subscriptions to increase engagement. Regularly updating content and interacting with your audience also play an important role. Respond to comments and create a community around your channel. This increases engagement and the chances that your video will be recommended to other users.\n" +
          "\n" +
          "**How to simplify the process with [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "With [Trend.vi](http://Trend.vi) you can get metadata for a video by simply uploading the video with access via a link, waiting for the full upload, and sending the link to the input field in your personal account. If your video is not ready yet, you can describe it yourself.\n" +
          "\n" +
          "The service will analyze the content of your video and, based on the frequency of keyword usage, will create the most relevant metadata, which will attract the target audience and allow you to increase retention. \n" +
          "\n" +
          "- **First step - copy the link to the video uploaded with access via a link** \n" +
          "\n" +
          "- **Second step - paste the link into the input field in the service**\n" +
          "\n" +
          "- **Third step - copy the data and paste it into the fields on YouTube**  \n" +
          "\n" +
          "![Screenshot](/images/SEOScreenOneEn.png \"Screenshot\") ![Screenshot](/images/SEOScreenTwoEn.png \"Screenshot\")\n\n" +  // Добавляем изображения
          "\n" +
          "**What is SEO in [Trend.vi](http://trend.vi/) based on?**\n" +
          "\n" +
          "SEO in [Trend.vi](http://trend.vi/) is based on data analysis and trend identification. By using this tool, you can track popular queries and topics in your niche. This helps create content that will be in demand by viewers and YouTube's algorithms. [Trend.vi](http://trend.vi/) analyzes keywords and phrases that users often search for and suggests them for optimizing your videos.\n" +
          "\n" +
          "The tool also provides data on competitors, showing which videos get the most views and interactions. This helps you adapt your strategy and create more competitive content. Trend analysis allows you to respond to changes in a timely manner and create relevant videos.\n" +
          "\n" +
          "SEO optimization for YouTube is an ongoing process that requires constant analysis and adaptation. Use keywords, improve video quality, and interact with your audience to succeed on the platform.",
      howToNaming: "### **Why the title and description are important**\n" +
          "\n" +
          "The title and description of a video are the first elements that viewers see. They play a key role in attracting attention and help viewers decide whether to watch your video. A well-crafted title grabs attention, while the description provides additional information and helps viewers understand what the video will be about.\n" +
          "\n" +
          "### **How this affects video promotion**\n" +
          "\n" +
          "The title and description affect your video's SEO. Keywords in these elements help the video rank better in search engines. This increases the likelihood that your video will appear in search queries. The title and description also influence the CTR (Click-Through Rate) — the percentage of people who click on your video after seeing it. The higher the CTR, the more views you get.\n" +
          "\n" +
          "### **How are CTR and audience retention related**\n" +
          "\n" +
          "CTR and audience retention are closely related. A high CTR means that your video has attracted viewers' attention. However, it's important that viewers stay on your video as long as possible. This is called audience retention. If viewers quickly leave your video, it signals to YouTube that the content is uninteresting, and the video will be recommended less frequently.\n" +
          "\n" +
          "### **Examples of good and bad video titles**\n" +
          "\n" +
          "Good titles are specific and contain keywords that viewers might search for. Bad titles are too general and don't give an idea of the video's content.\n" +
          "\n" +
          "### **Examples of good titles:** \n" +
          "\n" +
          "- \"How to learn English quickly: 5 effective ways\"\n" +
          "- \"Top 10 kitchen hacks that will change your life\"\n" +
          "- \"7 proven methods for improving memory\"\n" +
          "- \"How to make money on YouTube: a step-by-step guide\"\n" +
          "- \"How to choose the perfect laptop: 8 key tips\"\n" +
          "- \"10 simple healthy eating recipes for every day\"\n" +
          "- \"Productivity secrets: how to get more done\"\n" +
          "- \"How to learn to draw: a guide for beginners\"\n" +
          "- \"How to start your business from scratch: real success stories\"\n" +
          "-  \"Fitness guide: how to start training and not quit\"\n" +
          "\n" +
          "### **Examples of bad titles:**\n" +
          "\n" +
          "- \"English quickly\"\n" +
          "- \"Kitchen hacks\"\n" +
          "- \"Memory\"\n" +
          "- \"YouTube earnings\"\n" +
          "- \"Laptop choice\"\n" +
          "- \"Healthy eating recipes\"\n" +
          "- \"Productivity\"\n" +
          "- \"Drawing lessons\"\n" +
          "- \"Start a business\"\n" +
          "-  \"Fitness\"\n" +
          "\n" +
          "### **Explanation of why some titles are good and others are bad:**\n" +
          "\n" +
          " **Good titles:**\n" +
          "\n" +
          "- Specificity: Clearly indicate what will be discussed (e.g., \"5 ways\", \"8 key tips\").\n" +
          "- Value: Promise useful information or a solution to a problem (e.g., \"effective ways\", \"real success stories\").\n" +
          "- Attractiveness: Use appealing words and phrases (e.g., \"change your life\", \"step-by-step guide\").\n" +
          "- Details: Describe what viewers will get by watching the video (e.g., \"proven methods\", \"guide\").\n" +
          "\n" +
          " **Bad titles:**\n" +
          "\n" +
          "- Generalization: Too general and unclear (e.g., \"Memory\", \"Productivity\").\n" +
          "- Lack of information: Don't give an idea of the video's content (e.g., \"Kitchen hacks\", \"Drawing lessons\").\n" +
          "- Lack of appeal: Don't attract attention or promise any specific benefit (e.g., \"English quickly\", \"Start a business\").\n" +
          "\n" +
          " **What to consider when creating a title**\n" +
          "\n" +
          "The title should be relevant and interesting. The viewer chooses between many videos, so your title should stand out. It should be specific but not reveal all the content of the video in advance. Intrigue helps attract attention and makes viewers click on your video.\n" +
          "\n" +
          "**It's important to remember the following points:** \n" +
          "\n" +
          "- The title should reflect the content of the video\n" +
          "- The title should be intriguing, enhancing the viewer's interest after viewing the thumbnail image\n" +
          "- The title should contain keywords to appear in search results\n" +
          "- The title should be clear and concise\n" +
          "- The title should be easy to translate into other languages\n" +
          "\n" +
          "### How to simplify the process with [Trend.vi](http://trend.vi/)\n" +
          "\n" +
          "With [Trend.vi](http://Trend.vi) you can get metadata for a video by simply uploading the video with access via a link, waiting for the full upload, and sending the link to the input field in your personal account. If your video is not ready yet, you can describe it yourself.\n" +
          "\n" +
          "The service will analyze the content of your video and, based on the frequency of keyword usage, will create the most relevant metadata, which will attract the target audience and allow you to increase retention. \n" +
          "\n" +
          "- First step - copy the link to the video uploaded with access via a link\n\n" +
          "\n" +
          "- Second step - paste the link into the input field in the service\n" +
          "\n" +
          "\n" +
          "- Third step - copy the data and paste it into the fields on YouTube \n" +
          "\n" +
          "![Скриншот](/images/SEOScreenOneEn.png \"Скриншот\") ![Скриншот](/images/TitleScreenOneEn.png \"Скриншот\")\n\n" +
          "\n" +
          "### **What to do if the video didn't take off and how to understand it**\n" +
          "\n" +
          "If your video doesn't get the expected number of views, analyze its metrics. Pay attention to CTR and audience retention. Low CTR may indicate an unsuccessful title or thumbnail. Low audience retention suggests that the content didn't interest viewers, or you attracted the wrong target audience. Try changing the title and description of the video, making it more appealing. Review the first few seconds of the video to make them more engaging. Study viewers' comments and feedback to understand what can be improved. Don't be afraid to experiment and make changes. Constant work on content will help you improve results and achieve success on YouTube.",
      howToPreview: "## **Preview image for YouTube: how to create an attractive and effective image. Why the preview image is important**\n" +
          "\n" +
          "The preview image is the first thing a viewer sees when they come across your video. It plays a key role in attracting attention and can significantly influence the viewer's decision to click on your video. In the highly competitive environment of YouTube, a well-designed preview helps your video stand out from the mass of other videos and increases the number of views.\n" +
          "\n" +
          "### **What the preview image affects**\n" +
          "\n" +
          "The preview image directly affects the click-through rate (CTR). A high CTR means that more people choose your video from the list of suggestions. This also improves your video's ranking in YouTube's search results. The more clicks and views your video gets, the higher the likelihood that it will be recommended to other users on the platform. An attractive and informative preview can significantly increase audience reach and engagement.\n" +
          "\n" +
          "### **What is important to consider when creating a preview**\n" +
          "\n" +
          "When creating a preview, it's important to consider several key aspects. First of all, it should be bright and eye-catching. Use contrasting colors and large, readable fonts. The text on the preview should be short but informative, reflecting the essence of the video and sparking interest. Faces and emotions on the image also work well, as people instinctively respond to facial expressions.\n" +
          "\n" +
          "The preview design should match the style of your channel. This helps create a cohesive visual brand that will be recognizable to viewers. It's also important to consider the size and resolution of the image so that it looks sharp and professional on all devices. Avoid overly complex or cluttered elements that can distract attention.\n" +
          "\n" +
          "### **Examples of good previews:**\n" +
          "\n" +
          "1. **Bright colors, large fonts, and minimalist design**:\n" +
          "    - **Bright colors**: Attract viewers' attention and stand out among other previews on the platform.\n" +
          "    - **Large fonts**: Ensure easy readability even on small mobile screens.\n" +
          "    - **Minimalist design**: Reduces visual clutter and helps viewers quickly understand the main idea of the video.\n" +
          "    - Example: a preview with a bright background, large text \"5 ways to learn English\", and icons of books and study supplies.\n" +
          "    \n" +
          "2. **Faces with expressions that convey the essence of the video**:\n" +
          "    - **Emotional faces**: Help viewers connect with the author and understand the mood of the video.\n" +
          "    - **Conveying the essence of the video**: The facial expression should match the content of the video (e.g., surprise for a video with shocking facts or a smile for positive content).\n" +
          "    - Example: a preview with an image of the author holding an unexpected item related to the video topic, looking surprised.\n" +
          "    \n" +
          "\n" +
          "1. **Clear and concise text that reflects the main topic of the video**:\n" +
          "    - **Clear text**: Easily readable and doesn't require effort to understand.\n" +
          "    - **Conciseness**: Allows viewers to quickly understand what the video will be about without unnecessary details.\n" +
          "    - **Reflecting the main topic**: The text should be directly related to the video content and clearly describe it.\n" +
          "    - Example: a preview with the text \"How to earn $1000 in a month\" against a background of money or financial charts.\n" +
          "    \n" +
          "\n" +
          "### Examples of bad previews:\n" +
          "\n" +
          "1. **Dull colors and small, unreadable text**:\n" +
          "    - **Dull colors**: Don't attract attention and make the preview less noticeable among other videos.\n" +
          "    - **Small text**: Difficult to read, especially on mobile devices, and viewers may miss important information. Example: a preview with a gray background and small white text that blends in with the background.\n" +
          "    \n" +
          "2. **Overloaded image with lots of small details**:\n" +
          "    - **Overload**: Creates visual chaos and makes it difficult to grasp the main message of the video.\n" +
          "    - **Many small details**: Distracts attention from the main topic and makes the preview less attractive. Example: a preview with several small images, text of different sizes, and a background that is hard to focus on.\n" +
          "\n" +
          "1. **Preview not matching the video content and misleading viewers**:\n" +
          "    - **Mismatch with the content**: Disappoints viewers if the preview doesn't match the video's topic.\n" +
          "    - **Misleading**: Can lead to negative reviews and loss of trust from the audience. Example: a preview with an image of a celebrity, although the video is about something completely different, or a preview with an image of an exotic location, while the video is about something mundane.\n" +
          "    \n" +
          "\n" +
          "### **How to improve your previews**\n" +
          "\n" +
          "- **Use bright, contrasting colors**: This will help your previews stand out among other videos.\n" +
          "- **Make the text large and easily readable**: Remember that many viewers watch videos on mobile devices.\n" +
          "- **Be minimalist**: Make sure your preview isn't overloaded with details, so viewers can immediately understand its essence.\n" +
          "- **Use faces and expressions of emotions**: This will help establish an emotional connection with your audience.\n" +
          "- **Make sure the preview matches the video content**: This will help maintain viewer trust and improve their impression of your content.\n" +
          "\n" +
          "Following these recommendations, you will be able to create attractive and informative previews that will attract more viewers to your content on YouTube.\n" +
          "\n" +
          "### **Should you turn to designers for previews**\n" +
          "\n" +
          "Turning to professional designers can be a good solution, especially if you don't have graphic design skills. Designers will help create high-quality and attractive previews that match your brand and attract viewers' attention. Investing in professional design can pay off by increasing the number of views and subscribers.\n" +
          "\n" +
          "To create a preview, you can contact our team: @fabricbothelper\n" +
          "\n" +
          "However, if you have a limited budget, you can use online tools to create previews. Services like Canva and Adobe Spark offer many templates and easy-to-use tools for creating quality images. It's important to remember that even with minimal skills and the right tools, you can create an effective preview. Always remember that the preview image is an important element of your video's success on YouTube. A well-crafted preview attracts attention, increases click-through rates, and helps your video reach a larger audience. Follow these tips to create an attractive and informative preview that will work for you.",
      faqAnalyticsTitle: "How does trend analytics work and what is it for?",
      faqAnalytics: "Trend analytics is a tool that allows you to learn which topics and concepts in your niche are being explored by other authors. Trend.vi will collect information on 7-10 thousand videos and present it to you in a table format. With this information, you can track the overall trend of your audience's interests and create unique content that reflects the current demand for video topics. The videos are selected based on the 'trending' criteria, meaning they are getting good views and characterized by viewer engagement, along with other parameters.",
      otherChannelsTitle: "Do you have access to other channels?",
      otherChannels: "We do not have access to other channels. All data is collected from open sources, and we respect the private data of channels.",
      faqChannelTitle: "Do I need to provide access to my channel?",
      faqChannel: "No, you do not need to provide any information from your channel to use the service.",
      faqPrincipialTitle: "What principles are used in creating scripts?",
      faqPrincipial: "The 'Script Creation' tool is based on your video ideas and includes five main techniques that will help you form the overall composition of your video.",
      faqCreditsTitle: "What are credits for, and can I change their quantity?",
      faqCredits: "Credits are used to access the functionality of the service. 1 credit = 1 SEO or 1 script.",
      faqMonthTitle: "Do credits remain on the balance at the end of the month?",
      faqMonth: "No, at the end of the subscription month, the balance is reset to the amount specified in your plan.",
      faqCreditCountTitle: "Can I increase the number of credits?",
      faqCreditCount: "The plans provide exactly as many credits as described on the website. However, you can discuss your proposal with us under the 'Personal' plan.",
      faqManyServicesTitle: "Can I use the service for multiple channels?",
      faqManyServices: "Yes, of course. The number of channels does not affect the quality and speed of work, but be sure to choose a plan with the necessary number of credits for your tasks.",
      agreeMessage: "I agree to receive notifications from the service and marketing messages",
      privacyAgree: "I have read and agree to the",
      cookiesAgree: "I have read and agree to the",
      privecyAgreeLink: "privacy policy",
      userAgreeLink: "user agreement",
      cookiesAgreeLink: "cookies agreement",
      invalidLink: "Provided link is invalid, try another one. Your balance is credited back!",
      videoException: "Perhaps there is no speech in your video or the video has not yet been uploaded and processed, in which case you can tell what your video is about yourself in the input line or wait for the video to be processed on YouTube. Your balance is credited back!",
      unknownError: "An unknown error has occurred, try refreshing the page or writing to the support service. Your balance is credited back!",
      titleIdeas: "Title ideas",
      videoDescription: "Video description",
      tags: "Tags",
      subscriptionExpired: "Your subscription is expired. Renew it!",
      notEnoughCredits: "Not enogh credits!",
      notEnoughAnalytics: "Not enough analytics!",
      invalidEmailFormat: "Invalid email format",
      registrationError: "Registration error",
      loginOrPasswordInvalid: "Login or password are invalid",
      dataAboutYourProject: "Data about your project",
      sevenKeyTrends: "7 key trends, that work in your niche",
      yourRequest: "Your request",
      yourRequestMightBeDescribed: "Your request might be described with such words",
      previous: "Previous",
      next: "Next",
      slide: "Slide",
      of: "of",
      trend: "Trend",
      description: "Description",
      explanation: "Explanation",
      examples: "Examples",
      badTrends: "Themes, that have not shown themselves in your niche",
      mostEffectiveIdeas: "Most effective ideas",
      contentStrategy: "Content strategy for channel in your niche",
      averageViews: "Average views of effective videos",
      videoTitle: "Video Title",
      viewingResults: "Viewing results",
      effectiveness: "Effectiveness",
      videosToGetViews: "Videos to get views",
      videosToMakeAudienceLoyal: "Videos to make audience loyal",
      videosToSell: "Videos to sell",
      averageVideoViews: "Average video views",
      lastWeek: "Last week",
      lastMonth: "Last month",
      lastYear: "Last year",
    },
  },
  ru: {
    translation: {
      videoTitle: "Название видео",
      viewingResults: "Количество просмотров",
      effectiveness: "Эффективность",
      videosToGetViews: "Видео, чтобы поднять просмотры",
      videosToMakeAudienceLoyal: "Видео, чтобы сделать аудиторию лояльнее",
      videosToSell: "Видео, чтобы продавать",
      averageVideoViews: "Среднее число просмотров",
      lastWeek: "За неделю",
      lastMonth: "За месяц",
      lastYear: "За год",
      averageViews: "Среднее число просмотров эффективных видео",
      contentStrategy: "Контент стратегия для канала в вашей нише",
      mostEffectiveIdeas: "Самые эффективные идеи",
      badTrends: "Темы видео, которые не показали себя в вашей нише",
      description: "Описание",
      explanation: "Объяснение",
      examples: "Примеры",
      trend: "Тренд",
      sevenKeyTrends: "7 ключевых трендов, которые работают в вашей нише",
      dataAboutYourProject: "Данные о вашем проекте",
      yourRequest: "Ваш запрос",
      yourRequestMightBeDescribed: "Ваш запрос может быть описан следующими словами",
      previous: "Предыдущий",
      next: "Следующий",
      slide: "Слайд",
      of: "из",
      balance: "Баланс",
      credits: "Кредиты",
      analytics: "Аналитики",
      query: "Запрос",
      currentPlan: 'Текущий план',
      submitRate: 'Продлить доступ',
      tool: "Выберите инструмент",
      seo: 'SEO Оптимизация',
      video: 'Сценарий видео',
      nicheTrends: 'Нишевые тренды',
      shorts: 'Сценарий коротких видео',
      channelAudit: 'Аудит канала',
      seoInput: 'Отправьте ссылку на видео',
      scriptInput: 'Отправьте описание сценария',
      analyticsInput: 'Расскажите о вашем канале',
      result: "Результат",
      copy: "Копировать",
      requestHistory: "История запросов",
      aiStudio: "AI Студия",
      aiTools: "AI Инструменты",
      seoAi: "СЕО Оптимизация",
      analyticsSidebar: "Анализ трендов",
      auditSidebar: "Аудит канала",
      creativitySidebar: "Креативная студия",
      profileSidebar: "Мой профиль",
      learning: "Обучение",
      support: "Поддержка",
      Agreement: "Соглашение",
      user: "Пользователь",
      information: 'Информация',
      noHistory: 'История недоступна.',
      profileChangePassword: 'Сменить пароль',
      referalSystem: 'Реферальная система',
      analyticsPerMounth: 'аналитика в месяц',
      creditsPerMounth: 'кредиты в месяц',
      personalManager: 'Личный менеджер',
      profileTip: '1 кредит = 1 запрос в SEO/Сценарии',
      author: 'Автор',
      creator: 'Создатель',
      agency: "Агентство",
      login: "Войти",
      currentRate: "Текущий тариф",
      accesDate: "Подписка до",
      authorPrice: '4490₽',
      creatorPrice: '7490₽',
      agencyPrice: '14990₽',
      inputPassword: "Введите новый пароль",
      repeatPassword: 'Повторите пароль',
      sendCode: "Отправить код на почту",
      enterCode: "Введите код",
      refreshPassword: "Сменить пароль",
      referalText: "Ваша реферальная ссылка",
      logout: "Выход",
      password: "Пароль",
      register: "Зарегистрироваться",
      forgotPassword: "Забыли пароль?",
      notHaveAccount: "Нет аккаунта?",
      rememberPassword: "Вспомнили пароль?",
      passwordChange: "Смена пароля",
      newPassword: "Новый пароль",
      refferer: "Пригласитель",
      date: "Дата",
      status: "Статус",
      file: "Файл",
      presentation: "Презентация",
      inProgress: "В процессе",
      ready: "Готово",
      loginIncorrent: "Ошибка входа",
      changeEmail: "Изменить адрес почты",
      sendCodeAgain: "Отправить код повторно",
      emailSended: "Письмо отправлено на ",
      seoTip: "Чтобы получить название, описание, теги к видео, напишите в строке ввода ссылку на ваше видео на YouTube\n" +
          "\n" +
          "Важно: оно должно быть загружено в доступе по ссылке \n" +
          "\n" +
          "Пример: https://www.youtube.com/watch?v=fk52YodL4Sc\n",
      aiTip: "Чтобы получить сценарий видео или shorts, расскажите, о чем вы хотите снять видео, в систему уже загружены шаблоны сценаристами, такие как «метод» скользкой горки и другие\n" +
          "\n" +
          "Важно: распишите идею максимально подробно, уточните, для какого канала вам необходимо видео, также можете указать длительность видео и то, кто будет главным героем, будете ли вы снимать его от первого лица и так далее.\n" +
          "\n" +
          "Плохой пример: как снять стресс быстро  \n" +
          "\n" +
          "Хорошо пример: ролик для канала психолога про то, что наличие регулярной физической нагрузки обеспечивает здоровое состояние психики, включающий 3 совета по тому, какие просто ежедневные дела мы можем сделать, чтобы снять стресс. Длительность - 20 минут \n" +
          "\n",
      analyticsTip: "Чтобы получить аналитику, расскажите, о чем вы хотите снять видео\n" +
          "\n" +
          "Можете воспользоваться шаблонами из 3 вопросов с примером \n" +
          "\n" +
          " • Расскажите о чем ваш канал\n" +
          "\n" +
          "Мой канал о разработке прикладных программ с чистой архитектурой и подробными объяснениями реализации разных этапов. Веду программирование на своем канале на python, postgresql, fastapi\n" +
          "\n" +
          " • Расскажите какая у вас аудитория?\n" +
          "\n" +
          "Разработчики от junior до senior, готовые учиться.\n" +
          "\n" +
          " • Какие 3 цели у вас стоят от канала? \n" +
          "\n" +
          "Набрать аудиторию, чтобы запустить платные курсы. Еще я раскручиваю свой телеграм канал, в котором пишу про программирование, в нем я планирую пускать рекламу не только своих курсов, но и товаров/услуг рекламодателей.\n" +
          "\n" +
          "Если у вас есть канал, приложите ссылку на него, если канала нет, то можете приложить ссылку на канал конкурента",
      howToTrends: "**Как выбрать тему для канала на YouTube**\n" +
          "\n" +
          "\n" +
          "Начало канала на YouTube требует обдуманного подхода - важно сразу определить цель канала. Хотите делиться знаниями, развлекать или вдохновлять? Определитесь с тематикой, которая вам близка и интересна.  Например, если вы любите готовить, канал о кулинарии будет для вас естественным выбором. Но не забывайте о своих навыках и компетенциях. Выберите тему, в которой у вас есть опыт или которую вы готовы изучать.\n" +
          "\n" +
          "Очень много авторов бросают свои каналы, потому что не видят быстрых просмотров и разочаровываются, но на самом деле нужен просто грамотный подход и терпение. Именно с понимания того, что в первую очередь ведение канала должно быть интересно Вам, начинаются ваши будущие просмотры. Но, ролики начинают набирать просмотры только тогда, когда зрителям они тоже нравятся, потому что тогда алгоритмы их начинают продвигать. Именно поэтому важно проводить аналитику трендов и регулярно анализировать конкурентов, поведение зрителей и стараться понять, что именно нравится людям в вашей нише. Важно понимать, кто именно ваша аудитория и что она хочет получать от просмотра контента. Без этого можно создать много видео, которые изначально нерелевантны, даже если вы вложили хорошие деньги в производство.\n" +
          "\n" +
          "Не забывайте, что главный интерес любого видеохостинга - сделать так, чтобы люди проводили максимум времени за просмотром видео, потому что так у него появляется возможность показать больше рекламы и заработать больше денег от рекламодателей, а также предоставить ценную услугу бесплатного продвижения авторам.\n" +
          "\n" +
          "**Почему важно ориентироваться на зрителей?**\n" +
          "\n" +
          "Зрители — главный элемент вашего канала. Понимание их интересов и потребностей помогает создавать контент, который будет им полезен и интересен. Начните с изучения целевой аудитории. Например, если вы создаете контент для молодых мам, важно понимать их проблемы и потребности. Анализируйте возраст, пол, географическое положение, интересы вашей аудитории.\n" +
          "\n" +
          "Обращайте внимание на комментарии и сообщения, которые они оставляют в инетрнете. Регулярно проводите опросы и обсуждения, чтобы узнать, какие темы интересуют вашу аудиторию. Вовлекая зрителей в процесс создания контента, вы повышаете их лояльность и интерес к вашему каналу. Постоянная связь со зрителями позволяет оперативно реагировать на их запросы и улучшать контент.\n" +
          "\n" +
          "**Какие показатели определяют ваш успех?**\n" +
          "\n" +
          "Успех на YouTube измеряется разными показателями. Чаще всего люди считают, что это — количество просмотров и подписчиков, но это не все. На самом деле время просмотра — один из ключевых факторов.  YouTube ценит видео, которые удерживают внимание зрителей. Чем дольше зритель смотрит ваше видео, тем выше его рейтинг. Это и есть один из ключевых законов, сделать так, чтобы ролик изначально “попадал” в интересы зрителей и удержал их внимание от самого начала и до конца. \n" +
          "\n" +
          "**Частые ошибки новичков и ложные концепции**\n" +
          "\n" +
          "Новички часто совершают несколько типичных ошибок, которых можно избежать. Одна из них — отсутствие плана. Публикация видео без регулярности и стратегии ведет к потере зрителей. Создайте график публикаций и придерживайтесь его. Еще одна ошибка — недооценка качества. Зрители ценят хорошее качество видео и звука. Инвестируйте в хорошую камеру и микрофон. Даже простые улучшения могут существенно повысить качество вашего контента.\n" +
          "\n" +
          "Не игнорируйте SEO для YouTube. Правильное использование ключевых слов, тегов и описаний помогает вашим видео находиться в поиске. Изучите, как работают алгоритмы YouTube, и оптимизируйте свои видео для лучшего ранжирования. Еще одна ошибка — попытка копировать успешные каналы. Вместо этого найдите свой уникальный стиль и подачу. Зрители ценят оригинальность и аутентичность. И главное — будьте терпеливы. Рост канала требует времени и усилий.\n" +
          "\n" +
          "**Что важно учесть при выборе ниши**\n" +
          "\n" +
          "Выбор ниши — один из важнейших шагов. Ниша должна быть не только интересной вам, но и востребованной аудиторией. Изучите конкурентов и определите, насколько насыщен рынок. Анализируйте, какие темы популярны, а какие остаются незамеченными. Ваш контент должен быть уникальным и интересным. Подумайте, чем вы можете выделиться на фоне конкурентов. Возможно, у вас есть уникальные знания или опыт, которым вы можете поделиться.\n" +
          "\n" +
          "Используйте инструменты для анализа трендов и популярных тем. Они помогут вам понять, какие темы сейчас на пике популярности. Но помните, что важно не только следовать трендам, но и находить свою нишу. Старайтесь выбрать тему, которая будет актуальна в долгосрочной перспективе. И, конечно, учитывайте свои интересы и компетенции. Чем больше вы увлечены своей темой, тем легче вам будет создавать качественный контент.\n" +
          "\n" +
          "**Как упростить процесс с помощью [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "Использование аналитических инструментов значительно облегчает работу на YouTube. Они помогают отслеживать тренды, анализировать конкурентов и выбирать оптимальные темы для вашего канала. С помощью аналитики [Trend.vi](http://trend.vi/) вы сможете начать понимать, какие темы будут популярны и как лучше представлять свой контент. Чтобы получить такую аналитику, вам необходимо зайти в раздел “Аналитика” личного кабинета и рассказать о своем проекте (канале). После того, как сервис проведет исследование, вы получите даную таблицу.\n" +
          "\n" +
          "**Как использовать данную таблицу** \n" +
          "\n" +
          "Данная таблица представляет собой отобранные идеи видео других авторов в вашей нише, которые показали себя как лучшие за последнюю неделю, месяц и год. Для анализа отбирается больше 15 тысяч видео, но остаются около 300 тех, которые сработали лучше всего. Таким образом, вы можете увидеть, что смотрят ваши зрители, какие темы, концепции и видео им нравятся. \n" +
          "\n" +
          "![Скриншот](/images/AnalyticsScreenOne.png \"Скриншот\") ![Скриншот](/images/AnalyticsScreenTwo.png \"Скриншот\")\n" +
          "\n" +
          "**Как составить список идей видео** \n" +
          "\n" +
          "Пользуясь данной таблицей, вы можете отобрать те темы, которые вам понравились и использовать их за основу создания собственных роликов, составив воронку контента, как рассказано в первом уроке \n" +
          "\n" +
          "Благодаря таким вводным данным ваши шансы на успех гораздо выше! Выбор темы для канала на YouTube требует времени и усилий, но тщательная подготовка и анализ приведут вас к успеху. Учитывайте интересы зрителей, анализируйте показатели и избегайте распространенных ошибок, чтобы ваш канал стал популярным и востребованным. Вложите усилия в создание качественного контента и налаживание связи с аудиторией, и ваши усилия будут вознаграждены.",
      howToScenario: "**Как создавать контент без напряжения и усилий**\n" +
          "\n" +
          "Создание контента может быть легким, если у вас есть четкий план. Начните с выбора темы, которая вам интересна. Это поможет вам оставаться мотивированным. Определите ключевые моменты, которые хотите осветить в видео. Разделите их на логические части и разработайте краткий план. Используйте инструменты для планирования, такие как календари или специализированные приложения. Они помогут структурировать ваши идеи и распределить время.\n" +
          "\n" +
          "Регулярность — важный аспект создания контента. Публикуйте видео в одно и то же время каждую неделю. Это помогает удерживать зрителей и упрощает планирование. Найдите свой ритм работы и придерживайтесь его. Если у вас есть свободное время, используйте его для создания контента впрок. Это снизит давление и поможет избежать паники перед дедлайнами.\n" +
          "\n" +
          "**Что важно учесть для создания видео с высоким удержанием**\n" +
          "\n" +
          "Видео с высоким удержанием требуют внимания к деталям. Начало видео — самое важное. Зрители решают, будут ли они смотреть дальше, в первые несколько секунд. Начните с интересного вступления или вопроса. Это привлечет внимание и заставит зрителей смотреть дальше. Структура видео также важна. Разделите видео на логические части и используйте заголовки для каждой части. Это поможет зрителям легче воспринимать информацию. Поддерживайте динамичный ритм: чередуйте разные виды контента, такие как разговорные моменты, графику и вставки. Используйте призывы к действию (CTA). Просите зрителей ставить лайки, комментировать и подписываться. Это увеличит вовлеченность и поможет вам лучше понять, что интересно вашей аудитории. Следите за комментариями и анализируйте, какие видео получают больше отзывов и просмотров. Это поможет вам адаптировать контент под интересы зрителей.\n" +
          "\n" +
          "**Как упростить процесс с помощью [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "[Trend.vi](http://trend.vi/) — это мощный инструмент для анализа трендов и популярных тем на YouTube. Используйте его для поиска актуальных и востребованных тем для ваших видео. Введите ключевые слова, чтобы увидеть, какие темы набирают популярность, и адаптируйте их под свой контент. Это поможет вам оставаться в тренде и привлекать больше зрителей.\n" +
          "\n" +
          "Также на основе выбранной идеи вы можете получить концепцию сценарию, в сервис уже заложено 5 ключевых подходов к созданию сценариев, которые используются для создания фильмов и книг. Поэтому трендви сформирует идейную концепцию и общие мазки за вас.\n" +
          "\n" +
          "Для этого вам необходимо сформулировать идею видео и отправить ее в поле в личном кабинете сериса:\n" +
          "\n" +
          "**Пример:** видео для канала психолога о том, почему важно заботиться о внутреннем ребенке. Основная идея в том, что именно внимание к внутреннем ребенку и его желаниям - ключ к счастью, важно передать людям почему именно, а еще продать консультацию через видео, длительность около 10 минут \n" +
          "\n" +
          "![Скриншот](/images/ScenarioScreenOne.png \"Скриншот\") ![Скриншот](/images/ScenarioScreenTwo.png \"Скриншот\")\n\n" +
          "\n" +
          "**На чем основана механика создания сценариев?**\n" +
          "\n" +
          "Механика создания сценариев начинается с исследования УА. Изучите свою аудиторию и определите, что им интересно. Определите основную цель видео и выделите ключевые моменты. Разделите сценарий на части: вступление, основная часть, заключение. Каждую часть наполните подробностями и примерами. Это поможет сделать контент более информативным и увлекательным. Используйте простые и понятные слова. Избегайте сложных терминов и длинных предложений. Это поможет зрителям легко понимать ваш контент. Старайтесь быть естественными и аутентичными. Это создаст доверие и поможет вам установить связь с аудиторией.\n" +
          "\n" +
          "### Как писать сценарии для YouTube-видео: пошаговое руководство\n" +
          "\n" +
          "1. - **Выбор темы и цели видео**: Определите тему, которая интересна вам и вашей аудитории. Четко сформулируйте цель видео — что именно вы хотите донести до зрителей.\n" +
          "2. - **Создание структуры сценария**:\n" +
          "    - **Вступление**: Привлеките внимание зрителей с первых секунд. Начните с интересного факта, вопроса или короткой истории.\n" +
          "    - **Основная часть**: Поделитесь основными идеями или советами. Разбейте их на логические блоки и используйте заголовки для каждого блока.\n" +
          "    - **Заключение**: Подведите итоги, повторите основные моменты и предложите зрителям дальнейшие действия (например, подписка на канал, лайк или комментарий).\n" +
          "- **Наполнение деталями и примерами**: Подкрепите свои идеи конкретными примерами, фактами и историями. Это сделает ваш контент более убедительным и интересным.\n" +
          "- **Простота и ясность**: Используйте понятный и доступный язык. Избегайте сложных терминов и длинных предложений. Старайтесь писать так, как вы говорите, чтобы сохранить естественность и аутентичность.\n" +
          "- **Проверка и редактирование**: Прочитайте сценарий вслух, чтобы убедиться, что он звучит естественно. Это поможет выявить неловкие фразы и улучшить плавность текста. Если возможно, попросите кого-то просмотреть сценарий и дать обратную связь.\n" +
          "- **Съемка и монтаж**: Следуйте своему плану во время съемки, но не бойтесь импровизировать. Иногда лучшие моменты получаются спонтанно. После съемки пересмотрите материал и выберите лучшие кадры. Монтаж — важная часть процесса. Используйте его, чтобы сделать видео динамичным и интересным.\n" +
          "\n" +
          "**Что делать с полученными сценариями**\n" +
          "\n" +
          "После создания сценария, обязательно его проверьте. Прочитайте вслух, чтобы убедиться, что текст звучит естественно. Это поможет выявить ошибки и улучшить текст. Если возможно, попросите кого-то просмотреть сценарий и дать обратную связь.\n" +
          "\n" +
          "Когда сценарий готов, начните съемку. Следуйте своему плану, но не бойтесь импровизировать. Иногда лучшие моменты получаются спонтанно. После съемки, пересмотрите материал и выберите лучшие кадры. Монтаж — важная часть процесса. Используйте его, чтобы сделать видео динамичным и интересным.\n" +
          "\n" +
          "Публикуйте видео согласно вашему графику. После публикации, анализируйте результаты. Обратите внимание на количество просмотров, лайков и комментариев. Используйте эту информацию для улучшения будущих сценариев. Постоянное обучение и адаптация помогут вам создавать все более качественный контент.\n" +
          "\n" +
          "Создание сценариев для видео на YouTube может быть увлекательным и несложным процессом, если подойти к нему с умом и планированием. Следуйте этим советам, и ваш контент будет привлекать все больше зрителей.",
      howToSEO: "**SEO оптимизация для YouTube: как вывести видео в топ**\n" +
          "\n" +
          "SEO (поисковая оптимизация) для YouTube помогает вашему видео занимать высокие позиции в поисковых результатах. Это увеличивает видимость и привлекает больше зрителей. Оптимизация включает использование ключевых слов, метаданных и улучшение взаимодействия с пользователями. Правильная SEO стратегия повышает шансы, что ваше видео будет рекомендовано зрителям и появится в списке предложенных видео. Это особенно важно на конкурентной платформе, такой как YouTube, где миллионы видео борются за внимание зрителей.\n" +
          "\n" +
          "Чтобы вывести видео в топ запросов, начните с исследования ключевых слов. Используйте инструменты для анализа популярных запросов, связанных с вашей темой. Включите эти ключевые слова в заголовок, описание и теги видео. Заголовок должен быть кратким, но информативным, чтобы привлечь внимание зрителей. Описание должно содержать подробную информацию о содержании видео и включать несколько ключевых слов. Не забудьте о качестве видео. Видео с высоким разрешением и хорошим звуком более привлекательны для зрителей и алгоритмов YouTube. Увеличение удержания аудитории также влияет на рейтинг видео. Создавайте увлекательное и информативное начало, чтобы зрители оставались на видео дольше. Включайте призывы к действию, такие как лайки, комментарии и подписки, чтобы повысить вовлеченность. Регулярное обновление контента и взаимодействие с аудиторией также играют важную роль. Отвечайте на комментарии и создавайте сообщество вокруг вашего канала. Это повышает вовлеченность и увеличивает шансы, что ваше видео будет рекомендовано другим пользователям.\n" +
          "\n" +
          "### **Как упростить процесс с помощью [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "С помощью [Trend.vi](http://Trend.vi) вы можете получать метаданные к видео, просто загрузив видео с доступом по ссылке, дождавшись полной загрузки и отправив ссылку в поле в личном кабинете. Если ваш ролик еще не готов, вы можете рассказать о нем самостоятельно.\n" +
          "\n" +
          "Сервис изучит содержание вашего видео и на основе частоты употребления ключевых слов создаст максимально релевантные метаданные, что будет привлекать целевую аудиторию и позволит вам увеличить удержание. \n" +
          "\n" +
          "- **Первый шаг - скопировать ссылку на видео, загруженное с доступом по ссылке** \n" +
          "\n" +
          "- **Второй шаг - вставить ссылку в поле ввода в сервие**\n" +
          "\n" +
          "- **Третий шаг - скопировать данные и вставить в поля в YouTube**  \n" +
          "\n" +
          "![Скриншот](/images/SEOScreenOne.png \"Скриншот\") ![Скриншот](/images/SEOScreenTwo.png \"Скриншот\")\n\n" +
          "\n" +
          "**На чем основана SEO в [Trend.vi](http://trend.vi/)**\n" +
          "\n" +
          "SEO в [Trend.vi](http://trend.vi/) основана на анализе данных и выявлении актуальных тенденций. Используя этот инструмент, вы можете отслеживать популярные запросы и темы в вашей нише. Это помогает создавать контент, который будет востребован зрителями и алгоритмами YouTube. [Trend.vi](http://trend.vi/) анализирует ключевые слова и фразы, которые часто ищут пользователи, и предлагает их для оптимизации ваших видео.\n" +
          "\n" +
          "Инструмент также предоставляет данные о конкурентах, показывая, какие видео получают больше всего просмотров и взаимодействий. Это помогает вам адаптировать свою стратегию и создавать более конкурентоспособный контент. Анализ трендов позволяет своевременно реагировать на изменения и создавать актуальные видео.\n" +
          "\n" +
          "SEO оптимизация для YouTube — это непрерывный процесс, требующий постоянного анализа и адаптации. Используйте ключевые слова, улучшайте качество видео и взаимодействуйте с аудиторией, чтобы добиться успеха на платформе.",
      howToNaming: "### **Почему название и описание это важно**\n" +
          "\n" +
          "Название и описание видео — это первые элементы, которые видит зритель. Они играют ключевую роль в привлечении внимания и помогают зрителям решить, стоит ли смотреть ваше видео. Правильно составленное название привлекает внимание, а описание предоставляет дополнительную информацию и помогает зрителям понять, о чем будет видео.\n" +
          "\n" +
          "### **На что это влияет с точки зрения продвижения ролика**\n" +
          "\n" +
          "Название и описание влияют на SEO вашего видео. Ключевые слова в этих элементах помогают видео лучше индексироваться поисковыми системами. Это увеличивает вероятность, что ваше видео появится в поисковых запросах. Также название и описание влияют на CTR (Click-Through Rate) — процент людей, которые нажимают на ваше видео после его показа. Чем выше CTR, тем больше просмотров вы получаете.\n" +
          "\n" +
          "### **Как связаны показатели CTR и удержание аудитории**\n" +
          "\n" +
          "CTR и удержание аудитории тесно связаны. Высокий CTR означает, что ваше видео привлекло внимание зрителей. Однако важно, чтобы зрители оставались на вашем видео как можно дольше. Это называется удержанием аудитории. Если зрители быстро покидают ваше видео, это сигнализирует YouTube, что контент неинтересен, и видео будет реже рекомендоваться.\n" +
          "\n" +
          "### **Примеры хороших и плохих названий по теме видео**\n" +
          "\n" +
          "Хорошие названия конкретны и содержат ключевые слова, которые могут искать зрители. Плохие названия слишком общие и не дают представления о содержании видео.\n" +
          "\n" +
          "### **Примеры хороших названий:** \n" +
          "\n" +
          "- \"Как быстро выучить английский: 5 эффективных способов\"\n" +
          "- \"Топ-10 лайфхаков для кухни, которые изменят вашу жизнь\"\n" +
          "- \"7 проверенных методов для улучшения памяти\"\n" +
          "- \"Как заработать на YouTube: пошаговое руководство\"\n" +
          "- \"Как выбрать идеальный ноутбук: 8 ключевых советов\"\n" +
          "- \"10 простых рецептов здорового питания на каждый день\"\n" +
          "- \"Секреты продуктивности: как успевать больше\"\n" +
          "- \"Как научиться рисовать: руководство для начинающих\"\n" +
          "- \"Как начать свой бизнес с нуля: реальные истории успеха\"\n" +
          "-  \"Путеводитель по фитнесу: как начать тренироваться и не бросить\"\n" +
          "\n" +
          "### **Примеры плохих названий:**\n" +
          "\n" +
          "- \"Английский быстро\"\n" +
          "- \"Лайфхаки для кухни\"\n" +
          "- \"Память\"\n" +
          "- \"YouTube заработок\"\n" +
          "- \"Выбор ноутбука\"\n" +
          "- \"Рецепты здорового питания\"\n" +
          "- \"Продуктивность\"\n" +
          "- \"Уроки рисования\"\n" +
          "- \"Начать бизнес\"\n" +
          "-  \"Фитнес\"\n" +
          "\n" +
          "### **Объяснение, почему одни названия хорошие, а другие плохие:**\n" +
          "\n" +
          " **Хорошие названия:**\n" +
          "\n" +
          "- Конкретика: Четко указывают, что именно будет обсуждаться (например, \"5 способов\", \"8 ключевых советов\").\n" +
          "- Ценность: Обещают полезную информацию или решение проблемы (например, \"эффективные способы\", \"реальные истории успеха\").\n" +
          "- Привлекательность: Используют привлекательные слова и фразы (например, \"изменят вашу жизнь\", \"пошаговое руководство\").\n" +
          "- Подробности: Описывают, что зритель получит, просматривая видео (например, \"проверенные методы\", \"путеводитель\").\n" +
          "\n" +
          " **Плохие названия:**\n" +
          "\n" +
          "- Обобщенность: Слишком общие и неясные (например, \"Память\", \"Продуктивность\").\n" +
          "- Недостаток информации: Не дают представления о содержании видео (например, \"Лайфхаки для кухни\", \"Уроки рисования\").\n" +
          "- Отсутствие привлекательности: Не привлекают внимание и не обещают никакой конкретной пользы (например, \"Английский быстро\", \"Начать бизнес\").\n" +
          "\n" +
          " **Что важно учесть при создании названия**\n" +
          "\n" +
          "Название должно быть релевантным и интересным. Зритель выбирает между многими роликами, поэтому ваше название должно выделяться. Оно должно быть конкретным, но не раскрывать все содержание ролика заранее. Интрига помогает привлечь внимание и заставляет зрителей кликнуть на ваше видео.\n" +
          "\n" +
          "**Важно помнить следующие пункты:** \n" +
          "\n" +
          "- Название должно отражать содержание видео\n" +
          "- Название должно вызывать интерес, точнее усиливать интерес зрителя после просмотра превью картинки\n" +
          "- Название должно содержать ключевые слова, чтобы выдаваться в поиске\n" +
          "- Название должно быть понятным и четким\n" +
          "- Название должно легко переводиться на другие языки\n" +
          "\n" +
          "### Как упростить процесс с помощью [Trend.vi](http://trend.vi/)\n" +
          "\n" +
          "С помощью [Trend.vi](http://Trend.vi) вы можете получать метаданные к видео, просто загрузив видео с доступом по ссылке, дождавшись полной загрузки и отправив ссылку в поле в личном кабинете. Если ваш ролик еще не готов, вы можете рассказать о нем самостоятельно.\n" +
          "\n" +
          "Сервис изучит содержание вашего видео и на основе частоты употребления ключевых слов создаст максимально релевантные метаданные, что будет привлекать целевую аудиторию и позволит вам увеличить удержание. \n" +
          "\n" +
          "- Первый шаг - скопировать ссылку на видео, загруженное с доступом по ссылке\n\n" +
          "\n" +
          "- Второй шаг - вставить ссылку в поле ввода в сервие\n" +
          "\n" +
          "\n" +
          "- Третий шаг - скопировать данные и вставить в поля в YouTube \n" +
          "\n" +
          "![Скриншот](/images/AnalyticsScreenOne.png \"Скриншот\") ![Скриншот](/images/SEOScreenTwo.png \"Скриншот\")\n\n" +
          "\n" +
          "### **Что делать, если ролик не зашел и как понять, что он не зашел**\n" +
          "\n" +
          "Если ваше видео не получает ожидаемого количества просмотров, проанализируйте его показатели. Обратите внимание на CTR и удержание аудитории. Низкий CTR может указывать на неудачное название или миниатюру. Низкое удержание аудитории говорит о том, что контент не заинтересовал зрителей, либо же вы привлекли не ту ЦА. Попробуйте изменить название и описание видео, сделать его более привлекательным. Пересмотрите первые секунды видео, чтобы они были более захватывающими. Изучите комментарии и отзывы зрителей, чтобы понять, что можно улучшить. Не бойтесь экспериментировать и вносить изменения. Постоянная работа над контентом поможет вам улучшить результаты и добиться успеха на YouTube.",
      howToPreview: "## **Превью картинка для YouTube: как создать привлекательное и эффективное изображение. Почему превью картинка это важно**\n" +
          "\n" +
          "Превью картинка — это первое, что видит зритель, когда наталкивается на ваше видео. Она играет ключевую роль в привлечении внимания и может существенно повлиять на решение зрителя нажать на ваше видео. В условиях жесткой конкуренции на платформе YouTube, хорошо сделанное превью помогает выделиться из массы других видео и увеличить количество просмотров.\n" +
          "\n" +
          "### **На что влияет превью картинка**\n" +
          "\n" +
          "Превью картинка напрямую влияет на показатель кликабельности (CTR). Высокий CTR означает, что больше людей выбирают ваше видео из списка предложений. Это также улучшает ранжирование вашего видео в поисковых результатах YouTube. Чем больше кликов и просмотров получает ваше видео, тем выше вероятность, что оно будет рекомендовано другим пользователям платформы. Привлекательное и информативное превью может существенно увеличить охват и вовлеченность аудитории.\n" +
          "\n" +
          "### **Что важно учесть при создании превью**\n" +
          "\n" +
          "При создании превью важно учитывать несколько ключевых аспектов. Прежде всего, оно должно быть ярким и привлекающим внимание. Используйте контрастные цвета и крупные, читаемые шрифты. Текст на превью должен быть кратким, но информативным, отражать суть видео и вызывать интерес. Лица и эмоции на изображении также работают хорошо, поскольку люди инстинктивно реагируют на выражение лиц.\n" +
          "\n" +
          "Дизайн превью должен соответствовать стилю вашего канала. Это поможет создать единый визуальный бренд, который будет узнаваем зрителями. Важно также учитывать размер и разрешение изображения, чтобы оно выглядело четко и профессионально на всех устройствах. Избегайте излишне сложных или перегруженных элементов, которые могут отвлекать внимание.\n" +
          "\n" +
          "### **Примеры хороших превью:*8\n" +
          "\n" +
          "1. **Яркие цвета, крупные шрифты и минималистичный дизайн**:\n" +
          "    - **Яркие цвета**: Привлекают внимание зрителей и выделяются среди других превью на платформе.\n" +
          "    - **Крупные шрифты**: Обеспечивают легкую читаемость даже на маленьких экранах мобильных устройств.\n" +
          "    - **Минималистичный дизайн**: Снижает визуальную нагрузку и помогает зрителям быстро понять основную идею видео.\n" +
          "    - Пример: превью с ярким фоном, крупным текстом «5 способов учить английский» и иконками книг и учебных принадлежностей.\n" +
          "    \n" +
          "![Скриншот](/images/PreviewScreenOne.jpg \"Скриншот\")\n\n" +
          "    \n" +
          "2. **Лица с выражением эмоций, которые передают суть видео**:\n" +
          "    - **Эмоциональные лица**: Помогают зрителям установить связь с автором и понять настроение видео.\n" +
          "    - **Передача сути видео**: Выражение лица должно соответствовать содержанию видео (например, удивление для видео с шокирующими фактами или улыбка для позитивного контента).\n" +
          "    - Пример: превью с изображением автора, который удивленно держит в руках неожиданный предмет, связанный с темой видео.\n" +
          "        \n" +
          "![Скриншот](/images/PreviewScreenTwo.png \"Скриншот\")\n\n" +
          "        \n" +
          "\n" +
          "1. **Четкий и краткий текст, отражающий основную тему видео**:\n" +
          "    - **Четкий текст**: Легко читается и не требует усилий для восприятия.\n" +
          "    - **Краткость**: Позволяет зрителям быстро понять, о чем будет видео, без лишних деталей.\n" +
          "    - **Отражение основной темы**: Текст должен быть непосредственно связан с содержанием видео и ясно его описывать.\n" +
          "    - Пример: превью с текстом «Как заработать $1000 за месяц» на фоне изображения денег или финансовых графиков.\n" +
          "        \n" +
           "![Скриншот](https://tidy-lungfish-13b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F94e912e4-d953-40aa-8e79-0ce5c035d6fb%2Fda60ffb9-f770-4643-8901-8ecedbc30ac8%2F%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA_%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0_2024-07-26_%25D0%25B2_14.31.04.png?table=block&id=23bc5179-b4fb-4162-b692-1817c32ea804&spaceId=94e912e4-d953-40aa-8e79-0ce5c035d6fb&width=1060&userId=&cache=v2 \"Скриншот\")\n\n" +
          "        \n" +
          "\n" +
          "### Примеры плохих превью:\n" +
          "\n" +
          "1. **Тусклые цвета и мелкий, нечитаемый текст**:\n" +
          "    - **Тусклые цвета**: Не привлекают внимание и делают превью менее заметным среди других видео.\n" +
          "    - **Мелкий текст**: Трудно читается, особенно на мобильных устройствах, и зрители могут пропустить важную информацию. Пример: превью с серым фоном и мелким белым текстом, который теряется на фоне.\n" +
          "        \n" +
          "![Скриншот](https://tidy-lungfish-13b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F94e912e4-d953-40aa-8e79-0ce5c035d6fb%2F0490457f-9d56-48a6-b702-d927915493f2%2F%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA_%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0_2024-07-26_%25D0%25B2_14.27.04.png?table=block&id=de6a9272-23f0-41d2-b4e4-c81c034cb536&spaceId=94e912e4-d953-40aa-8e79-0ce5c035d6fb&width=1450&userId=&cache=v2 \"Скриншот\")\n\n" +
          "        \n" +
          "2. **Перегруженное изображение с множеством мелких деталей**:\n" +
          "    - **Перегруженность**: Создает визуальный хаос и затрудняет восприятие основного посыла видео.\n" +
          "    - **Множество мелких деталей**: Уводит внимание от главной темы и делает превью менее привлекательным. Пример: превью с несколькими мелкими изображениями, текстом разных размеров и фоном, на котором трудно сфокусироваться.\n" +
          "\n" +
          "![Скриншот](https://tidy-lungfish-13b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F94e912e4-d953-40aa-8e79-0ce5c035d6fb%2Ff92786fd-a765-4cfb-947c-04487adcca4b%2F%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA_%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0_2024-07-26_%25D0%25B2_14.28.04.png?table=block&id=63339c55-62fc-445a-b328-15fb8b8d5d52&spaceId=94e912e4-d953-40aa-8e79-0ce5c035d6fb&width=1050&userId=&cache=v2 \"Скриншот\")\n\n" +
          "\n" +
          "1. **Превью, не соответствующее содержанию видео и вводящее зрителей в заблуждение**:\n" +
          "    - **Несоответствие содержанию**: Вызывает разочарование у зрителей, если превью не соответствует теме видео.\n" +
          "    - **Введение в заблуждение**: Может привести к негативным отзывам и потерям доверия со стороны аудитории. Пример: превью с изображением знаменитости, хотя видео о чем-то совершенно другом, или превью с изображением экзотического места, в то время как видео о чем-то повседневном.\n" +
          "        \n" +
          "![Скриншот](https://tidy-lungfish-13b.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F94e912e4-d953-40aa-8e79-0ce5c035d6fb%2Fa90d4950-af8b-4b5e-a3dd-b2a19e2651d7%2F%25D0%25A1%25D0%25BD%25D0%25B8%25D0%25BC%25D0%25BE%25D0%25BA_%25D1%258D%25D0%25BA%25D1%2580%25D0%25B0%25D0%25BD%25D0%25B0_2024-07-26_%25D0%25B2_14.28.58.png?table=block&id=6bde3059-467e-475f-9a92-055378de0a70&spaceId=94e912e4-d953-40aa-8e79-0ce5c035d6fb&width=1060&userId=&cache=v2 \"Скриншот\")\n\n" +
          "        \n" +
          "\n" +
          "### **Как улучшить свои превью**\n" +
          "\n" +
          "- **Используйте яркие, контрастные цвета**: Это поможет вашим превью выделяться среди других видео.\n" +
          "- **Сделайте текст крупным и легко читаемым**: Помните, что многие зрители смотрят видео на мобильных устройствах.\n" +
          "- **Будьте минималистичными**: Убедитесь, что ваше превью не перегружено деталями, чтобы зрители могли сразу понять его суть.\n" +
          "- **Используйте лица и выражения эмоций**: Это поможет установить эмоциональную связь с вашей аудиторией.\n" +
          "- **Убедитесь, что превью соответствует содержанию видео**: Это поможет удержать доверие зрителей и улучшить их впечатление от вашего контента.\n" +
          "\n" +
          "Следуя этим рекомендациям, вы сможете создавать привлекательные и информативные превью, которые привлекут больше зрителей к вашему контенту на YouTube.\n" +
          "\n" +
          "### **Стоит ли обращаться к дизайнерам за превью**\n" +
          "\n" +
          "Обращение к профессиональным дизайнерам может быть хорошим решением, особенно если у вас нет навыков создания графики. Дизайнеры помогут создать качественные и привлекательные превью, которые соответствуют вашему бренду и привлекают внимание зрителей. Инвестиция в профессиональный дизайн может окупиться за счет увеличения количества просмотров и подписчиков.\n" +
          "\n" +
          "Для создания превью вы можете написать нашей команде: @fabricbothelper\n" +
          "\n" +
          "Однако, если у вас ограниченный бюджет, вы можете использовать онлайн-инструменты для создания превью. Такие сервисы, как Canva и Adobe Spark, предлагают множество шаблонов и простых в использовании инструментов для создания качественных изображений. Важно помнить, что даже с минимальными навыками и правильными инструментами можно создать эффективное превью. Всегда помните о том, что превью картинка — важный элемент успеха вашего видео на YouTube. Правильно созданное превью привлекает внимание, увеличивает кликабельность и помогает вашему видео достигать большего количества зрителей. Следуйте этим советам, чтобы создать привлекательное и информативное превью, которое будет работать на вас.",
      howToAnalyticsTitle: "Как провести аналитику трендов на YouTube",
      howToNamingTitle: "Как правильно назвать ролики и видео к YouTube",
      howToScenarioTitle: "Как легко создать сценарии к видео",
      howToSeoTitle: "Как легко осуществить SEO оптимизацию",
      howToThumbnailTitle: "Как правильно создать превью картинку для видеоролика",
      faqAnalyticsTitle: "Как работает аналитика трендов и для чего это?",
      faqAnalytics: "Аналитика трендов - это инструмент, с помощью которого вы сможете узнать, какие темы и концепции видео в вашей нише другими авторы, Trend.vi соберет информацию об этих видео в размере 7-10 тысяч видео и предложит вам их в формате таблицы. С помощью этой информации вы сможете отследить общий тренд интересов вашей аудитории и создать уникальный контент, с учетом текущего спроса на темы видео. Ролики подбираются по критериям «в тренде» - то есть набирают хорошие просмотры и характеризуются активностью зрителей. с учетом других параметров.",
      otherChannelsTitle: "У вас есть доступ к чужим каналам?",
      otherChannels: "У нас нет доступа к чужим каналам, все данные мы берем из открытого доступа и с уважением относимся к внутренним закрытым данным каналов. ",
      faqChannelTitle: "Нужно ли мне предоставлять доступ к своему каналу?",
      faqChannel: "Нет, чтобы использовать сервис,  вам не нужно сообщаться никакие данные от вашего канала.",
      faqPrincipialTitle: "Какие принципы заложены в создание сценариев?",
      faqPrincipial: "Инструмент «Создание сценариев» основан на ваших идеях видео, в него заложено 5 основных техник, которые помогут вам сформировать общую композицию видеоролика.",
      faqCreditsTitle: "Для чего нужны кредиты и можно ли изменить их количество?",
      faqCredits: "Кредиты нужны для того, чтобы пользоваться функционалом сервиса, 1 кредит = 1 SEO или 1 сценарий.  ",
      faqMonthTitle: "Остаются ли кредиты на балансе по истечению месяца?",
      faqMonth: "Нет, по истечению месяца подписки, баланс обновляется до того, который соответствует вашему тарифу.",
      faqCreditCountTitle: "Могу ли я увеличить количество кредитов?",
      faqCreditCount: "В рамках тарифов предоставляется ровно столько кредитов, сколько описано на сайте в информации о тарифах, однако вы можете обсудить свое предложение с нами в тарифе «Персональный»",
      faqManyServicesTitle: "Могу ли я использовать сервис для нескольких каналов?",
      faqManyServices: "Да, конечно, количество каналов не влияет на качество и скорость работы, однако обратите внимание при выборе тарифа на нужное количество кредитов для ваших задач.",
      agreeMessage: "Я согласен получать уведомления от сервиса и маркетинговые сообщения",
      privacyAgree: "Я ознакомился и согласен с",
      cookiesAgree: "Я ознакомлен и даю согласие на",
      privecyAgreeLink: "политикой конфиденциальности",
      userAgreeLink: "пользовательским соглашением",
      cookiesAgreeLink: "обработку персональных данных",
      invalidLink: "Неверная ссылка. Попробуйте другую. Ваш кредит зачислен обратно!",
      videoException: "Возможно, в вашем видео отсутствует речь или видео еще не было загружено и обработано, в этом случае вы можете рассказать о себе в строке ввода вашего видео или подождать, пока видео будет обработано на YouTube. Ваш кредит зачислен обратно!",
      unknownError: "Произошла неизвестная ошибка, попробуйте обновить страницу или написать в службу поддержки. Ваш кредит зачислен обратно!",
      titleIdeas: "Идеи названий",
      videoDescription: "Описание видео",
      tags: "Теги",
      subscriptionExpired: "У вас истекла подписка, необходимо оформить новую!",
      notEnoughCredits: "Недостаточно кредитов!",
      notEnoughAnalytics: "Недостаточно аналитик!",
      invalidEmailFormat: "Неверный формат электронной почты",
      registrationError: "Ошибка регистрации",
      loginOrPasswordInvalid: "Логин или пароль неверны"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;