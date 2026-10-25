/**
 * 内置词库：人教版 PEP 小学英语（三年级起点 · 2024 新课标修订版教材）
 * 涵盖 2024~2026 秋/春季最新投入使用的义务教育教科书（2022 年版新课标）3~6 年级上下册全册单元词汇。
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
  name: "人教版 PEP 小学英语（2024 新课标版）",
  description: "三年级起点 · 3~6 年级上下册（2024~2026 新课标修订版最新教材）",
};

export const PEP_UNITS: SeedUnit[] = [
  // ───────── 三年级上册（2024 秋新课标版）─────────
  {
    grade: 3,
    term: "上",
    name: "Unit 1 Making friends",
    words:
      "name=名字|nice=友好的；令人愉快的|ear=耳朵|hand=手|eye=眼睛|mouth=嘴|arm=胳膊|can=可以；能|share=分享|smile=微笑|listen=听；倾听|help=帮助|say=说；讲|and=和；与|goodbye=再见|toy=玩具|friend=朋友|good=好的",
  },
  {
    grade: 3,
    term: "上",
    name: "Unit 2 Different families",
    words:
      "mum=妈妈（口语）|dad=爸爸（口语）|grandma=奶奶；外婆|grandpa=爷爷；外公|grandfather=（外）祖父|grandmother=（外）祖母|mother=母亲；妈妈|father=父亲；爸爸|me=我|sister=姐；妹|family=家；家庭|have=有|big=大的|cousin=堂（表）兄弟姐妹|brother=兄；弟|baby=婴儿|uncle=叔；伯；舅；姑父；姨父|aunt=姑母；姨母；伯母；婶母；舅母|some=一些|small=小的",
  },
  {
    grade: 3,
    term: "上",
    name: "Unit 3 Amazing animals",
    words:
      "like=喜欢|dog=狗|pet=宠物|cat=猫|fish=鱼；鱼肉|bird=鸟|rabbit=兔子|go=去；走|Miss=女士；小姐|panda=大熊猫|red panda=小熊猫|cute=可爱的|monkey=猴子|tiger=老虎|elephant=大象|lion=狮子|animal=动物|giraffe=长颈鹿|tall=高的|fast=快的|fox=狐狸|zoo=动物园",
  },
  {
    grade: 3,
    term: "上",
    name: "Unit 4 Plants around us",
    words:
      "apple=苹果|banana=香蕉|farm=农场|air=空气|orange=橙子；柑橘|grape=葡萄|school=学校|garden=花园|need=需要|water=水；给……浇水|flower=花；花朵|grass=草；草地|plant=植物；种植|new=新的|tree=树|sun=太阳；阳光|give=给|them=它们；他们；她们|leaf=叶；叶子|seed=种子|grow=生长；种植",
  },
  {
    grade: 3,
    term: "上",
    name: "Unit 5 The colourful world",
    words:
      "colour=颜色|orange=橙红色；橙红色的|green=绿色；绿色的|red=红色；红色的|blue=蓝色；蓝色的|make=使出现；做|purple=紫色；紫色的|brown=棕色；棕色的|bear=熊|yellow=黄色；黄色的|duck=鸭子|sea=海；海洋|pink=粉红色；粉红色的|draw=画|white=白色；白色的|black=黑色；黑色的",
  },
  {
    grade: 3,
    term: "上",
    name: "Unit 6 Useful numbers",
    words:
      "old=……岁的；老的|five=五|year=年纪；年|one=一|two=二|three=三|four=四|ten=十|six=六|seven=七|eight=八|nine=九|o'clock=……点钟|cut=切块|eat=吃|cake=蛋糕|how many=多少|number=数字|count=数数|balloon=气球|gift=礼物|plate=盘子|birthday=生日",
  },

  // ───────── 三年级下册（2025 春新课标版）─────────
  {
    grade: 3,
    term: "下",
    name: "Unit 1 Meeting new people",
    words:
      "where=在哪里；到哪里|from=来自；从……来|about=大约；关于|today=今天|teacher=教师|student=学生|after=在……后面|who=谁；什么人|girl=女孩|neighbour=邻居|boy=男孩|woman=成年女子；妇女|man=成年男子；男人|Mr=先生|classmate=同班同学|he=他|English=英语；英语的|she=她|very=很；非常；十分|UK=英国|China=中国|Canada=加拿大|USA=美国",
  },
  {
    grade: 3,
    term: "下",
    name: "Unit 2 Expressing yourself",
    words:
      "has=有；具有|long=长的|body=身体|short=短的；矮的|leg=腿|right=准确的；正确的|fat=肥的；胖的|thin=瘦的|slow=缓慢的；慢的|love=喜爱；爱|tail=尾；尾巴|bye=再见|her=她的；她|gift=礼物|picture=图画；绘画|card=贺卡；卡片|sing=唱（歌）；演唱|dance=跳舞|face=脸；面孔|all=所有；全部|so=这么；那么|talk=说话；讲话|song=歌；歌曲|or=或；或者；还是|much=许多；大量",
  },
  {
    grade: 3,
    term: "下",
    name: "Unit 3 Learning better",
    words:
      "find=找到；找回|ruler=直尺|pen=钢笔|pencil=铅笔|book=书；书籍|bag=包；袋|paper=纸|these=这些|see=看见|hear=听见；听到|learn=学；学习|nose=鼻；鼻子|class=课；班级|computer=计算机；电脑|eraser=橡皮|smell=闻（气味）|taste=尝（味道）|touch=触摸；碰|sense=感觉官能|tongue=舌；舌头",
  },
  {
    grade: 3,
    term: "下",
    name: "Unit 4 Healthy food",
    words:
      "breakfast=早餐；早饭|time=时间|bread=面包|egg=蛋；鸡蛋|milk=（牛或羊等的）奶|noodle=（常用复数）面条|juice=果汁|rice=大米；米饭|meat=肉|vegetable=蔬菜|healthy=健康的|soup=汤|fruit=水果|candy=糖果|yummy=很好吃的；美味的|colourful=五彩缤纷的|plate=盘子",
  },
  {
    grade: 3,
    term: "下",
    name: "Unit 5 Old toys",
    words:
      "at=在（某处）|home=家；住所|boat=小船；舟|cool=酷的；绝妙的|keep=保有；留着|ball=球|doll=玩偶；玩具娃娃|car=小汽车；轿车|on=在……上|in=在……内；在……中|box=盒子|now=现在|cap=帽子|map=地图|under=在……下面|put=放；安置|still=还是；仍然|shelf=架子",
  },
  {
    grade: 3,
    term: "下",
    name: "Unit 6 Numbers in life",
    words:
      "fifteen=十五|twelve=十二|fourteen=十四|thirteen=十三|eleven=十一|sixteen=十六|seventeen=十七|eighteen=十八|nineteen=十九|twenty=二十|choose=选择；挑选|back=回到原处|save=储蓄；攒钱|spend=花（钱）；度过|pay=付费|piggy bank=猪形储钱罐",
  },

  // ───────── 四年级上册（2025 秋新课标版）─────────
  {
    grade: 4,
    term: "上",
    name: "Unit 1 Helping at home",
    words:
      "PE=体育（课）|job=工作；职业|doctor=医生|farmer=农场主；农民|nurse=护士|worker=工人|office worker=公司职员|factory worker=工厂工人|busy=忙碌的|tired=疲倦的；累的|chore=家庭杂务|cook=烹饪；做饭；厨师|clean=打扫；干净的|room=房间|also=也；而且|look after=照顾|sweep=扫（地）|floor=地板；地面|together=在一起；共同|fun=享乐；乐趣|helpful=有帮助的；有用的",
  },
  {
    grade: 4,
    term: "上",
    name: "Unit 2 My friends",
    words:
      "his=他的|strong=强壮的|hair=头发|kind=友好的；体贴的|quiet=文静的；安静的|best=最好的|read=阅读|Chinese=中文；中国人；中国的|play=玩耍|game=游戏|football=足球运动|both=两者都|basketball=篮球运动|always=总是|tall=高的|short=矮的；短的|thin=瘦的|long=长的|shoe=鞋|glasses=眼镜|her=她的",
  },
  {
    grade: 4,
    term: "上",
    name: "Unit 3 Places we live in",
    words:
      "afternoon=下午|there=在那里|playground=游乐场；操场|park=公园|over=在……的远端（或对面）|hospital=医院|shop=商店|toilet=厕所；卫生间|bus=公共汽车|stop=车站；停止|library=图书馆|sport=体育运动|walk=散步；行走|take=做，进行（某活动）|take a walk=散步|favourite=最喜欢的|place=地方；场所|community=社区|supermarket=超市|near=在……附近|street=街道",
  },
  {
    grade: 4,
    term: "上",
    name: "Unit 4 Helping in the community",
    words:
      "firefighter=消防队员|why=为什么|driver=司机|cleaner=清洁工|cook=厨师|delivery worker=快递员；外卖员|police officer=警察；警员|now=现在|make the bed=铺床|old=年老的；旧的|Ms=女士|tell=讲述；告诉|everyone=每人；人人|volunteer=志愿者|safe=安全的|a lot of=大量；许多",
  },
  {
    grade: 4,
    term: "上",
    name: "Unit 5 The weather and us",
    words:
      "weather=天气|sunny=晴朗的；阳光充足的|hot=热的|cold=冷的|windy=多风的|cloudy=多云的|rainy=阴雨的；多雨的|snowy=下雪的|cool=凉爽的|warm=温暖的|speak=说话；发言|Sydney=悉尼|fly=放飞（风筝等）；飞|make=堆（雪人等）；制作|snowman=雪人|rain=雨；下雨|degree=度；度数|bad=坏的；糟糕的|reminder=提醒物；提示|film=电影|tomorrow=在明天；明天|coat=大衣；外套|travel=旅行",
  },
  {
    grade: 4,
    term: "上",
    name: "Unit 6 Changing for the seasons",
    words:
      "season=季节|change=改变；变化|spring=春天|summer=夏天|autumn=秋天|winter=冬天|whose=谁的|sweater=毛衣|sock=短袜|mine=我的|wear=穿；戴|coat=大衣；外套|dress=连衣裙|shirt=衬衫|shorts=短裤|skirt=短裙|hat=帽子|glove=手套|snow=雪；下雪|leaf=叶；叶子|colourful=五彩缤纷的|card=卡片|plant=植物；种植|trip=旅行",
  },

  // ───────── 四年级下册（2026 春新课标版）─────────
  {
    grade: 4,
    term: "下",
    name: "Unit 1 Class rules",
    words:
      "class=班级；课|rule=规则；规章|classroom=教室|homework=家庭作业|late=迟到；迟的|sorry=对不起|hurry up=快点；赶快|ready=准备好的|turn off=关掉（电灯等）|light=灯；光|blackboard=黑板|desk=书桌|chair=椅子|hand out=分发|workbook=练习册；作业本|tidy=整洁的；整理|music=音乐|wall=墙壁|window=窗户|fan=风扇|door=门",
  },
  {
    grade: 4,
    term: "下",
    name: "Unit 2 Family rules",
    words:
      "family=家庭；家人|safe=安全的|run=跑；奔跑|watch=看；观看|TV=电视|watch TV=看电视|first=首先；第一|wet=湿的|house=房子|word=单词；字|newspaper=报纸|be careful=小心|touch=触摸；碰|hot=烫的；热的|living room=客厅|kitchen=厨房|bedroom=卧室|loud=大声的|sleep=睡觉",
  },
  {
    grade: 4,
    term: "下",
    name: "Unit 3 Time for school",
    words:
      "time=时间|breakfast=早餐|lunch=午餐|dinner=晚餐；正餐|get up=起床|go to school=去上学|go home=回家|go to bed=上床睡觉|over=结束|kid=小孩|art=美术|maths=数学|English class=英语课|music class=音乐课|PE class=体育课|o'clock=……点钟|thirty=三十|forty=四十|just a minute=稍等一会儿|come on=快；加油",
  },
  {
    grade: 4,
    term: "下",
    name: "Unit 4 Going shopping",
    words:
      "clothes=衣服；服装|trousers=裤子|pants=裤子|pair=双；对；条|dress=连衣裙|skirt=短裙|coat=外衣；大衣|jacket=夹克衫|shirt=衬衫|shorts=短裤|shoes=鞋子|hat=帽子|glove=手套|scarf=围巾|umbrella=雨伞|sunglasses=太阳镜|cheap=便宜的|expensive=昂贵的|pretty=美观的；漂亮的|nice=好的|try on=试穿|size=尺码；号|of course=当然|too=太；也|just=正好；恰好|how much=多少钱|eighty=八十|dollar=美元；元|sale=特价销售|more=更多的|those=那些",
  },
  {
    grade: 4,
    term: "下",
    name: "Unit 5 Farms and us",
    words:
      "farm=农场|us=我们（宾格）|animal=动物|horse=马|cow=母牛；奶牛|sheep=绵羊|hen=母鸡|goat=山羊|pig=猪|duck=鸭子|these=这些|those=那些|garden=花园；菜园|grass=草；草地|count=数数|many=许多的",
  },
  {
    grade: 4,
    term: "下",
    name: "Unit 6 From farm to table",
    words:
      "tomato=西红柿|potato=马铃薯；土豆|green beans=豆角；四季豆|carrot=胡萝卜|vegetable=蔬菜|fruit=水果|eat=吃|yum=美味；好吃|farmer=农民|field=田地|plant=种植；植物|pick=采摘|table=餐桌；桌子|fresh=新鲜的|healthy=健康的",
  },

  // ───────── 五年级上册（2026 秋新课标版）─────────
  {
    grade: 5,
    term: "上",
    name: "Unit 1 Different friends",
    words:
      "old=老的；年纪大的|young=年轻的|funny=滑稽的；可笑的|kind=体贴的；慈祥的|strict=要求严格的|polite=有礼貌的|hard-working=工作努力的；勤奋的|helpful=有用的；愿意帮忙的|clever=聪明的|shy=羞怯的；腼腆的|tall=高的|short=矮的|speak=会说；会讲|like=像；喜欢|sometimes=有时|very=很；非常|robot=机器人|finish=完成|know=知道；了解|our=我们的|Ms=女士|will=将要|him=他（宾语）|team=团队；队|jump=跳|piano=钢琴|chess=国际象棋",
  },
  {
    grade: 5,
    term: "上",
    name: "Unit 2 My feelings",
    words:
      "feel=觉得；感到|happy=高兴的|sad=难过的|angry=生气的|afraid=害怕的|worried=担心的；发愁的|excited=兴奋的；激动的|tired=疲倦的|bored=无聊的；烦闷的|sleepy=困倦的|matter=事情；问题|agree=同意|each other=彼此；互相|clean up=打扫干净|cry=哭；哭泣|project=项目；课题|center=中心",
  },
  {
    grade: 5,
    term: "上",
    name: "Unit 3 Work and play",
    words:
      "week=周；星期|day=天；一日|Monday=星期一|Tuesday=星期二|Wednesday=星期三|Thursday=星期四|Friday=星期五|Saturday=星期六|Sunday=星期日|weekend=周末|subject=学科；科目|homework=作业|class=课程；班级|cook=烹饪|activity=活动|park=公园|football=足球|read=阅读|pipa=琵琶|visit=拜访；看望|lesson=课|grandparents=（外）祖父母|balance=平衡|taijiquan=太极拳|schedule=日程安排|break=休息|survey=调查|timetable=时间表|club=社团；俱乐部|wash my clothes=洗我的衣服|watch TV=看电视|play sports=做体育运动",
  },
  {
    grade: 5,
    term: "上",
    name: "Unit 4 Healthy habits",
    words:
      "habit=习惯|healthy=健康的|should=应该|exercise=锻炼；运动|rest=休息|enough=足够的；充足的|flu=流感|brush=刷（牙等）|tooth=牙齿|twice=两次；两遍|hour=小时|less=较少的；更少的|phone=电话；手机|early=早的；提早|late=晚的；迟的|sleep=睡觉；睡眠|keep=保持|body=身体|care=关心；照料|check=检查",
  },
  {
    grade: 5,
    term: "上",
    name: "Unit 5 Food we eat",
    words:
      "beef=牛肉|dumpling=饺子|hamburger=汉堡包|sandwich=三明治|ice cream=冰激凌|tea=茶；茶水|salad=蔬菜沙拉|fresh=新鲜的|delicious=美味的；可口的|hot=辣的；辛辣的|sweet=甜的|drink=喝；饮|thirsty=渴的；口渴的|favourite=特别喜爱的|food=食物|onion=洋葱|soup=汤|chicken=鸡肉|noodles=面条",
  },
  {
    grade: 5,
    term: "上",
    name: "Unit 6 Nature and us",
    words:
      "nature=自然界；大自然|mountain=高山；山脉|river=河流|lake=湖；湖泊|forest=森林|hill=小山；山丘|bridge=桥|building=建筑物|village=村庄；村镇|house=房屋；房子|tree=树|flower=花|grass=草；草地|cloud=云|high=高的|clean=干净的|protect=保护|boating=划船|go boating=去划船|rabbit=兔子",
  },

  // ───────── 五年级下册（新课标同步）─────────
  {
    grade: 5,
    term: "下",
    name: "Unit 1 My day",
    words:
      "eat breakfast=吃早饭|have...class=上……课|play sports=进行体育运动|exercise=活动；运动|do morning exercises=做早操|eat dinner=吃晚饭|clean my room=打扫我的房间|go for a walk=散步|go shopping=去买东西；购物|take=学习；上（课）|take a dancing class=上舞蹈课|when=什么时候；何时|after=在（时间）后|start=开始|usually=通常地；惯常地|Spain=西班牙|late=晚；迟|why=为什么|shop=去买东西；购物|work=工作|last=上一个的；刚过去的|sound=听起来好像|also=还；也|busy=忙的|need=需要|play=戏剧；剧本|letter=信|live=居住|island=岛|always=总是；一直|cave=山洞；洞穴|go swimming=去游泳|win=获胜",
  },
  {
    grade: 5,
    term: "下",
    name: "Unit 2 My favourite season",
    words:
      "spring=春天|summer=夏天|autumn=秋天|winter=冬天|season=季节|picnic=野餐|go on a picnic=去野餐|pick=摘；采集|pick apples=摘苹果|snowman=雪人|make a snowman=堆雪人|go swimming=去游泳|which=哪一个|best=最；最高程度地|snow=雪|good job=做得好|because=因为|vacation=假期|all=全；完全|pink=粉色；粉色的|lovely=可爱的；美丽的|leaf=叶子|leaves=叶子（复数）|fall=落下；秋天|paint=用颜料绘画",
  },
  {
    grade: 5,
    term: "下",
    name: "Unit 3 My school calendar",
    words:
      "January=一月|February=二月|March=三月|April=四月|May=五月|June=六月|July=七月|August=八月|September=九月|October=十月|November=十一月|December=十二月|few=不多；很少|a few=一些|thing=事情|meet=集会；开会|sports meet=运动会|Easter=复活节|trip=旅行|year=年|plant=种植|contest=比赛；竞赛|the Great Wall=长城|national=国家的|National Day=国庆日|American=美国的|Thanksgiving=感恩节|Christmas=圣诞节|holiday=假日；节日|game=游戏|roll=滚动|look for=寻找|chocolate=巧克力|bunny=（用作儿语）兔子|by=在……之前",
  },
  {
    grade: 5,
    term: "下",
    name: "Unit 4 When is the art show?",
    words:
      "first=第一（1st）|second=第二（2nd）|third=第三（3rd）|fourth=第四（4th）|fifth=第五（5th）|twelfth=第十二（12th）|twentieth=第二十（20th）|twenty-first=第二十一（21st）|twenty-third=第二十三（23rd）|thirtieth=第三十（30th）|special=特殊的；特别的|fool=蠢人；傻瓜|kitten=小猫|diary=日记|still=仍然；依旧|noise=声音；响声|fur=（动物的）浓密的软毛|open=开着的|walk=行走",
  },
  {
    grade: 5,
    term: "下",
    name: "Unit 5 Whose dog is it?",
    words:
      "mine=我的|yours=你（们）的|his=他的|hers=她的|theirs=他们的；她们的；它们的|ours=我们的|climb=攀登；攀爬|climbing=（正在）攀登；攀爬|eat=吃|eating=（正在）吃|play=玩耍|playing=（正在）玩耍|jump=跳|jumping=（正在）跳|drink=喝（水）|drinking=（正在）喝（水）|sleep=睡觉|sleeping=（正在）睡觉|each=各个；每个|other=其他|each other=相互|excited=兴奋的；激动的|like=像……那样",
  },
  {
    grade: 5,
    term: "下",
    name: "Unit 6 Work quietly!",
    words:
      "doing morning exercises=（正在）做早操|having...class=（正在）上……课|eating lunch=（正在）吃午饭|reading a book=（正在）看书|listening to music=（正在）听音乐|keep=保持某种状态|keep to the right=靠右|keep your desk clean=保持你的课桌干净|talk quietly=小声讲话|turn=顺序|take turns=按顺序来|bamboo=竹子|its=它的|show=给人看；指引|anything=任何事物|else=另外；其他|exhibition=展览|say=说；讲|have a look=看一看|sushi=寿司|teach=教|sure=当然|Canadian=加拿大的|Spanish=西班牙的",
  },

  // ───────── 六年级上册（2026 新课标版）─────────
  {
    grade: 6,
    term: "上",
    name: "Unit 1 Amazing landmarks",
    words:
      "was=是（am/is的过去式）|kilometre=千米；公里|gingerbread house=姜饼屋|go=去；走|went=去（go的过去式）|climb=攀登；爬|send=邮寄；发送|thousand=一千|clay=黏土；陶土|see=看见|saw=看见（see的过去式）|village=村庄；村镇|eat=吃|ate=吃（eat的过去式）|dry=干的|take=拍摄；做|took=拍摄（take的过去式）|view=景色|inspiring=鼓舞人心的|bamboo=竹；竹子|pumpkin=南瓜|restaurant=餐馆；餐厅|airport=机场|New Zealand=新西兰|Paris=巴黎|Eiffel Tower=埃菲尔铁塔|Terracotta Warriors=兵马俑",
  },
  {
    grade: 6,
    term: "上",
    name: "Unit 2 Getting together",
    words:
      "gala=演出；庆典|count down=倒计时|marathon=马拉松赛跑|as=作为|race=赛跑；速度竞赛|run=跑；奔跑|ran=跑（run的过去式）|wear=穿；戴|wore=穿；戴（wear的过去式）|yesterday=昨天|notice=通知|wake=醒；醒来|woke=醒（wake的过去式）|later=随后；后来|judge=裁判|together=在一起|get together=聚会|festival=节日|celebrate=庆祝|invite=邀请",
  },
  {
    grade: 6,
    term: "上",
    name: "Unit 3 Healthy life",
    words:
      "cold=感冒|ill=不舒服；有病|head=头；头部|runny nose=流鼻涕|soon=很快；马上|fever=发烧；发热|cough=咳嗽|discuss=讨论；商量|diet=日常饮食|stay up=熬夜|cry=哭；哭泣|another=另一；不同的|call=打电话|email=电子邮件|unhappy=不快乐的；难过的|glass=一杯（的量）；玻璃杯|may=也许；可能|add=补充说；增加|video=视频；录像|better=好转的；更好的",
  },
  {
    grade: 6,
    term: "上",
    name: "Unit 4 Managing money well",
    words:
      "money=钱|pocket money=零花钱|schoolbag=书包|goods=商品|drink=饮料|service=服务|haircut=理发；发型|microscope=显微镜|lucky=幸运的|save up=攒钱|sale=特价销售；出售|ticket=票|manage=管理|difficult=困难的|sell=售；售卖|jar=罐子|half=一半|for example=例如",
  },
  {
    grade: 6,
    term: "上",
    name: "Unit 5 Exploring space",
    words:
      "planet=行星|earth=地球|sky=天；天空|daytime=白天|cloud=云|moon=月球；月亮|star=恒星；星星|space=太空；空间|outer space=外太空|space station=空间站|ocean=大海；海洋|marble=玻璃弹珠|satellite=人造卫星|soil=土壤|alien=外星生物|sunrise=日出|rover=探测器|into=朝；进入|telescope=望远镜|astronaut=宇航员|month=月；月份|spaceship=宇宙飞船|taikonaut=中国航天员",
  },
  {
    grade: 6,
    term: "上",
    name: "Unit 6 Energy, nature and us",
    words:
      "power=能；能量|electricity=电|solar=太阳的|type=类型；种类|energy=能源|light=照亮；电灯|source=来源|heat=加热；热量|cool=冷却；使变凉|run=使运行|resource=资源|run out=用完|few=不多；很少|change=改变；变化|quick=迅速的；快的|shower=淋浴|unplug=拔掉电源插头|difference=差别；不同|reduce=减少|air conditioner=空调|drive=驾驶；开车|reuse=重复使用|own=自己的|top=最高的；顶部|market=集市；市场|bottle=瓶子|dirty=脏的|useful=有用的|side=一面；一边",
  },

  // ───────── 六年级下册（新课标同步）─────────
  {
    grade: 6,
    term: "下",
    name: "Unit 1 How tall are you?",
    words:
      "younger=更年轻的|older=更年长的|taller=更高的|shorter=更矮的；更短的|longer=更长的|thinner=更瘦的|heavier=更重的|bigger=更大的|smaller=更小的|stronger=更强壮的|dinosaur=恐龙|hall=大厅|metre=米|than=比|both=两个都|kilogram=千克；公斤|countryside=乡村|lower=更低的|shadow=影子；阴影|smarter=更聪明的|become=变成；开始变得",
  },
  {
    grade: 6,
    term: "下",
    name: "Unit 2 Last weekend",
    words:
      "cleaned=打扫（过去式）|stayed=停留（过去式）|washed=洗（过去式）|watched=看（过去式）|had=患病；得（过去式）|had a cold=感冒|slept=睡觉（过去式）|read=读（过去式）|saw=看见（过去式）|last=最近的；上一个的|yesterday=昨天|before=在……之前|drank=喝（过去式）|show=演出|magazine=杂志|better=更好的|faster=更快的|hotel=旅馆|fixed=修理（过去式）|broken=破损的|lamp=台灯|loud=喧闹的；大声的|enjoy=享受……乐趣；喜爱|stay=暂住；逗留",
  },
  {
    grade: 6,
    term: "下",
    name: "Unit 3 Where did you go?",
    words:
      "went=去（过去式）|camp=野营|went camping=去野营|fish=钓鱼；捕鱼|went fishing=去钓鱼|ride=骑（马；自行车）|rode=骑（过去式）|hurt=（使）受伤|eat=吃|ate=吃（过去式）|take=拍照|took=拍照（过去式）|take pictures=照相|buy=买|bought=买（过去式）|gift=礼物|fall=摔倒|fell=摔倒（过去式）|off=从（某处）落下|Labour Day=劳动节|mule=骡子|Turpan=吐鲁番|could=能（过去式）|till=直到|beach=海滩；沙滩|basket=篮；筐|part=角色|licked=舔（过去式）|laughed=笑（过去式）",
  },
  {
    grade: 6,
    term: "下",
    name: "Unit 4 Then and now",
    words:
      "dining hall=饭厅|grass=草坪|gym=体育馆|ago=以前|cycling=骑自行车运动|go cycling=去骑自行车|ice-skate=滑冰|badminton=羽毛球运动|star=星|easy=容易的|look up=查阅|Internet=互联网|different=不同的|active=积极的；活跃的|race=赛跑|nothing=没有什么|thought=想（过去式）|felt=感觉（过去式）|cheetah=猎豹|trip=绊倒|woke=醒（过去式）|dream=梦",
  },
];

/** 核心词汇国际音标映射，让闪卡与单词表展示标准发音 */
export const PHONETIC: Record<string, string> = {
  // 三上
  name: "neɪm", nice: "naɪs", ear: "ɪə(r)", hand: "hænd", eye: "aɪ", mouth: "maʊθ", arm: "ɑːm",
  can: "kæn", share: "ʃeə(r)", smile: "smaɪl", listen: "ˈlɪsn", help: "help", say: "seɪ",
  and: "ænd", goodbye: "ˌɡʊdˈbaɪ", toy: "tɔɪ", friend: "frend", good: "ɡʊd",
  mum: "mʌm", dad: "dæd", grandma: "ˈɡrænmɑː", grandpa: "ˈɡrænpɑː", grandfather: "ˈɡrænfɑːðə(r)",
  grandmother: "ˈɡrænmʌðə(r)", mother: "ˈmʌðə(r)", father: "ˈfɑːðə(r)", me: "miː", sister: "ˈsɪstə(r)",
  family: "ˈfæməli", have: "hæv", big: "bɪɡ", cousin: "ˈkʌzn", brother: "ˈbrʌðə(r)", baby: "ˈbeɪbi",
  uncle: "ˈʌŋkl", aunt: "ɑːnt", some: "sʌm", small: "smɔːl",
  like: "laɪk", dog: "dɒɡ", pet: "pet", cat: "kæt", fish: "fɪʃ", bird: "bɜːd", rabbit: "ˈræbɪt",
  go: "ɡəʊ", Miss: "mɪs", panda: "ˈpændə", "red panda": "ˌred ˈpændə", cute: "kjuːt",
  monkey: "ˈmʌŋki", tiger: "ˈtaɪɡə(r)", elephant: "ˈelɪfənt", lion: "ˈlaɪən", animal: "ˈænɪml",
  giraffe: "dʒəˈrɑːf", tall: "tɔːl", fast: "fɑːst", fox: "fɒks", zoo: "zuː",
  apple: "ˈæpl", banana: "bəˈnɑːnə", farm: "fɑːm", air: "eə(r)", orange: "ˈɒrɪndʒ",
  grape: "ɡreɪp", school: "skuːl", garden: "ˈɡɑːdn", need: "niːd", water: "ˈwɔːtə(r)",
  flower: "ˈflaʊə(r)", grass: "ɡrɑːs", plant: "plɑːnt", new: "njuː", tree: "triː", sun: "sʌn",
  give: "ɡɪv", them: "ðem", leaf: "liːf", seed: "siːd", grow: "ɡrəʊ",
  colour: "ˈkʌlə(r)", green: "ɡriːn", red: "red", blue: "bluː", make: "meɪk", purple: "ˈpɜːpl",
  brown: "braʊn", bear: "beə(r)", yellow: "ˈjeləʊ", duck: "dʌk", sea: "siː", pink: "pɪŋk",
  draw: "drɔː", white: "waɪt", black: "blæk",
  old: "əʊld", five: "faɪv", year: "jɪə(r)", one: "wʌn", two: "tuː", three: "θriː", four: "fɔː(r)",
  ten: "ten", six: "sɪks", seven: "ˈsevn", eight: "eɪt", nine: "naɪn", "o'clock": "əˈklɒk",
  cut: "kʌt", eat: "iːt", cake: "keɪk", "how many": "ˌhaʊ ˈmeni", number: "ˈnʌmbə(r)",
  count: "kaʊnt", balloon: "bəˈluːn", gift: "ɡɪft", plate: "pleɪt", birthday: "ˈbɜːθdeɪ",

  // 三下
  where: "weə(r)", from: "frɒm", about: "əˈbaʊt", today: "təˈdeɪ", teacher: "ˈtiːtʃə(r)",
  student: "ˈstjuːdnt", after: "ˈɑːftə(r)", who: "huː", girl: "ɡɜːl", neighbour: "ˈneɪbə(r)",
  boy: "bɔɪ", woman: "ˈwʊmən", man: "mæn", Mr: "ˈmɪstə(r)", classmate: "ˈklɑːsmeɪt",
  he: "hiː", English: "ˈɪŋɡlɪʃ", she: "ʃiː", very: "ˈveri", UK: "ˌjuː ˈkeɪ", China: "ˈtʃaɪnə",
  Canada: "ˈkænədə", USA: "ˌjuː es ˈeɪ",
  has: "hæz", long: "lɒŋ", body: "ˈbɒdi", short: "ʃɔːt", leg: "leɡ", right: "raɪt",
  fat: "fæt", thin: "θɪn", slow: "sləʊ", love: "lʌv", tail: "teɪl", bye: "baɪ", her: "hɜː(r)",
  picture: "ˈpɪktʃə(r)", card: "kɑːd", sing: "sɪŋ", dance: "dɑːns", face: "feɪs", all: "ɔːl",
  so: "səʊ", talk: "tɔːk", song: "sɒŋ", or: "ɔː(r)", much: "mʌtʃ",
  find: "faɪnd", ruler: "ˈruːlə(r)", pen: "pen", pencil: "ˈpensl", book: "bʊk", bag: "bæɡ",
  paper: "ˈpeɪpə(r)", these: "ðiːz", see: "siː", hear: "hɪə(r)", learn: "lɜːn", nose: "nəʊz",
  class: "klɑːs", computer: "kəmˈpjuːtə(r)", eraser: "ɪˈreɪzə(r)", smell: "smel", taste: "teɪst",
  touch: "tʌtʃ", sense: "sens", tongue: "tʌŋ",
  breakfast: "ˈbrekfəst", time: "taɪm", bread: "bred", egg: "eɡ", milk: "mɪlk", noodle: "ˈnuːdl",
  juice: "dʒuːs", rice: "raɪs", meat: "miːt", vegetable: "ˈvedʒtəbl", healthy: "ˈhelθi",
  soup: "suːp", fruit: "fruːt", candy: "ˈkændi", yummy: "ˈjʌmi", colourful: "ˈkʌləfl",
  at: "æt", home: "həʊm", boat: "bəʊt", cool: "kuːl", keep: "kiːp", ball: "bɔːl", doll: "dɒl",
  car: "kɑː(r)", on: "ɒn", in: "ɪn", box: "bɒks", now: "naʊ", cap: "kæp", map: "mæp",
  under: "ˈʌndə(r)", put: "pʊt", still: "stɪl", shelf: "ʃelf",
  fifteen: "ˌfɪfˈtiːn", twelve: "twelv", fourteen: "ˌfɔːˈtiːn", thirteen: "ˌθɜːˈtiːn",
  eleven: "ɪˈlevn", sixteen: "ˌsɪksˈtiːn", seventeen: "ˌsevnˈtiːn", eighteen: "ˌeɪˈtiːn",
  nineteen: "ˌnaɪnˈtiːn", twenty: "ˈtwenti", choose: "tʃuːz", back: "bæk", save: "seɪv",
  spend: "spend", pay: "peɪ", "piggy bank": "ˈpɪɡi bæŋk",

  // 四上 & 四下
  PE: "ˌpiː ˈiː", job: "dʒɒb", doctor: "ˈdɒktə(r)", farmer: "ˈfɑːmə(r)", nurse: "nɜːs",
  worker: "ˈwɜːkə(r)", busy: "ˈbɪzi", tired: "ˈtaɪəd", chore: "tʃɔː(r)", cook: "kʊk",
  clean: "kliːn", room: "ruːm", also: "ˈɔːlsəʊ", sweep: "swiːp", floor: "flɔː(r)",
  together: "təˈɡeðə(r)", fun: "fʌn", helpful: "ˈhelpfl",
  his: "hɪz", strong: "strɒŋ", hair: "heə(r)", kind: "kaɪnd", quiet: "ˈkwaɪət", best: "best",
  read: "riːd", Chinese: "ˌtʃaɪˈniːz", play: "pleɪ", game: "ɡeɪm", football: "ˈfʊtbɔːl",
  both: "bəʊθ", basketball: "ˈbɑːskɪtbɔːl", always: "ˈɔːlweɪz", shoe: "ʃuː", glasses: "ˈɡlɑːsɪz",
  afternoon: "ˌɑːftəˈnuːn", there: "ðeə(r)", playground: "ˈpleɪɡraʊnd", park: "pɑːk",
  over: "ˈəʊvə(r)", hospital: "ˈhɒspɪtl", shop: "ʃɒp", toilet: "ˈtɔɪlət", bus: "bʌs",
  stop: "stɒp", library: "ˈlaɪbrəri", sport: "spɔːt", walk: "wɔːk", take: "teɪk",
  favourite: "ˈfeɪvərɪt", place: "pleɪs", community: "kəˈmjuːnəti", supermarket: "ˈsuːpəmɑːkɪt",
  near: "nɪə(r)", street: "striːt",
  firefighter: "ˈfaɪəfaɪtə(r)", why: "waɪ", driver: "ˈdraɪvə(r)", cleaner: "ˈkliːnə(r)",
  "police officer": "pəˈliːs ɒfɪsə(r)", Ms: "mɪz", tell: "tel", everyone: "ˈevriwʌn",
  volunteer: "ˌvɒlənˈtɪə(r)", safe: "seɪf",
  weather: "ˈweðə(r)", sunny: "ˈsʌni", hot: "hɒt", cold: "kəʊld", windy: "ˈwɪndi",
  cloudy: "ˈklaʊdi", rainy: "ˈreɪni", snowy: "ˈsnəʊi", warm: "wɔːm", speak: "spiːk",
  Sydney: "ˈsɪdni", fly: "flaɪ", snowman: "ˈsnəʊmæn", rain: "reɪn", degree: "dɪˈɡriː",
  bad: "bæd", reminder: "rɪˈmaɪndə(r)", film: "fɪlm", tomorrow: "təˈmɒrəʊ", coat: "kəʊt",
  travel: "ˈtrævl", season: "ˈsiːzn", change: "tʃeɪndʒ", spring: "sprɪŋ", summer: "ˈsʌmə(r)",
  autumn: "ˈɔːtəm", winter: "ˈwɪntə(r)", whose: "huːz", sweater: "ˈswetə(r)", sock: "sɒk",
  mine: "maɪn", wear: "weə(r)", dress: "dres", shirt: "ʃɜːt", shorts: "ʃɔːts", skirt: "skɜːt",
  hat: "hæt", glove: "ɡlʌv", snow: "snəʊ", trip: "trɪp",
  rule: "ruːl", classroom: "ˈklɑːsruːm", homework: "ˈhəʊmwɜːk", late: "leɪt", sorry: "ˈsɒri",
  ready: "ˈredi", light: "laɪt", blackboard: "ˈblækbɔːd", desk: "desk", chair: "tʃeə(r)",
  workbook: "ˈwɜːkbʊk", tidy: "ˈtaɪdi", music: "ˈmjuːzɪk", wall: "wɔːl", window: "ˈwɪndəʊ",
  fan: "fæn", door: "dɔː(r)", run: "rʌn", watch: "wɒtʃ", TV: "ˌtiː ˈviː", first: "fɜːst",
  wet: "wet", house: "haʊs", word: "wɜːd", newspaper: "ˈnjuːzpeɪpə(r)", kitchen: "ˈkɪtʃɪn",
  bedroom: "ˈbedruːm", loud: "laʊd", sleep: "sliːp", lunch: "lʌntʃ", dinner: "ˈdɪnə(r)",
  kid: "kɪd", art: "ɑːt", maths: "mæθs", thirty: "ˈθɜːti", forty: "ˈfɔːti",
  clothes: "kləʊðz", trousers: "ˈtraʊzəz", pants: "pænts", pair: "peə(r)", jacket: "ˈdʒækɪt",
  shoes: "ʃuːz", scarf: "skɑːf", umbrella: "ʌmˈbrelə", sunglasses: "ˈsʌnɡlɑːsɪz",
  cheap: "tʃiːp", expensive: "ɪkˈspensɪv", pretty: "ˈprɪti", size: "saɪz", too: "tuː",
  just: "dʒʌst", eighty: "ˈeɪti", dollar: "ˈdɒlə(r)", sale: "seɪl", more: "mɔː(r)", those: "ðəʊz",
  us: "ʌs", horse: "hɔːs", cow: "kaʊ", sheep: "ʃiːp", hen: "hen", goat: "ɡəʊt", pig: "pɪɡ",
  many: "ˈmeni", tomato: "təˈmɑːtəʊ", potato: "pəˈteɪtəʊ", carrot: "ˈkærət", yum: "jʌm",
  field: "fiːld", pick: "pɪk", table: "ˈteɪbl", fresh: "freʃ",

  // 五上 & 五下 & 六年级核心词
  young: "jʌŋ", funny: "ˈfʌni", strict: "strɪkt", polite: "pəˈlaɪt",
  "hard-working": "ˌhɑːd ˈwɜːkɪŋ", clever: "ˈklevə(r)", shy: "ʃaɪ", sometimes: "ˈsʌmtaɪmz",
  robot: "ˈrəʊbɒt", finish: "ˈfɪnɪʃ", know: "nəʊ", our: "ˈaʊə(r)", will: "wɪl", him: "hɪm",
  team: "tiːm", jump: "dʒʌmp", piano: "piˈænəʊ", chess: "tʃes",
  feel: "fiːl", happy: "ˈhæpi", sad: "sæd", angry: "ˈæŋɡri", afraid: "əˈfreɪd",
  worried: "ˈwʌrid", excited: "ɪkˈsaɪtɪd", bored: "bɔːd", sleepy: "ˈsliːpi", matter: "ˈmætə(r)",
  agree: "əˈɡriː", cry: "kraɪ", project: "ˈprɒdʒekt", center: "ˈsentə(r)",
  week: "wiːk", day: "deɪ", Monday: "ˈmʌndeɪ", Tuesday: "ˈtjuːzdeɪ", Wednesday: "ˈwenzdeɪ",
  Thursday: "ˈθɜːzdeɪ", Friday: "ˈfraɪdeɪ", Saturday: "ˈsætədeɪ", Sunday: "ˈsʌndeɪ",
  weekend: "ˌwiːkˈend", subject: "ˈsʌbdʒɪkt", activity: "ækˈtɪvəti", pipa: "ˈpiːpɑː",
  visit: "ˈvɪzɪt", lesson: "ˈlesn", grandparents: "ˈɡrænpeərənts", balance: "ˈbæləns",
  schedule: "ˈʃedjuːl", break: "breɪk", survey: "ˈsɜːveɪ", timetable: "ˈtaɪmteɪbl", club: "klʌb",
  habit: "ˈhæbɪt", should: "ʃʊd", exercise: "ˈeksəsaɪz", rest: "rest", enough: "ɪˈnʌf",
  flu: "fluː", brush: "brʌʃ", tooth: "tuːθ", twice: "twaɪs", hour: "ˈaʊə(r)", less: "les",
  phone: "fəʊn", early: "ˈɜːli", care: "keə(r)", check: "tʃek",
  beef: "biːf", dumpling: "ˈdʌmplɪŋ", hamburger: "ˈhæmbɜːɡə(r)", sandwich: "ˈsænwɪtʃ",
  "ice cream": "ˌaɪs ˈkriːm", tea: "tiː", salad: "ˈsæləd", delicious: "dɪˈlɪʃəs",
  sweet: "swiːt", drink: "drɪŋk", thirsty: "ˈθɜːsti", food: "fuːd", onion: "ˈʌnjən",
  chicken: "ˈtʃɪkɪn", noodles: "ˈnuːdlz",
  nature: "ˈneɪtʃə(r)", mountain: "ˈmaʊntən", river: "ˈrɪvə(r)", lake: "leɪk", forest: "ˈfɒrɪst",
  hill: "hɪl", bridge: "brɪdʒ", building: "ˈbɪldɪŋ", village: "ˈvɪlɪdʒ", cloud: "klaʊd",
  high: "haɪ", protect: "prəˈtekt", boating: "ˈbəʊtɪŋ",
  kilometre: "ˈkɪləmiːtə(r)", climb: "klaɪm", send: "send", thousand: "ˈθaʊznd", clay: "kleɪ",
  dry: "draɪ", view: "vjuː", inspiring: "ɪnˈspaɪərɪŋ", bamboo: "ˌbæmˈbuː", pumpkin: "ˈpʌmpkɪn",
  restaurant: "ˈrestərɒnt", airport: "ˈeəpɔːt", Paris: "ˈpærɪs",
  gala: "ˈɡɑːlə", marathon: "ˈmærəθɒn", race: "reɪs", yesterday: "ˈjestədeɪ", notice: "ˈnəʊtɪs",
  wake: "weɪk", later: "ˈleɪtə(r)", judge: "dʒʌdʒ", festival: "ˈfestɪvl", celebrate: "ˈselɪbreɪt",
  invite: "ɪnˈvaɪt", ill: "ɪl", head: "hed", soon: "suːn", fever: "ˈfiːvə(r)", cough: "kɒf",
  discuss: "dɪˈskʌs", diet: "ˈdaɪət", another: "əˈnʌðə(r)", call: "kɔːl", email: "ˈiːmeɪl",
  unhappy: "ʌnˈhæpi", glass: "ɡlɑːs", may: "meɪ", add: "æd", video: "ˈvɪdiəʊ", better: "ˈbetə(r)",
  money: "ˈmʌni", schoolbag: "ˈskuːlbæɡ", goods: "ɡʊdz", service: "ˈsɜːvɪs", haircut: "ˈheəkʌt",
  microscope: "ˈmaɪkrəskəʊp", lucky: "ˈlʌki", ticket: "ˈtɪkɪt", manage: "ˈmænɪdʒ",
  difficult: "ˈdɪfɪkəlt", sell: "sel", jar: "dʒɑː(r)", half: "hɑːf",
  planet: "ˈplænɪt", earth: "ɜːθ", sky: "skaɪ", daytime: "ˈdeɪtaɪm", moon: "muːn", star: "stɑː(r)",
  space: "speɪs", ocean: "ˈəʊʃn", marble: "ˈmɑːbl", satellite: "ˈsætəlaɪt", soil: "sɔɪl",
  alien: "ˈeɪliən", sunrise: "ˈsʌnraɪz", rover: "ˈrəʊvə(r)", telescope: "ˈtelɪskəʊp",
  astronaut: "ˈæstrənɔːt", month: "mʌnθ", spaceship: "ˈspeɪsʃɪp", taikonaut: "ˈtaɪkənɔːt",
  power: "ˈpaʊə(r)", electricity: "ɪˌlekˈtrɪsəti", solar: "ˈsəʊlə(r)", type: "taɪp",
  energy: "ˈenədʒi", source: "sɔːs", heat: "hiːt", resource: "rɪˈsɔːs", quick: "kwɪk",
  shower: "ˈʃaʊə(r)", unplug: "ˌʌnˈplʌɡ", difference: "ˈdɪfrəns", reduce: "rɪˈdjuːs",
  drive: "draɪv", reuse: "ˌriːˈjuːz", own: "əʊn", top: "tɒp", market: "ˈmɑːkɪt",
  bottle: "ˈbɒtl", dirty: "ˈdɜːti", useful: "ˈjuːsfl", side: "saɪd",
};

