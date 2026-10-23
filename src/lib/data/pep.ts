/**
 * 内置词库：人教版 PEP 小学英语（三年级起点，2012 版教材）
 * 格式：每个单元一行，"英文=中文" 以 "|" 分隔。
 * 内容可在管理端自由修改，修改不会被覆盖。
 */
export interface SeedUnit {
  grade: number;
  term: "上" | "下";
  name: string;
  words: string;
}

export const PEP_BOOK = {
  name: "人教版 PEP 小学英语",
  description: "三年级起点 · 3~6 年级上下册（2012 版教材）",
};

export const PEP_UNITS: SeedUnit[] = [
  // ───────── 三年级上册 ─────────
  { grade: 3, term: "上", name: "Unit 1 Hello!", words: "ruler=尺子|pencil=铅笔|eraser=橡皮|crayon=蜡笔|bag=包；书包|pen=钢笔|pencil box=铅笔盒|book=书|no=不；没有|your=你的；你们的" },
  { grade: 3, term: "上", name: "Unit 2 Colours", words: "red=红色的|green=绿色的|yellow=黄色的|blue=蓝色的|black=黑色的|brown=棕色的|white=白色的|orange=橙色的|OK=好；可以|mum=妈妈" },
  { grade: 3, term: "上", name: "Unit 3 Look at me!", words: "face=脸|ear=耳朵|eye=眼睛|nose=鼻子|mouth=嘴|arm=胳膊|hand=手|head=头|body=身体|leg=腿|foot=脚" },
  { grade: 3, term: "上", name: "Unit 4 We love animals", words: "duck=鸭子|pig=猪|cat=猫|bear=熊|dog=狗|elephant=大象|monkey=猴子|bird=鸟|tiger=老虎|panda=熊猫|zoo=动物园|funny=滑稽的" },
  { grade: 3, term: "上", name: "Unit 5 Let's eat!", words: "bread=面包|juice=果汁|egg=蛋|milk=牛奶|water=水|cake=蛋糕|fish=鱼肉；鱼|rice=米饭" },
  { grade: 3, term: "上", name: "Unit 6 Happy birthday!", words: "one=一|two=二|three=三|four=四|five=五|six=六|seven=七|eight=八|nine=九|ten=十|brother=兄弟|plate=盘子" },

  // ───────── 三年级下册 ─────────
  { grade: 3, term: "下", name: "Unit 1 Welcome back to school!", words: "UK=英国|Canada=加拿大|USA=美国|China=中国|she=她|student=学生|pupil=小学生|he=他|teacher=教师|boy=男孩|and=和|girl=女孩|new=新的|friend=朋友|today=今天" },
  { grade: 3, term: "下", name: "Unit 2 My family", words: "father=父亲|dad=爸爸|man=男人|woman=女人|mother=母亲|sister=姐妹|brother=兄弟|grandmother=祖母；外祖母|grandma=奶奶；外婆|grandfather=祖父；外祖父|grandpa=爷爷；外公|family=家庭" },
  { grade: 3, term: "下", name: "Unit 3 At the zoo", words: "thin=瘦的|fat=胖的|tall=高的|short=矮的；短的|long=长的|small=小的|big=大的|giraffe=长颈鹿|so=这么；那么|children=孩子们|tail=尾巴" },
  { grade: 3, term: "下", name: "Unit 4 Where is my car?", words: "on=在……上|in=在……里|under=在……下面|chair=椅子|desk=书桌|cap=帽子|ball=球|car=小汽车|boat=小船|map=地图|toy=玩具|box=盒子" },
  { grade: 3, term: "下", name: "Unit 5 Do you like pears?", words: "pear=梨|apple=苹果|orange=橙子|banana=香蕉|watermelon=西瓜|strawberry=草莓|grape=葡萄|buy=买|fruit=水果" },
  { grade: 3, term: "下", name: "Unit 6 How many?", words: "eleven=十一|twelve=十二|thirteen=十三|fourteen=十四|fifteen=十五|sixteen=十六|seventeen=十七|eighteen=十八|nineteen=十九|twenty=二十|how many=多少|kite=风筝|beautiful=美丽的" },

  // ───────── 四年级上册 ─────────
  { grade: 4, term: "上", name: "Unit 1 My classroom", words: "classroom=教室|window=窗户|blackboard=黑板|light=电灯|picture=图画|door=门|teacher's desk=讲台|computer=计算机|fan=风扇|wall=墙壁|floor=地板|really=真的" },
  { grade: 4, term: "上", name: "Unit 2 My schoolbag", words: "schoolbag=书包|maths book=数学书|English book=英语书|Chinese book=语文书|storybook=故事书|candy=糖果|notebook=笔记本|toy=玩具|key=钥匙|lost=丢失|so much=非常地|cute=可爱的" },
  { grade: 4, term: "上", name: "Unit 3 My friends", words: "strong=强壮的|friendly=友好的|quiet=安静的|hair=头发|shoe=鞋|glasses=眼镜|his=他的|or=或者|right=正确的|hat=帽子|her=她的" },
  { grade: 4, term: "上", name: "Unit 4 My home", words: "bedroom=卧室|living room=客厅|study=书房|kitchen=厨房|bathroom=浴室|bed=床|phone=电话|table=桌子|sofa=长沙发|fridge=冰箱|find=找到" },
  { grade: 4, term: "上", name: "Unit 5 Dinner's ready", words: "beef=牛肉|chicken=鸡肉|noodles=面条|soup=汤|vegetable=蔬菜|chopsticks=筷子|bowl=碗|fork=餐叉|knife=刀|spoon=勺|dinner=正餐；晚餐|ready=准备好|help yourself=请自便|pass=给；递" },
  { grade: 4, term: "上", name: "Unit 6 Meet my family!", words: "parents=父母|cousin=堂兄弟；表姐妹|uncle=叔叔；舅舅|aunt=阿姨；姑姑|baby brother=婴儿小弟弟|doctor=医生|cook=厨师|driver=司机|farmer=农民|nurse=护士|people=人；人们|but=但是|little=小的|puppy=小狗|football player=足球运动员|job=工作|basketball=篮球" },

  // ───────── 四年级下册 ─────────
  { grade: 4, term: "下", name: "Unit 1 My school", words: "first floor=一楼|second floor=二楼|teachers' office=教师办公室|library=图书馆|playground=操场|computer room=计算机房|art room=美术教室|music room=音乐教室|next to=紧挨着|homework=作业|class=班级|forty=四十|way=方向" },
  { grade: 4, term: "下", name: "Unit 2 What time is it?", words: "breakfast=早餐|English class=英语课|lunch=午餐|music class=音乐课|PE class=体育课|dinner=晚餐|get up=起床|go to school=去上学|go home=回家|go to bed=上床睡觉|over=结束|now=现在|o'clock=……点钟|kid=小孩|thirty=三十|hurry=快点|come on=快；加油|just a minute=稍等一会儿" },
  { grade: 4, term: "下", name: "Unit 3 Weather", words: "cold=寒冷的|cool=凉的|warm=温暖的|hot=热的|sunny=晴朗的|windy=多风的|cloudy=多云的|snowy=下雪的|rainy=阴雨的|outside=在户外|be careful=小心|weather=天气|degree=度|world=世界|fly=放（风筝）|love=爱" },
  { grade: 4, term: "下", name: "Unit 4 At the farm", words: "tomato=西红柿|potato=土豆|green beans=豆角|carrot=胡萝卜|horse=马|cow=母牛；奶牛|sheep=羊|hen=母鸡|these=这些|those=那些|animal=动物|garden=花园|farm=农场|goat=山羊|eat=吃" },
  { grade: 4, term: "下", name: "Unit 5 My clothes", words: "clothes=衣服|pants=裤子|hat=帽子|dress=连衣裙|skirt=短裙|coat=外衣|sweater=毛衣|sock=短袜|shorts=短裤|jacket=夹克衫|shirt=衬衫|yours=你的|whose=谁的|mine=我的|pack=收拾" },
  { grade: 4, term: "下", name: "Unit 6 Shopping", words: "glove=手套|scarf=围巾|umbrella=雨伞|sunglasses=太阳镜|pretty=美观的|expensive=昂贵的|cheap=便宜的|nice=好的|try on=试穿|size=尺码|of course=当然|too=太|just=正好|how much=多少钱|eighty=八十|dollar=美元|sale=特价销售" },

  // ───────── 五年级上册 ─────────
  { grade: 5, term: "上", name: "Unit 1 What's he like?", words: "old=年老的|young=年轻的|funny=滑稽可笑的|kind=体贴的；慈祥的|strict=严格的|polite=有礼貌的|hard-working=工作努力的|helpful=有用的；愿意帮忙的|clever=聪明的|shy=害羞的|know=知道|our=我们的|Ms=女士|will=将要|sometimes=有时|robot=机器人|him=他|speak=说；讲|finish=完成" },
  { grade: 5, term: "上", name: "Unit 2 My week", words: "Monday=星期一|Tuesday=星期二|Wednesday=星期三|Thursday=星期四|Friday=星期五|Saturday=星期六|Sunday=星期日|weekend=周末|wash my clothes=洗我的衣服|watch TV=看电视|do homework=做作业|read books=看书|play football=踢足球|cooking=烹饪|often=经常|park=公园|tired=疲倦的|sport=体育运动|should=应当|every=每个|day=天|schedule=日程安排表" },
  { grade: 5, term: "上", name: "Unit 3 What would you like?", words: "sandwich=三明治|salad=沙拉|hamburger=汉堡包|ice cream=冰淇淋|tea=茶|fresh=新鲜的|healthy=健康的|delicious=美味的|hot=辣的|sweet=甜的|drink=喝|thirsty=渴的|favourite=特别喜爱的|food=食物|dear=亲爱的|onion=洋葱" },
  { grade: 5, term: "上", name: "Unit 4 What can you do?", words: "sing=唱歌|song=歌曲|sing English songs=唱英文歌曲|play the pipa=弹琵琶|kung fu=功夫|do kung fu=练武术|dance=跳舞|draw=画|cartoon=漫画|draw cartoons=画漫画|cook=烹调；煮|swim=游泳|play basketball=打篮球|ping-pong=乒乓球|play ping-pong=打乒乓球|speak English=说英语|party=聚会|next=下一个|wonderful=精彩的|learn=学习|any=任何的|problem=问题|no problem=没问题|want=想要|send=邮寄|email=电子邮件" },
  { grade: 5, term: "上", name: "Unit 5 There is a big bed", words: "clock=时钟|plant=植物|bottle=瓶子|water bottle=水瓶|bike=自行车|photo=照片|front=前面|in front of=在……前面|between=在……中间|above=在……上面|beside=在旁边|behind=在……后面|there=那里|grandparent=祖父母|their=他们的|house=房屋|a lot of=许多|flower=花|move=搬家|dirty=脏的|everywhere=到处|mouse=老鼠|live=居住|nature=自然界" },
  { grade: 5, term: "上", name: "Unit 6 In a nature park", words: "forest=森林|river=河流|lake=湖泊|mountain=高山|hill=小山|tree=树|bridge=桥|building=建筑物|village=村庄|house=房子|boating=划船|go boating=去划船|rabbit=兔子|high=高的|near=在附近|city=城市|quiet=安静的|air=空气|smell=气味|cloud=云" },

  // ───────── 五年级下册 ─────────
  { grade: 5, term: "下", name: "Unit 1 My day", words: "eat breakfast=吃早饭|have class=上课|play sports=进行体育运动|exercise=活动；运动|do morning exercises=做早操|eat dinner=吃晚饭|clean my room=打扫我的房间|go for a walk=散步|go shopping=去买东西|take a dancing class=上舞蹈课|when=什么时候|after=在……后|start=开始|usually=通常|Spain=西班牙|late=晚；迟|why=为什么|work=工作|last=上一个的|sound=听起来好像|also=还；也|busy=忙的|need=需要|letter=信|island=岛|always=总是|cave=山洞|go swimming=去游泳|win=获胜" },
  { grade: 5, term: "下", name: "Unit 2 My favourite season", words: "spring=春天|summer=夏天|autumn=秋天|winter=冬天|season=季节|picnic=野餐|go on a picnic=去野餐|pick apples=摘苹果|snowman=雪人|make a snowman=堆雪人|which=哪一个|best=最；最高程度地|snow=雪|good job=做得好|because=因为|vacation=假期|all=全；完全|pink=粉色|lovely=可爱的|leaf=叶子|fall=落下|paint=用颜料绘画" },
  { grade: 5, term: "下", name: "Unit 3 My school calendar", words: "January=一月|February=二月|March=三月|April=四月|May=五月|June=六月|July=七月|August=八月|September=九月|October=十月|November=十一月|December=十二月|a few=一些|thing=事情|meet=遇见|welcome=欢迎|sports meet=运动会|trip=旅行|contest=比赛|Easter=复活节|game=游戏|school trip=学校郊游" },
  { grade: 5, term: "下", name: "Unit 4 When is the art show?", words: "first=第一|second=第二|third=第三|fourth=第四|fifth=第五|twelfth=第十二|twentieth=第二十|twenty-first=第二十一|twenty-third=第二十三|thirtieth=第三十|special=特殊的|community=社区|kitten=小猫|diary=日记|still=仍然|noise=声音；响声|fur=毛|open=开着的|walk=走" },
  { grade: 5, term: "下", name: "Unit 5 Whose dog is it?", words: "mine=我的|yours=你的|his=他的|hers=她的|theirs=他们的|ours=我们的|climbing=正在攀登|eating=正在吃|playing=正在玩|jumping=正在跳|drinking=正在喝|sleeping=正在睡觉|each other=相互|excited=兴奋的|like=像|bamboo=竹子|its=它的|fight=打架|play with=和……一起玩" },
  { grade: 5, term: "下", name: "Unit 6 Work quietly!", words: "doing morning exercises=正在做早操|having English class=正在上英语课|eating lunch=正在吃午饭|reading a book=正在看书|listening to music=正在听音乐|keep=保持|keep to the right=靠右|keep your desk clean=保持桌面整洁|talk quietly=小声讲话|take turns=按顺序来|show=给……看|anything=任何东西|else=其他的|exhibition=展览|say=说|have a look=看一看" },

  // ───────── 六年级上册 ─────────
  { grade: 6, term: "上", name: "Unit 1 How can I get there?", words: "science=科学|museum=博物馆|post office=邮局|bookstore=书店|cinema=电影院|hospital=医院|crossing=十字路口|turn=转弯|left=左|straight=笔直地|right=右|ask=问|sir=先生|interesting=有趣的|Italian=意大利的|restaurant=餐馆|pizza=比萨饼|street=大街|get=到达|follow=跟着|far=远的|tell=告诉" },
  { grade: 6, term: "上", name: "Unit 2 Ways to go to school", words: "on foot=步行|by=乘|bus=公共汽车|plane=飞机|taxi=出租汽车|ship=轮船|subway=地铁|train=火车|slow=慢的|slow down=慢下来|stop=停下|Mrs=夫人|early=早的|helmet=头盔|must=必须|wear=戴；穿|pay attention to=注意|traffic=交通|traffic lights=交通信号灯|fast=快的|ferry=轮渡|sled=雪橇" },
  { grade: 6, term: "上", name: "Unit 3 My weekend plan", words: "visit=拜访|film=电影|see a film=看电影|trip=旅行|take a trip=去旅行|supermarket=超市|evening=晚上|tonight=今晚|tomorrow=明天|next week=下周|dictionary=词典|comic book=连环画册|word book=单词书|postcard=明信片|lesson=课|space=太空|travel=旅行|half=一半|price=价格|Mid-Autumn Festival=中秋节|together=一起|get together=聚会|mooncake=月饼|poem=诗|moon=月亮" },
  { grade: 6, term: "上", name: "Unit 4 I have a pen pal", words: "studies=学习|puzzle=谜|hiking=远足|pen pal=笔友|hobby=爱好|jasmine=茉莉|idea=主意|amazing=令人惊奇的|shall=将要|goal=球门|join=参加|club=俱乐部|share=分享" },
  { grade: 6, term: "上", name: "Unit 5 What does he do?", words: "factory=工厂|worker=工人|postman=邮递员|businessman=商人|police officer=警察|fisherman=渔民|scientist=科学家|pilot=飞行员|coach=教练|country=国家|head teacher=校长|sea=大海|stay=保持|healthy=健康的|gym=体育馆|if=如果|reporter=记者|use=使用|type=打字|quickly=快地|secretary=秘书" },
  { grade: 6, term: "上", name: "Unit 6 How do you feel?", words: "angry=生气的|afraid=害怕的|sad=难过的|worried=担心的|happy=高兴的|see a doctor=看病|wear=穿|more=更多的|deep=深的|breath=呼吸|take a deep breath=深吸一口气|count to ten=数到十|chase=追赶|mice=老鼠（复数）|bad=坏的|hurt=使受伤|ill=有病的|wrong=有毛病的|should=应该|feel=觉得|well=健康的|sit=坐|grass=草坪|hear=听到|ant=蚂蚁|worry=担心|stuck=陷住|mud=泥|pull=拉|everyone=每人" },

  // ───────── 六年级下册 ─────────
  { grade: 6, term: "下", name: "Unit 1 How tall are you?", words: "younger=更年轻的|older=年龄更大的|taller=更高的|shorter=更矮的|longer=更长的|thinner=更瘦的|heavier=更重的|bigger=更大的|smaller=更小的|stronger=更强壮的|dinosaur=恐龙|hall=大厅|metre=米|than=比|both=两个都|kilogram=千克|countryside=乡村|lower=更低的|shadow=影子|smarter=更聪明的|become=变得" },
  { grade: 6, term: "下", name: "Unit 2 Last weekend", words: "cleaned=打扫|stayed=停留|washed=洗|watched=看|had a cold=感冒|slept=睡觉|read=读（过去式）|saw=看见|last=最近的；上一个的|yesterday=昨天|before=在……之前|drank=喝|show=演出|magazine=杂志|better=更好的|faster=更快的|hotel=旅馆|fixed=修理|broken=破损的|lamp=台灯|loud=大声的|enjoy=享受" },
  { grade: 6, term: "下", name: "Unit 3 Where did you go?", words: "went=去（过去式）|camp=野营|went camping=去野营|went fishing=去钓鱼|rode=骑（过去式）|hurt=受伤|ate=吃（过去式）|took=拍（照片）|bought=买（过去式）|gift=礼物|fell=摔倒|off=从……落下|Labour Day=劳动节|mule=骡子|could=能|till=直到|beach=海滩|basket=篮子|part=角色|licked=舔|laughed=笑" },
  { grade: 6, term: "下", name: "Unit 4 Then and now", words: "dining hall=饭厅|grass=草坪|gym=体育馆|ago=以前|cycling=骑自行车运动|go cycling=去骑自行车|ice-skate=滑冰|badminton=羽毛球|star=星星|easy=容易的|look up=查阅|Internet=互联网|different=不同的|active=积极的|race=赛跑|nothing=没有什么|thought=想（过去式）|felt=感觉（过去式）|cheetah=猎豹|woke=醒|dream=梦" },
];

/** 常见单词的 emoji，让低年级小朋友更直观 */
export const EMOJI: Record<string, string> = {
  ruler: "📏", pencil: "✏️", eraser: "🧽", crayon: "🖍️", bag: "👜", pen: "🖊️", book: "📕", "pencil box": "✏️",
  red: "🔴", green: "🟢", yellow: "🟡", blue: "🔵", black: "⚫", brown: "🟤", white: "⚪", orange: "🍊",
  face: "🙂", ear: "👂", eye: "👁️", nose: "👃", mouth: "👄", arm: "💪", hand: "✋", head: "🗣️", leg: "🦵", foot: "🦶",
  duck: "🦆", pig: "🐷", cat: "🐱", bear: "🐻", dog: "🐶", elephant: "🐘", monkey: "🐵", bird: "🐦", tiger: "🐯", panda: "🐼", zoo: "🦁",
  bread: "🍞", juice: "🧃", egg: "🥚", milk: "🥛", water: "💧", cake: "🎂", fish: "🐟", rice: "🍚",
  one: "1️⃣", two: "2️⃣", three: "3️⃣", four: "4️⃣", five: "5️⃣", six: "6️⃣", seven: "7️⃣", eight: "8️⃣", nine: "9️⃣", ten: "🔟",
  plate: "🍽️", China: "🇨🇳", UK: "🇬🇧", USA: "🇺🇸", Canada: "🇨🇦", teacher: "🧑‍🏫", student: "🧑‍🎓", pupil: "🧒", boy: "👦", girl: "👧", friend: "🤝",
  father: "👨", dad: "👨", mother: "👩", mum: "👩", man: "👨", woman: "👩", grandmother: "👵", grandma: "👵", grandfather: "👴", grandpa: "👴", family: "👨‍👩‍👧",
  giraffe: "🦒", tail: "🐒", chair: "🪑", desk: "🗄️", cap: "🧢", ball: "⚽", car: "🚗", boat: "⛵", map: "🗺️", toy: "🧸", box: "📦",
  pear: "🍐", apple: "🍎", banana: "🍌", watermelon: "🍉", strawberry: "🍓", grape: "🍇", fruit: "🍑", kite: "🪁",
  window: "🪟", light: "💡", picture: "🖼️", door: "🚪", computer: "💻", fan: "🌀", schoolbag: "🎒", candy: "🍬", notebook: "📓", key: "🔑", storybook: "📖",
  hair: "💇", shoe: "👟", glasses: "👓", hat: "👒", bedroom: "🛏️", bed: "🛏️", phone: "📱", sofa: "🛋️", fridge: "🧊", kitchen: "🍳", bathroom: "🛁",
  beef: "🥩", chicken: "🍗", noodles: "🍜", soup: "🥣", vegetable: "🥬", chopsticks: "🥢", bowl: "🥣", fork: "🍴", knife: "🔪", spoon: "🥄",
  doctor: "🧑‍⚕️", cook: "🧑‍🍳", driver: "🚕", farmer: "🧑‍🌾", nurse: "👩‍⚕️", puppy: "🐶", basketball: "🏀", "football player": "⚽",
  library: "📚", playground: "🛝", homework: "📝", breakfast: "🍳", lunch: "🍱", dinner: "🍲", "get up": "⏰", "go to bed": "😴",
  cold: "🥶", hot: "🥵", warm: "☀️", sunny: "☀️", windy: "🌬️", cloudy: "☁️", snowy: "❄️", rainy: "🌧️", weather: "🌤️", world: "🌍",
  tomato: "🍅", potato: "🥔", carrot: "🥕", horse: "🐴", cow: "🐄", sheep: "🐑", hen: "🐔", goat: "🐐", farm: "🚜", garden: "🌷",
  clothes: "👕", pants: "👖", dress: "👗", skirt: "👗", coat: "🧥", sweater: "🧶", sock: "🧦", shorts: "🩳", jacket: "🧥", shirt: "👔",
  glove: "🧤", scarf: "🧣", umbrella: "☂️", sunglasses: "🕶️", dollar: "💵",
  robot: "🤖", sandwich: "🥪", salad: "🥗", hamburger: "🍔", "ice cream": "🍦", tea: "🍵", onion: "🧅", sweet: "🍭", thirsty: "🥤",
  sing: "🎤", song: "🎵", dance: "💃", draw: "🎨", swim: "🏊", "ping-pong": "🏓", email: "📧", party: "🎉",
  clock: "🕐", plant: "🪴", bottle: "🍼", bike: "🚲", photo: "📷", flower: "🌸", mouse: "🐭", house: "🏠",
  forest: "🌲", river: "🏞️", lake: "🏞️", mountain: "⛰️", hill: "⛰️", tree: "🌳", bridge: "🌉", building: "🏢", village: "🏘️", rabbit: "🐰", city: "🏙️", cloud: "☁️",
  spring: "🌱", summer: "🏖️", autumn: "🍂", winter: "⛄", picnic: "🧺", snowman: "⛄", snow: "❄️", leaf: "🍃", paint: "🎨",
  Easter: "🐣", kitten: "🐱", diary: "📔", bamboo: "🎋", sleeping: "😴", jumping: "🤸", climbing: "🧗", "listening to music": "🎧",
  museum: "🏛️", "post office": "🏤", bookstore: "📚", cinema: "🎬", hospital: "🏥", restaurant: "🍽️", pizza: "🍕", left: "⬅️", right: "➡️",
  bus: "🚌", plane: "✈️", taxi: "🚕", ship: "🚢", subway: "🚇", train: "🚆", helmet: "⛑️", "traffic lights": "🚦", "on foot": "🚶", sled: "🛷", ferry: "⛴️",
  film: "🎬", supermarket: "🛒", dictionary: "📘", postcard: "💌", space: "🚀", mooncake: "🥮", moon: "🌙", puzzle: "🧩", hiking: "🥾", club: "🏸",
  factory: "🏭", worker: "👷", postman: "📮", "police officer": "👮", fisherman: "🎣", scientist: "🧑‍🔬", pilot: "🧑‍✈️", sea: "🌊", reporter: "📰",
  angry: "😠", afraid: "😨", sad: "😢", worried: "😟", happy: "😄", ant: "🐜", grass: "🌿", dinosaur: "🦖", shadow: "👤",
  magazine: "📰", hotel: "🏨", lamp: "🪔", gift: "🎁", beach: "🏝️", basket: "🧺", badminton: "🏸", star: "⭐", cheetah: "🐆", dream: "💭", "ice-skate": "⛸️", cycling: "🚴",
};