/** 常见单词的 emoji，让低年级小朋友更直观 */
export const EMOJI: Record<string, string> = {
  // 身体、问候与朋友
  face: "🙂", ear: "👂", eye: "👁️", nose: "👃", mouth: "👄", arm: "💪", hand: "✋", head: "🗣️",
  leg: "🦵", foot: "🦶", body: "🧍", tongue: "👅", tooth: "🦷", hair: "💇",
  smile: "😊", listen: "👂", share: "🤝", help: "🫱‍🫲", goodbye: "👋", bye: "👋", friend: "🤝",

  // 家庭与人物
  father: "👨", dad: "👨", mother: "👩", mum: "👩", man: "👨", woman: "👩",
  grandmother: "👵", grandma: "👵", grandfather: "👴", grandpa: "👴", grandparents: "🧓",
  family: "👨‍👩‍👧", baby: "👶", sister: "👧", brother: "👦", uncle: "👨", aunt: "👩",
  boy: "👦", girl: "👧", kid: "🧒", teacher: "🧑‍🏫", student: "🧑‍🎓", classmate: "🧑‍🎓",
  neighbour: "🏘️",

  // 职业与社区
  doctor: "🧑‍⚕️", cook: "🧑‍🍳", driver: "🚕", farmer: "🧑‍🌾", nurse: "👩‍⚕️", worker: "👷",
  "office worker": "💼", "factory worker": "🏭", firefighter: "🧑‍🚒", cleaner: "🧹",
  "delivery worker": "🛵", "police officer": "👮", volunteer: "🎗️", astronaut: "🧑‍🚀",
  taikonaut: "🧑‍🚀", judge: "⚖️",

  // 动物
  dog: "🐶", pet: "🐾", cat: "🐱", fish: "🐟", bird: "🐦", rabbit: "🐰", bunny: "🐰",
  panda: "🐼", "red panda": "🦊", monkey: "🐵", tiger: "🐯", elephant: "🐘", lion: "🦁",
  giraffe: "🦒", fox: "🦊", zoo: "🦁", bear: "🐻", duck: "🦆", pig: "🐷", horse: "🐴",
  cow: "🐄", sheep: "🐑", hen: "🐔", goat: "🐐", animal: "🐾", tail: "🐒", kitten: "🐱",
  dinosaur: "🦖", mule: "🫏", cheetah: "🐆",

  // 植物与自然
  apple: "🍎", banana: "🍌", orange: "🍊", grape: "🍇", pear: "🍐", watermelon: "🍉",
  strawberry: "🍓", fruit: "🍑", tomato: "🍅", potato: "🥔", carrot: "🥕", "green beans": "🫛",
  vegetable: "🥬", onion: "🧅", pumpkin: "🎃", bamboo: "🎋",
  flower: "🌸", grass: "🌿", plant: "🪴", tree: "🌳", leaf: "🍃", leaves: "🍂", seed: "🌱",
  sun: "☀️", air: "💨", water: "💧", sea: "🌊", ocean: "🌊", farm: "🚜", garden: "🌷",
  field: "🌾", forest: "🌲", river: "🏞️", lake: "🏞️", mountain: "⛰️", hill: "⛰️",
  cloud: "☁️", sky: "🌤️", nature: "🌿", island: "🏝️", cave: "🪨", beach: "🏖️", soil: "🪴",

  // 颜色
  colour: "🎨", red: "🔴", green: "🟢", yellow: "🟡", blue: "🔵", black: "⚫",
  brown: "🟤", white: "⚪", purple: "🟣", pink: "🩷", colourful: "🌈",

  // 数字与金钱
  one: "1️⃣", two: "2️⃣", three: "3️⃣", four: "4️⃣", five: "5️⃣",
  six: "6️⃣", seven: "7️⃣", eight: "8️⃣", nine: "9️⃣", ten: "🔟",
  number: "🔢", "piggy bank": "🐷", money: "💰", "pocket money": "🪙", dollar: "💵", ticket: "🎟️",

  // 食物与餐饮
  cake: "🎂", birthday: "🎂", balloon: "🎈", gift: "🎁", plate: "🍽️",
  breakfast: "🍳", lunch: "🍱", dinner: "🍲", bread: "🍞", egg: "🥚", milk: "🥛",
  noodle: "🍜", noodles: "🍜", juice: "🧃", rice: "🍚", meat: "🥩", soup: "🥣",
  candy: "🍬", sweet: "🍭", beef: "🥩", dumpling: "🥟", hamburger: "🍔", sandwich: "🥪",
  "ice cream": "🍦", tea: "🍵", salad: "🥗", chicken: "🍗", chocolate: "🍫", sushi: "🍣",
  "gingerbread house": "🏠", drink: "🥤", glass: "🥛", jar: "🫙",

  // 学习用品、玩具与家居
  ruler: "📏", pencil: "✏️", eraser: "🧽", crayon: "🖍️", bag: "👜", schoolbag: "🎒",
  pen: "🖊️", book: "📕", workbook: "📓", paper: "📄", card: "🪪", newspaper: "📰",
  magazine: "📰", diary: "📔", letter: "✉️", computer: "💻",
  toy: "🧸", boat: "⛵", ball: "⚽", doll: "🪆", car: "🚗", box: "📦", cap: "🧢", map: "🗺️",
  shelf: "🗄️", desk: "🗄️", chair: "🪑", blackboard: "📋", light: "💡",
  window: "🪟", fan: "🌀", door: "🚪", wall: "🧱", floor: "🧹",
  home: "🏠", house: "🏠", room: "🚪", bedroom: "🛏️", "living room": "🛋️", kitchen: "🍳",
  toilet: "🚽", table: "🪑", phone: "📱", lamp: "🪔", bottle: "🍼", clock: "🕐",
  "make the bed": "🛏️", sweep: "🧹",

  // 衣物与配饰
  clothes: "👕", trousers: "👖", pants: "👖", dress: "👗", skirt: "👗", coat: "🧥",
  sweater: "🧶", sock: "🧦", shorts: "🩳", jacket: "🧥", shirt: "👔", shoe: "👟", shoes: "👟",
  hat: "👒", glove: "🧤", scarf: "🧣", umbrella: "☂️", sunglasses: "🕶️", glasses: "👓",

  // 天气与季节
  weather: "🌤️", sunny: "☀️", hot: "🥵", cold: "🥶", windy: "🌬️", cloudy: "☁️",
  rainy: "🌧️", rain: "🌧️", snowy: "❄️", snow: "❄️", cool: "🍃", warm: "🌤️",
  snowman: "⛄", season: "🍂", spring: "🌱", summer: "🏖️", autumn: "🍂", winter: "⛄",

  // 运动、艺术与活动
  football: "⚽", basketball: "🏀", sport: "🏃", "play sports": "🏃", run: "🏃",
  walk: "🚶", "take a walk": "🚶", jump: "🤸", swim: "🏊", "go swimming": "🏊",
  boating: "🚣", "go boating": "🚣", cycling: "🚴", "go cycling": "🚴", "ice-skate": "⛸️",
  badminton: "🏸", marathon: "🏃", race: "🏁", camp: "⛺", "went camping": "⛺",
  "went fishing": "🎣", picnic: "🧺",
  sing: "🎤", song: "🎵", dance: "💃", draw: "🎨", paint: "🎨", music: "🎵", art: "🎨",
  piano: "🎹", pipa: "🪕", chess: "♟️", game: "🎮", film: "🎬", video: "🎬",
  TV: "📺", "watch TV": "📺", read: "📖", sleep: "😴",

  // 情绪与健康
  happy: "😄", sad: "😢", angry: "😠", afraid: "😨", worried: "😟", excited: "🤩",
  tired: "😫", bored: "😑", sleepy: "🥱", cry: "😭", ill: "🤒", fever: "🤒",
  cough: "😷", flu: "😷", "runny nose": "🤧", brush: "🪥",

  // 地点、国家、太空与能源
  China: "🇨🇳", UK: "🇬🇧", USA: "🇺🇸", Canada: "🇨🇦", Spain: "🇪🇸", "New Zealand": "🇳🇿",
  Sydney: "🇦🇺", Paris: "🇫🇷", "Eiffel Tower": "🗼", "the Great Wall": "🏯",
  school: "🏫", classroom: "🏫", playground: "🛝", park: "🏞️", hospital: "🏥",
  shop: "🏪", library: "📚", supermarket: "🛒", street: "🛣️", bus: "🚌",
  bridge: "🌉", building: "🏢", village: "🏘️", restaurant: "🍽️", airport: "✈️",
  hotel: "🏨", gym: "🏟️", market: "🏪",
  planet: "🪐", earth: "🌍", moon: "🌙", star: "⭐", space: "🚀", "outer space": "🌌",
  "space station": "🛰️", satellite: "🛰️", alien: "👽", sunrise: "🌅", telescope: "🔭",
  spaceship: "🚀", microscope: "🔬",
  power: "⚡", electricity: "⚡", solar: "☀️", energy: "🔋", shower: "🚿",
  "air conditioner": "❄️", drive: "🚗",
};
