import { WordLexical } from './types';

/**
 * 雅思核心词汇同义替换与词族派生库（Lexical Resource 提分核心）
 * 覆盖全部 10 个雅思学术主题的高频考点词汇
 */
export const IELTS_LEXICAL: Record<string, WordLexical> = {
  "accent": {
    "syn": [
      "pronunciation",
      "intonation",
      "brogue"
    ],
    "note": "带有浓郁地域色彩的口音腔调",
    "fam": [
      {
        "text": "accentuate",
        "pos": "v.",
        "meaning": "强调；加重读音"
      }
    ]
  },
  "accessible": {
    "syn": [
      "approachable",
      "attainable",
      "reachable",
      "barrier-free"
    ],
    "note": "使残障人士出行无阻：wheelchair accessible",
    "fam": [
      {
        "text": "accessibility",
        "pos": "n.",
        "meaning": "无障碍通行度；可及性"
      },
      {
        "text": "access",
        "pos": "n./v.",
        "meaning": "入口；存取"
      }
    ]
  },
  "accolade": {
    "syn": [
      "tribute",
      "honor",
      "award",
      "praise"
    ],
    "note": "在全校毕业典礼上被授予的崇高学术嘉奖赞誉",
    "fam": []
  },
  "accountability": {
    "syn": [
      "responsibility",
      "answerability",
      "liability"
    ],
    "note": "社会治理与伦理核心概念，强调接受公众问责",
    "fam": [
      {
        "text": "accountable",
        "pos": "adj.",
        "meaning": "应承担责任的"
      }
    ]
  },
  "accreditation": {
    "syn": [
      "certification",
      "validation",
      "approval"
    ],
    "note": "官方教育机构颁发的办学认证资质",
    "fam": [
      {
        "text": "accredit",
        "pos": "v.",
        "meaning": "官方认可，委派"
      }
    ]
  },
  "acculturation": {
    "syn": [
      "cultural borrowing",
      "adaptation",
      "cultural exchange"
    ],
    "note": "不同文化群体在长期紧密接触中发生的双向涵化与借用",
    "fam": []
  },
  "acid rain": {
    "syn": [
      "acid precipitation"
    ],
    "note": "二氧化硫遇水蒸气形成的强酸性降水酸雨",
    "fam": []
  },
  "acoustic": {
    "syn": [
      "sound-related",
      "auditory"
    ],
    "note": "声屏障降噪隔音性能测试",
    "fam": [
      {
        "text": "acoustics",
        "pos": "n.",
        "meaning": "声学"
      }
    ]
  },
  "acoustics": {
    "syn": [
      "sound properties",
      "resonance quality"
    ],
    "note": "音乐厅对于声音反射扩散的建筑声学效果",
    "fam": []
  },
  "acquisition": {
    "syn": [
      "takeover",
      "purchase",
      "buyout"
    ],
    "note": "以数百亿美元现金完成对竞争对手的恶意收购",
    "fam": [
      {
        "text": "acquire",
        "pos": "v.",
        "meaning": "收购获取"
      }
    ]
  },
  "acquit": {
    "syn": [
      "conduct oneself",
      "perform",
      "discharge"
    ],
    "note": "在严峻大考面前表现亮眼不负众望 (acquit oneself well)",
    "fam": [
      {
        "text": "acquittal",
        "pos": "n.",
        "meaning": "无罪宣判；履行"
      }
    ]
  },
  "actuary": {
    "syn": [
      "insurance statistician",
      "risk mathematician"
    ],
    "note": "精算师运用概率统计评估保费和死亡风险",
    "fam": [
      {
        "text": "actuarial",
        "pos": "adj.",
        "meaning": "精算的"
      }
    ]
  },
  "actuator": {
    "syn": [
      "drive mechanism",
      "controller"
    ],
    "note": "机器人关节伺服电机驱动执行器",
    "fam": []
  },
  "acute": {
    "syn": [
      "severe",
      "critical",
      "sharp",
      "intense"
    ],
    "note": "指急性发作的病症，或剧烈的疼痛/紧迫危机",
    "fam": [
      {
        "text": "acutely",
        "pos": "adv.",
        "meaning": "极其；剧烈地"
      }
    ]
  },
  "adaptation": {
    "syn": [
      "adjustment",
      "acclimatization",
      "accommodation"
    ],
    "note": "生物对环境的适应；应对气候变化的适应策略",
    "fam": [
      {
        "text": "adapt",
        "pos": "v.",
        "meaning": "适应；改编"
      },
      {
        "text": "adaptable",
        "pos": "adj.",
        "meaning": "能适应的"
      }
    ]
  },
  "additive manufacturing": {
    "syn": [
      "3D printing",
      "layer-by-layer fabrication"
    ],
    "note": "激光烧结金属粉末增材制造3D打印技术",
    "fam": []
  },
  "additives": {
    "syn": [
      "preservatives",
      "enhancers",
      "colorings",
      "supplements"
    ],
    "note": "食品添加剂：food additives",
    "fam": [
      {
        "text": "add",
        "pos": "v.",
        "meaning": "添加"
      },
      {
        "text": "addition",
        "pos": "n.",
        "meaning": "加法；增加物"
      }
    ]
  },
  "admissions": {
    "syn": [
      "acceptance",
      "matriculation",
      "entry"
    ],
    "note": "admissions office 指大学招生录取办公室",
    "fam": [
      {
        "text": "admit",
        "pos": "v.",
        "meaning": "准许入学；承认"
      }
    ]
  },
  "adolescence": {
    "syn": [
      "teenage years",
      "youth",
      "puberty"
    ],
    "note": "身心经历巨变荷尔蒙萌动但心理叛逆的青少年发育青春期",
    "fam": [
      {
        "text": "adolescent",
        "pos": "adj./n.",
        "meaning": "青春期的；青少年"
      }
    ]
  },
  "advocate": {
    "syn": [
      "champion",
      "supporter",
      "proponent",
      "recommend"
    ],
    "note": "作动词表积极倡导，作名词指热心倡导者",
    "fam": [
      {
        "text": "advocacy",
        "pos": "n.",
        "meaning": "拥护倡导行动"
      }
    ]
  },
  "aerobic": {
    "syn": [
      "cardio",
      "oxygen-using",
      "endurance-based"
    ],
    "note": "aerobic exercise（慢跑、游泳等有氧运动）",
    "fam": [
      {
        "text": "aerobics",
        "pos": "n.",
        "meaning": "健美操"
      }
    ]
  },
  "aesthetic": {
    "syn": [
      "artistic",
      "tasteful",
      "visually appealing",
      "refined"
    ],
    "note": "审美趣味与美学价值：aesthetic appeal/pleasure",
    "fam": [
      {
        "text": "aesthetics",
        "pos": "n.",
        "meaning": "美学；审美观"
      },
      {
        "text": "aesthetically",
        "pos": "adv.",
        "meaning": "美学上地"
      }
    ]
  },
  "aestheticism": {
    "syn": [
      "art for art's sake",
      "cult of beauty"
    ],
    "note": "王尔德倡导的‘为艺术而艺术’的唯美主义运动",
    "fam": [
      {
        "text": "aesthetic",
        "pos": "adj.",
        "meaning": "审美的"
      }
    ]
  },
  "affiliate": {
    "syn": [
      "partner",
      "associate",
      "branch",
      "subsidiary"
    ],
    "note": "数字营销中的联盟分佣伙伴：affiliate marketing",
    "fam": [
      {
        "text": "affiliation",
        "pos": "n.",
        "meaning": "归属隶属关系"
      }
    ]
  },
  "affirmative action": {
    "syn": [
      "positive discrimination",
      "equal opportunity policy"
    ],
    "note": "旨在弥补历史上受歧视弱势群体的扶持倾斜政策",
    "fam": []
  },
  "affluent": {
    "syn": [
      "wealthy",
      "prosperous",
      "well-off",
      "opulent"
    ],
    "note": "常用于 an affluent society / affluent neighborhoods",
    "fam": [
      {
        "text": "affluence",
        "pos": "n.",
        "meaning": "富足；繁荣"
      }
    ]
  },
  "affordability": {
    "syn": [
      "cost-effectiveness",
      "accessibility",
      "budget viability"
    ],
    "note": "普通工薪阶层的购买力承受度：housing affordability",
    "fam": [
      {
        "text": "affordable",
        "pos": "adj.",
        "meaning": "买得起的"
      }
    ]
  },
  "aftermath": {
    "syn": [
      "wake",
      "trail",
      "fallout",
      "sequel"
    ],
    "note": "战争或灾难过后的一片狼藉与余波：in the aftermath of the earthquake",
    "fam": []
  },
  "ageing": {
    "syn": [
      "growing older",
      "greying"
    ],
    "note": "银发浪潮席卷而来的全社会重度老龄化问题",
    "fam": [
      {
        "text": "age",
        "pos": "v./n.",
        "meaning": "变老；年龄"
      }
    ]
  },
  "agenda-setting": {
    "syn": [
      "public prioritization",
      "framing issue"
    ],
    "note": "传播学经典假说：媒体影响公众‘想什么’的议程设置功能",
    "fam": []
  },
  "aggregate": {
    "syn": [
      "total",
      "cumulative",
      "combined"
    ],
    "note": "宏观经济学全社会总需求 aggregate demand",
    "fam": [
      {
        "text": "aggregation",
        "pos": "n.",
        "meaning": "聚集总量"
      }
    ]
  },
  "aggression": {
    "syn": [
      "hostility",
      "belligerence",
      "forcefulness",
      "violence"
    ],
    "note": "身体攻击或言语侵犯破坏行为：physical/verbal aggression",
    "fam": [
      {
        "text": "aggressive",
        "pos": "adj.",
        "meaning": "侵略性的；进取的"
      },
      {
        "text": "aggressor",
        "pos": "n.",
        "meaning": "侵略挑衅者"
      }
    ]
  },
  "agility": {
    "syn": [
      "nimbleness",
      "quickness",
      "dexterity",
      "fleetness"
    ],
    "note": "身体动作敏捷敏锐，也指企业快速应对变化的敏捷性",
    "fam": [
      {
        "text": "agile",
        "pos": "adj.",
        "meaning": "敏捷的；灵活的"
      }
    ]
  },
  "agitation": {
    "syn": [
      "restlessness",
      "anxiety",
      "disquiet",
      "turbulence",
      "excitement"
    ],
    "note": "情绪烦躁坐立不安，亦指政治鼓动动乱",
    "fam": [
      {
        "text": "agitate",
        "pos": "v.",
        "meaning": "煽动；使焦虑不安"
      },
      {
        "text": "agitator",
        "pos": "n.",
        "meaning": "煽动者"
      }
    ]
  },
  "agoraphobia": {
    "syn": [
      "fear of open spaces",
      "crowd fear"
    ],
    "note": "害怕广场、商场开阔拥挤公共场所的恐惧症",
    "fam": [
      {
        "text": "agoraphobic",
        "pos": "adj.",
        "meaning": "广场恐惧症的"
      }
    ]
  },
  "albedo": {
    "syn": [
      "reflectivity",
      "reflection coefficient"
    ],
    "note": "冰雪对太阳光的反射率效应",
    "fam": []
  },
  "albeit": {
    "syn": [
      "although",
      "even though",
      "even if"
    ],
    "note": "后接形容词短语的典雅学术连词：a viable, albeit costly, solution",
    "fam": []
  },
  "algorithm": {
    "syn": [
      "procedure",
      "computational logic",
      "rule set"
    ],
    "note": "算法模型底层架构",
    "fam": [
      {
        "text": "algorithmic",
        "pos": "adj.",
        "meaning": "算法的"
      }
    ]
  },
  "alienate": {
    "syn": [
      "estrange",
      "isolate",
      "turn away",
      "distance"
    ],
    "note": "使某人感到疏离孤立：alienate the public",
    "fam": [
      {
        "text": "alienation",
        "pos": "n.",
        "meaning": "疏离感；异化"
      }
    ]
  },
  "alienation": {
    "syn": [
      "estrangement",
      "isolation",
      "disaffection",
      "distance"
    ],
    "note": "社会学经典议题：现代城市人群的孤独疏离感",
    "fam": [
      {
        "text": "alienate",
        "pos": "v.",
        "meaning": "疏远；排斥"
      },
      {
        "text": "alien",
        "pos": "adj./n.",
        "meaning": "外来的；局外人"
      }
    ]
  },
  "alimony": {
    "syn": [
      "spousal support",
      "maintenance",
      "allowance"
    ],
    "note": "法律上离婚后一方支付给配偶的生活赡养费",
    "fam": []
  },
  "all-round": {
    "syn": [
      "versatile",
      "multifaceted",
      "well-rounded"
    ],
    "note": "在学术、体育与社交多个领域全面开花的通才",
    "fam": []
  },
  "allegory": {
    "syn": [
      "parable",
      "metaphor",
      "symbolic tale",
      "analogy"
    ],
    "note": "通过象征隐喻折射现实政治道德的寓言小说（如《动物农庄》）",
    "fam": [
      {
        "text": "allegorical",
        "pos": "adj.",
        "meaning": "讽喻寓意的"
      }
    ]
  },
  "alleviate": {
    "syn": [
      "mitigate",
      "relieve",
      "ease",
      "lessen",
      "soothe"
    ],
    "note": "写作提分核心动词：alleviate poverty/traffic congestion/suffering",
    "fam": [
      {
        "text": "alleviation",
        "pos": "n.",
        "meaning": "减轻；缓和"
      }
    ]
  },
  "allocation": {
    "syn": [
      "distribution",
      "allotment",
      "apportionment",
      "rationing"
    ],
    "note": "稀缺公共资源的科学调配：resource allocation",
    "fam": [
      {
        "text": "allocate",
        "pos": "v.",
        "meaning": "分配；划拨"
      }
    ]
  },
  "altitude": {
    "syn": [
      "elevation",
      "height above sea level"
    ],
    "note": "高寒缺氧的青藏高原超高海拔高度",
    "fam": [
      {
        "text": "altitudinal",
        "pos": "adj.",
        "meaning": "海拔的"
      }
    ]
  },
  "altruism": {
    "syn": [
      "selflessness",
      "benevolence",
      "philanthropy",
      "charity"
    ],
    "note": "无私利他主义，与 egoism（利己主义）相对",
    "fam": [
      {
        "text": "altruistic",
        "pos": "adj.",
        "meaning": "利他的；无私的"
      },
      {
        "text": "altruistically",
        "pos": "adv.",
        "meaning": "无私利他地"
      }
    ]
  },
  "altruist": {
    "syn": [
      "benefactor",
      "philanthropist",
      "good Samaritan"
    ],
    "note": "舍己为人无私奉献的仁爱行善者",
    "fam": [
      {
        "text": "altruism",
        "pos": "n.",
        "meaning": "利他主义"
      }
    ]
  },
  "altruistic": {
    "syn": [
      "unselfish",
      "selfless",
      "charitable",
      "benevolent"
    ],
    "note": "无私利他奉献的：altruistic behavior",
    "fam": [
      {
        "text": "altruism",
        "pos": "n.",
        "meaning": "利他主义"
      }
    ]
  },
  "alumni": {
    "syn": [
      "graduates",
      "former students"
    ],
    "note": "alumni 为复数，单数阳性为 alumnus，单数阴性为 alumna",
    "fam": []
  },
  "amalgamate": {
    "syn": [
      "merge",
      "unite",
      "fuse",
      "blend",
      "consolidate"
    ],
    "note": "将数家小学院合并为一所综合大学：amalgamate multiple departments",
    "fam": [
      {
        "text": "amalgamation",
        "pos": "n.",
        "meaning": "企业合并；融合"
      }
    ]
  },
  "ambiguity": {
    "syn": [
      "vagueness",
      "equivocation",
      "unclearness"
    ],
    "note": "因措辞不严密引发歧义或模棱两可",
    "fam": [
      {
        "text": "ambiguous",
        "pos": "adj.",
        "meaning": "模棱两可的"
      }
    ]
  },
  "ambiguous": {
    "syn": [
      "equivocal",
      "vague",
      "obscure",
      "indeterminate"
    ],
    "note": "语意不清、具有双重含义容易产生误解的：ambiguous phrasing",
    "fam": [
      {
        "text": "ambiguity",
        "pos": "n.",
        "meaning": "歧义；含糊"
      }
    ]
  },
  "ambivert": {
    "syn": [
      "balanced personality",
      "moderated socializer"
    ],
    "note": "介于极度内向与极度外向之间兼具两者的中间平衡性格者",
    "fam": []
  },
  "amenity": {
    "syn": [
      "facility",
      "convenience",
      "service",
      "infrastructure"
    ],
    "note": "居民区周边的公园、超市、健身房等生活便利设施（常用复数 amenities）",
    "fam": []
  },
  "amnesia": {
    "syn": [
      "memory loss",
      "forgetfulness",
      "blackout"
    ],
    "note": "头部受创脑部外伤引发的暂时或永久性健忘症失忆",
    "fam": [
      {
        "text": "amnesiac",
        "pos": "n.",
        "meaning": "失忆症患者"
      }
    ]
  },
  "amortization": {
    "syn": [
      "installment repayment",
      "depreciation",
      "write-off"
    ],
    "note": "分期偿还本息，或无形资产的分期摊销",
    "fam": [
      {
        "text": "amortize",
        "pos": "v.",
        "meaning": "分期偿还"
      }
    ]
  },
  "amplify": {
    "syn": [
      "magnify",
      "boost",
      "intensify",
      "escalate"
    ],
    "note": "放大声音，或在媒体渲染下成倍放大社会焦虑：amplify public panic",
    "fam": [
      {
        "text": "amplifier",
        "pos": "n.",
        "meaning": "放大器"
      },
      {
        "text": "amplification",
        "pos": "n.",
        "meaning": "扩大；放大"
      }
    ]
  },
  "anaerobic": {
    "syn": [
      "oxygen-free",
      "high-intensity",
      "sprint-style"
    ],
    "note": "anaerobic exercise（举重、短跑等无氧剧烈运动）",
    "fam": [
      {
        "text": "aerobic",
        "pos": "adj.",
        "meaning": "有氧的"
      }
    ]
  },
  "analogy": {
    "syn": [
      "comparison",
      "parallel",
      "correspondence"
    ],
    "note": "用熟悉生动的事物打比方的类比推理法",
    "fam": [
      {
        "text": "analogous",
        "pos": "adj.",
        "meaning": "类似的"
      }
    ]
  },
  "anesthesia": {
    "syn": [
      "narcosis",
      "numbness",
      "painlessness"
    ],
    "note": "手术麻醉，分为 general anesthesia（全麻）与 local（局麻）",
    "fam": [
      {
        "text": "anesthetic",
        "pos": "n./adj.",
        "meaning": "麻醉剂；麻醉的"
      },
      {
        "text": "anesthesiologist",
        "pos": "n.",
        "meaning": "麻醉医师"
      }
    ]
  },
  "annuity": {
    "syn": [
      "annual stipend",
      "pension payment",
      "fixed allowance"
    ],
    "note": "按期领取的养老储蓄商业年金保险",
    "fam": []
  },
  "anomaly": {
    "syn": [
      "abnormality",
      "irregularity",
      "outlier"
    ],
    "note": "排除仪器故障后观测到的反常奇异数据点",
    "fam": [
      {
        "text": "anomalous",
        "pos": "adj.",
        "meaning": "异常的"
      }
    ]
  },
  "antagonist": {
    "syn": [
      "adversary",
      "villain",
      "foe",
      "opponent"
    ],
    "note": "与主角对抗的宿敌大反派",
    "fam": [
      {
        "text": "antagonize",
        "pos": "v.",
        "meaning": "挑衅对立"
      },
      {
        "text": "antagonistic",
        "pos": "adj.",
        "meaning": "敌对抵触的"
      }
    ]
  },
  "anthropogenic": {
    "syn": [
      "human-caused",
      "man-made",
      "human-induced"
    ],
    "note": "人类工业活动人为诱发引起的",
    "fam": [
      {
        "text": "anthropology",
        "pos": "n.",
        "meaning": "人类学"
      }
    ]
  },
  "antibiotic": {
    "syn": [
      "antimicrobial",
      "antibacterial drug"
    ],
    "note": "抗生素，如 penicillin（青霉素）",
    "fam": [
      {
        "text": "antibacterial",
        "pos": "adj.",
        "meaning": "抗菌的"
      }
    ]
  },
  "antioxidant": {
    "syn": [
      "free radical scavenger",
      "preservative agent"
    ],
    "note": "健康饮食考点：抗氧化物质可清除体内自由基",
    "fam": [
      {
        "text": "oxidize",
        "pos": "v.",
        "meaning": "氧化"
      },
      {
        "text": "oxidation",
        "pos": "n.",
        "meaning": "氧化反应"
      }
    ]
  },
  "antiquated": {
    "syn": [
      "obsolete",
      "outmoded",
      "archaic",
      "anachronistic"
    ],
    "note": "因年代久远而过时落伍：antiquated ideas/facilities",
    "fam": [
      {
        "text": "antique",
        "pos": "n./adj.",
        "meaning": "古董；古老的"
      }
    ]
  },
  "antiquity": {
    "syn": [
      "ancient times",
      "classical age",
      "vintage"
    ],
    "note": "古希腊古罗马古典文明时期古代，珍贵古董文物",
    "fam": []
  },
  "antithesis": {
    "syn": [
      "direct opposite",
      "reverse",
      "contrast",
      "counterpart"
    ],
    "note": "事物的截然相反的对立面：His lifestyle is the antithesis of luxury.",
    "fam": [
      {
        "text": "antithetical",
        "pos": "adj.",
        "meaning": "正相反对立的"
      }
    ]
  },
  "anxiety": {
    "syn": [
      "apprehension",
      "nervousness",
      "angst",
      "unease",
      "trepidation"
    ],
    "note": "雅思核心高频词：anxiety disorders / performance anxiety",
    "fam": [
      {
        "text": "anxious",
        "pos": "adj.",
        "meaning": "焦虑不安的"
      },
      {
        "text": "anxiously",
        "pos": "adv.",
        "meaning": "焦急地"
      }
    ]
  },
  "apathy": {
    "syn": [
      "indifference",
      "unconcern",
      "passivity",
      "detachment"
    ],
    "note": "对外界事物漠不关心无动于衷：voter/public apathy",
    "fam": [
      {
        "text": "apathetic",
        "pos": "adj.",
        "meaning": "冷漠无情的"
      }
    ]
  },
  "appraisal": {
    "syn": [
      "performance review",
      "evaluation",
      "assessment"
    ],
    "note": "年终员工绩效考评：annual performance appraisal",
    "fam": [
      {
        "text": "appraise",
        "pos": "v.",
        "meaning": "评估鉴定"
      }
    ]
  },
  "appraise": {
    "syn": [
      "evaluate",
      "assess",
      "judge",
      "rate",
      "gauge"
    ],
    "note": "对价值或成果进行客观公正的评价鉴定：critically appraise the results",
    "fam": [
      {
        "text": "appraisal",
        "pos": "n.",
        "meaning": "评估报告"
      }
    ]
  },
  "appreciation": {
    "syn": [
      "value increase",
      "gain in value"
    ],
    "note": "外汇市场上本币汇率强劲升值",
    "fam": [
      {
        "text": "appreciate",
        "pos": "v.",
        "meaning": "升值；感激"
      }
    ]
  },
  "apprenticeship": {
    "syn": [
      "internship",
      "traineeship",
      "mentored training"
    ],
    "note": "跟随师傅学习实操技能的传统学徒制",
    "fam": [
      {
        "text": "apprentice",
        "pos": "n./v.",
        "meaning": "学徒；当学徒"
      }
    ]
  },
  "appropriation": {
    "syn": [
      "borrowing",
      "expropriation",
      "theft",
      "usurpation"
    ],
    "note": "文化争论焦点：cultural appropriation（文化挪用/盗用）",
    "fam": [
      {
        "text": "appropriate",
        "pos": "v.",
        "meaning": "挪用；私吞"
      }
    ]
  },
  "aptitude": {
    "syn": [
      "talent",
      "gift",
      "propensity",
      "flair"
    ],
    "note": "在某一领域展现出的天生才能倾向",
    "fam": [
      {
        "text": "apt",
        "pos": "adj.",
        "meaning": "易于...的；恰当的"
      }
    ]
  },
  "aptitude test": {
    "syn": [
      "ability evaluation",
      "talent screening"
    ],
    "note": "测量考生天生思维逻辑与学习潜能的倾向测验",
    "fam": []
  },
  "arbitrage": {
    "syn": [
      "spread trading",
      "market play"
    ],
    "note": "利用不同交易市场存在细微差价展开的跨国无风险套利交易",
    "fam": [
      {
        "text": "arbitrageur",
        "pos": "n.",
        "meaning": "套利商人"
      }
    ]
  },
  "arbitrary": {
    "syn": [
      "capricious",
      "random",
      "whimsical",
      "unreasonable"
    ],
    "note": "毫无科学依据、全凭个人随性拍脑袋的武断决定：an arbitrary decision",
    "fam": [
      {
        "text": "arbitrarily",
        "pos": "adv.",
        "meaning": "随心所欲地；武断地"
      }
    ]
  },
  "arbitration": {
    "syn": [
      "mediation",
      "conciliation",
      "adjudication",
      "settlement"
    ],
    "note": "诉讼之外由中立第三方进行的争端仲裁",
    "fam": [
      {
        "text": "arbitrate",
        "pos": "v.",
        "meaning": "公断；仲裁"
      },
      {
        "text": "arbitrator",
        "pos": "n.",
        "meaning": "仲裁员"
      }
    ]
  },
  "archaeology": {
    "syn": [
      "antiquarianism",
      "historical digging"
    ],
    "note": "用手铲泥土探索人类古代文明起源的考古学",
    "fam": [
      {
        "text": "archaeological",
        "pos": "adj.",
        "meaning": "考古学的"
      },
      {
        "text": "archaeologist",
        "pos": "n.",
        "meaning": "考古学家"
      }
    ]
  },
  "archipelago": {
    "syn": [
      "island chain",
      "isle cluster"
    ],
    "note": "星罗棋布散落在碧蓝大洋中的千岛之国群岛群岛列岛",
    "fam": []
  },
  "architecture": {
    "syn": [
      "building design",
      "structural style",
      "construction"
    ],
    "note": "",
    "fam": [
      {
        "text": "architect",
        "pos": "n.",
        "meaning": "建筑师"
      },
      {
        "text": "architectural",
        "pos": "adj.",
        "meaning": "建筑风格的"
      }
    ]
  },
  "arid": {
    "syn": [
      "dry",
      "parched",
      "barren",
      "waterless"
    ],
    "note": "干旱贫瘠少雨的气候",
    "fam": [
      {
        "text": "aridity",
        "pos": "n.",
        "meaning": "干旱"
      }
    ]
  },
  "artefact": {
    "syn": [
      "antique",
      "relic",
      "historical object"
    ],
    "note": "博物馆展柜中陈列的珍贵商周青铜器历史文物",
    "fam": []
  },
  "arterial": {
    "syn": [
      "main road",
      "trunk line",
      "central highway"
    ],
    "note": "比喻城市的交通主动脉干道：arterial roads",
    "fam": []
  },
  "articulate": {
    "syn": [
      "express clearly",
      "enunciate",
      "vocalize"
    ],
    "note": "能够极其清晰有条理地阐明复杂思想",
    "fam": [
      {
        "text": "articulation",
        "pos": "n.",
        "meaning": "清晰表达"
      }
    ]
  },
  "artificial intelligence": {
    "syn": [
      "AI",
      "machine intelligence",
      "synthetic cognition"
    ],
    "note": "通用人工智能技术",
    "fam": []
  },
  "ascertain": {
    "syn": [
      "determine",
      "discover",
      "find out",
      "confirm",
      "verify"
    ],
    "note": "通过严谨调查查明事实真相：ascertain the truth behind the data",
    "fam": []
  },
  "assembly": {
    "syn": [
      "gathering",
      "construction",
      "fabrication",
      "manufacture"
    ],
    "note": "制造业常见 assembly line（组装装配流水线）",
    "fam": [
      {
        "text": "assemble",
        "pos": "v.",
        "meaning": "组装；集合"
      },
      {
        "text": "assembler",
        "pos": "n.",
        "meaning": "组装工；汇编器"
      }
    ]
  },
  "assert": {
    "syn": [
      "declare",
      "maintain",
      "insist",
      "proclaim",
      "state"
    ],
    "note": "学术写作中表达坚定立场的核心动词：Critics assert that...",
    "fam": [
      {
        "text": "assertion",
        "pos": "n.",
        "meaning": "断言；主张"
      },
      {
        "text": "assertive",
        "pos": "adj.",
        "meaning": "坚定自信的"
      }
    ]
  },
  "assertiveness": {
    "syn": [
      "confidence",
      "firmness",
      "boldness",
      "decisiveness"
    ],
    "note": "不卑不亢、坚定表达自我权益诉求的自信力，不同于侵略性",
    "fam": [
      {
        "text": "assertive",
        "pos": "adj.",
        "meaning": "坚定自信的"
      },
      {
        "text": "assert",
        "pos": "v.",
        "meaning": "断言；坚称"
      }
    ]
  },
  "assessment": {
    "syn": [
      "evaluation",
      "appraisal",
      "testing"
    ],
    "note": "对学习全过程开展的多维度综合考核评估",
    "fam": [
      {
        "text": "assess",
        "pos": "v.",
        "meaning": "评估"
      }
    ]
  },
  "asset": {
    "syn": [
      "holding",
      "property",
      "resource",
      "valuable possession"
    ],
    "note": "有形或无形财富资产，反义词为 liability（负债）",
    "fam": [
      {
        "text": "assets and liabilities",
        "pos": "n.",
        "meaning": "资产与负债"
      }
    ]
  },
  "assimilation": {
    "syn": [
      "absorption",
      "integration",
      "acculturation",
      "blending"
    ],
    "note": "少数族裔逐步被主流社会完全同化的进程",
    "fam": [
      {
        "text": "assimilate",
        "pos": "v.",
        "meaning": "同化；吸收理解"
      }
    ]
  },
  "asteroid": {
    "syn": [
      "planetoid",
      "minor planet",
      "space rock"
    ],
    "note": "",
    "fam": [
      {
        "text": "asteroidal",
        "pos": "adj.",
        "meaning": "小行星的"
      }
    ]
  },
  "asymptomatic": {
    "syn": [
      "showing no signs",
      "silent carrier"
    ],
    "note": "自身毫无任何不适的隐形无症状感染者",
    "fam": []
  },
  "atmosphere": {
    "syn": [
      "air",
      "aerosphere",
      "ambience"
    ],
    "note": "地球大气层；亦可比喻气氛",
    "fam": [
      {
        "text": "atmospheric",
        "pos": "adj.",
        "meaning": "大气的"
      }
    ]
  },
  "atrium": {
    "syn": [
      "courtyard",
      "central hall",
      "light well"
    ],
    "note": "商场或酒店通顶的开阔玻璃采光大中庭",
    "fam": []
  },
  "attrition": {
    "syn": [
      "erosion",
      "wearing down",
      "staff turnover"
    ],
    "note": "员工退休或跳槽造成的自然减员：attrition rate",
    "fam": [
      {
        "text": "attritional",
        "pos": "adj.",
        "meaning": "消耗性的"
      }
    ]
  },
  "auditory": {
    "syn": [
      "aural",
      "acoustic",
      "hearing-related"
    ],
    "note": "偏向通过倾听讲解来获取知识的听觉型风格",
    "fam": [
      {
        "text": "audio",
        "pos": "n.",
        "meaning": "音频"
      }
    ]
  },
  "augmented reality": {
    "syn": [
      "AR",
      "mixed reality"
    ],
    "note": "虚实叠加增强现实技术",
    "fam": []
  },
  "authentication": {
    "syn": [
      "verification",
      "identity proof"
    ],
    "note": "双重因子登录动态令牌身份认证鉴权",
    "fam": [
      {
        "text": "authenticate",
        "pos": "v.",
        "meaning": "认证"
      }
    ]
  },
  "authenticity": {
    "syn": [
      "genuineness",
      "originality",
      "legitimacy"
    ],
    "note": "经国家权威鉴定专家出具公证书确认真伪的无可辩驳真迹真品真实性",
    "fam": [
      {
        "text": "authentic",
        "pos": "adj.",
        "meaning": "真实正宗的"
      },
      {
        "text": "authenticate",
        "pos": "v.",
        "meaning": "鉴定真伪"
      }
    ]
  },
  "automation": {
    "syn": [
      "robotization",
      "mechanization"
    ],
    "note": "工业与服务流程自动化",
    "fam": [
      {
        "text": "automate",
        "pos": "v.",
        "meaning": "使自动化"
      },
      {
        "text": "automatic",
        "pos": "adj.",
        "meaning": "自动的"
      }
    ]
  },
  "autonomous": {
    "syn": [
      "self-driving",
      "unmanned",
      "independent"
    ],
    "note": "无人驾驶自主导航车辆",
    "fam": [
      {
        "text": "autonomy",
        "pos": "n.",
        "meaning": "自主权，自主性"
      }
    ]
  },
  "avalanche": {
    "syn": [
      "snowslide",
      "snowslip"
    ],
    "note": "轰隆作响呼啸而下的特大积雪雪崩",
    "fam": []
  },
  "avant-garde": {
    "syn": [
      "experimental",
      "cutting-edge",
      "innovative",
      "radical"
    ],
    "note": "打破常规的前卫先锋艺术流派：avant-garde cinema/art",
    "fam": []
  },
  "backdoor": {
    "syn": [
      "trapdoor",
      "hidden access",
      "covert portal"
    ],
    "note": "安全领域指绕过认证机制的秘密访问通道",
    "fam": [
      {
        "text": "door",
        "pos": "n.",
        "meaning": "门；途径"
      }
    ]
  },
  "bandwidth": {
    "syn": [
      "data throughput",
      "channel capacity"
    ],
    "note": "超高速万兆光纤互联网传输网络物理带宽",
    "fam": []
  },
  "bankruptcy": {
    "syn": [
      "insolvency",
      "financial collapse",
      "ruin"
    ],
    "note": "无法偿还到期债务依法向法院申请破产清算",
    "fam": [
      {
        "text": "bankrupt",
        "pos": "adj./v.",
        "meaning": "破产的；使破产"
      }
    ]
  },
  "barren": {
    "syn": [
      "sterile",
      "arid",
      "infertile",
      "bleak"
    ],
    "note": "长年干旱寸草不生的贫瘠荒凉荒原",
    "fam": []
  },
  "bear market": {
    "syn": [
      "slump",
      "downturn",
      "recessionary market"
    ],
    "note": "持续低迷阴跌的熊市，与 bull market 相对",
    "fam": []
  },
  "benchmark": {
    "syn": [
      "reference point",
      "yardstick",
      "standard"
    ],
    "note": "作为横向对比对照试验的性能基准标杆",
    "fam": []
  },
  "benchmarking": {
    "syn": [
      "standard-setting",
      "comparative assessment",
      "metric tracking"
    ],
    "note": "对标行业标杆领头羊以寻找差距和改进方向",
    "fam": [
      {
        "text": "benchmark",
        "pos": "n./v.",
        "meaning": "基准；对标"
      }
    ]
  },
  "benign": {
    "syn": [
      "harmless",
      "non-cancerous",
      "gentle",
      "mild"
    ],
    "note": "良性肿瘤：benign tumor，反义词为 malignant（恶性的）",
    "fam": [
      {
        "text": "benignly",
        "pos": "adv.",
        "meaning": "良性地；温和地"
      }
    ]
  },
  "bias": {
    "syn": [
      "prejudice",
      "partiality",
      "favoritism",
      "slant"
    ],
    "note": "无意识偏见：unconscious/systemic bias",
    "fam": [
      {
        "text": "biased",
        "pos": "adj.",
        "meaning": "带有偏见的"
      }
    ]
  },
  "bibliography": {
    "syn": [
      "reference list",
      "works cited",
      "source index"
    ],
    "note": "论文篇末附列的完整参考文献书目",
    "fam": []
  },
  "big data": {
    "syn": [
      "massive datasets",
      "data analytics"
    ],
    "note": "海量高维非结构化海量大数据",
    "fam": []
  },
  "bilateral": {
    "syn": [
      "two-sided",
      "mutual",
      "joint"
    ],
    "note": "两国间的双边条约或贸易协定：bilateral trade agreement",
    "fam": [
      {
        "text": "multilateral",
        "pos": "adj.",
        "meaning": "多边的"
      }
    ]
  },
  "bilingualism": {
    "syn": [
      "dual-language ability",
      "multilingualism"
    ],
    "note": "双语生活环境对儿童大脑执行功能可塑性的促进",
    "fam": [
      {
        "text": "bilingual",
        "pos": "adj./n.",
        "meaning": "双语的；双语者"
      }
    ]
  },
  "billboard": {
    "syn": [
      "hoarding",
      "outdoor banner",
      "signboard"
    ],
    "note": "高速公路或繁华商业区巨型广告招牌",
    "fam": []
  },
  "binge": {
    "syn": [
      "overindulge",
      "splurge",
      "gorge",
      "spree"
    ],
    "note": "常见短语：binge eating（暴饮暴食）、binge-watching（刷剧）",
    "fam": [
      {
        "text": "binging",
        "pos": "n.",
        "meaning": "大吃大喝纵容"
      }
    ]
  },
  "biodegradable": {
    "syn": [
      "compostable",
      "decomposable"
    ],
    "note": "在自然土壤中三个月内完全降解的环保材料",
    "fam": [
      {
        "text": "biodegradation",
        "pos": "n.",
        "meaning": "生物降解"
      }
    ]
  },
  "biodiversity": {
    "syn": [
      "biological variety",
      "species richness"
    ],
    "note": "野生动植物基因与物种多样性",
    "fam": [
      {
        "text": "diverse",
        "pos": "adj.",
        "meaning": "多元的"
      },
      {
        "text": "diversify",
        "pos": "v.",
        "meaning": "使多样化"
      }
    ]
  },
  "bioethics": {
    "syn": [
      "medical ethics",
      "moral guidelines in biology"
    ],
    "note": "基因编辑红线严守的生命伦理学",
    "fam": [
      {
        "text": "ethical",
        "pos": "adj.",
        "meaning": "合乎伦理的"
      }
    ]
  },
  "biofuel": {
    "syn": [
      "biomass fuel",
      "ethanol"
    ],
    "note": "以农作物秸秆提炼的生物质液体燃料",
    "fam": []
  },
  "biometric": {
    "syn": [
      "biological-identification",
      "biodata-based"
    ],
    "note": "常见搭配：biometric identification/verification（指纹/人脸识别）",
    "fam": [
      {
        "text": "biometrics",
        "pos": "n.",
        "meaning": "生物识别技术"
      }
    ]
  },
  "biometrics": {
    "syn": [
      "biological identification",
      "face/iris scan"
    ],
    "note": "刷脸指纹虹膜生物特征活体识别",
    "fam": [
      {
        "text": "biometric",
        "pos": "adj.",
        "meaning": "生物识别的"
      }
    ]
  },
  "biosphere": {
    "syn": [
      "ecosphere",
      "living world"
    ],
    "note": "地球表面所有生物赖以生存的生物圈",
    "fam": []
  },
  "bipolar": {
    "syn": [
      "manic-depressive",
      "dual-state"
    ],
    "note": "躁狂与抑郁交替出现的双相情感障碍：bipolar disorder",
    "fam": []
  },
  "blight": {
    "syn": [
      "decay",
      "degradation",
      "eyesore",
      "slum condition"
    ],
    "note": "urban blight 专指城市中心由于工厂搬迁衰败出现的街区破烂萧条",
    "fam": [
      {
        "text": "blighted",
        "pos": "adj.",
        "meaning": "荒芜衰败的"
      }
    ]
  },
  "blockchain": {
    "syn": [
      "distributed ledger"
    ],
    "note": "不可篡改分布式加密区块链账本",
    "fam": []
  },
  "blue-chip": {
    "syn": [
      "first-rate",
      "reputable",
      "large-cap",
      "high-grade"
    ],
    "note": "业绩稳健、信誉卓著的老牌蓝筹股或龙头企业",
    "fam": []
  },
  "blueprint": {
    "syn": [
      "architectural plan",
      "schematic",
      "masterplan",
      "design"
    ],
    "note": "建筑施工蓝图；引申为宏伟长远的施政规划纲要",
    "fam": []
  },
  "bond": {
    "syn": [
      "debenture",
      "security",
      "promissory note",
      "covenant"
    ],
    "note": "固定收益债券，如 government/corporate bonds",
    "fam": [
      {
        "text": "bonded",
        "pos": "adj.",
        "meaning": "关税保税的；绑定的"
      }
    ]
  },
  "botnet": {
    "syn": [
      "zombie network",
      "robot network"
    ],
    "note": "由 robot 和 network 组合而成，受黑客操控的受感染电脑网络",
    "fam": [
      {
        "text": "bot",
        "pos": "n.",
        "meaning": "网络机器人；自动化程序"
      }
    ]
  },
  "bottleneck": {
    "syn": [
      "constraint",
      "chokepoint",
      "impediment",
      "obstacle"
    ],
    "note": "隐喻制约生产或交通流量最狭窄的关键环节",
    "fam": [
      {
        "text": "bottle",
        "pos": "n.",
        "meaning": "瓶子"
      }
    ]
  },
  "boycott": {
    "syn": [
      "embargo",
      "spurn",
      "shun",
      "ban"
    ],
    "note": "出于良知对无良企业的联合抵制：boycott unethical products",
    "fam": [
      {
        "text": "boycotter",
        "pos": "n.",
        "meaning": "抵制者"
      }
    ]
  },
  "braille": {
    "syn": [
      "embossed printing",
      "tactile writing"
    ],
    "note": "为视障盲人设计的凸点触觉文字系统",
    "fam": []
  },
  "branding": {
    "syn": [
      "marketing",
      "image-building",
      "positioning"
    ],
    "note": "企业独特的品牌形象塑造与价值提炼",
    "fam": [
      {
        "text": "brand",
        "pos": "n./v.",
        "meaning": "品牌；打烙印"
      }
    ]
  },
  "breach": {
    "syn": [
      "violation",
      "infringement",
      "rupture",
      "break"
    ],
    "note": "常用于 a security breach（安全漏洞）、data breach（数据泄露）",
    "fam": [
      {
        "text": "unbreached",
        "pos": "adj.",
        "meaning": "未被突破破坏的"
      }
    ]
  },
  "breadwinner": {
    "syn": [
      "primary earner",
      "sole provider",
      "wage earner"
    ],
    "note": "家中承担主要经济来源的顶梁柱",
    "fam": []
  },
  "breakthrough": {
    "syn": [
      "quantum leap",
      "major milestone",
      "discovery"
    ],
    "note": "攻关颠覆性的重大前沿科学突破",
    "fam": []
  },
  "broadband": {
    "syn": [
      "high-speed internet",
      "fiber optic"
    ],
    "note": "千兆入户高速宽带互联网接入",
    "fam": []
  },
  "broadcasting": {
    "syn": [
      "transmission",
      "telecasting",
      "streaming",
      "airing"
    ],
    "note": "无线电与电视广播传媒：public broadcasting",
    "fam": [
      {
        "text": "broadcast",
        "pos": "v./n.",
        "meaning": "广播；播送"
      }
    ]
  },
  "bull market": {
    "syn": [
      "rising market",
      "boom market",
      "rally"
    ],
    "note": "行情持续昂扬上涨的牛市，与 bear market 相对",
    "fam": []
  },
  "bureaucracy": {
    "syn": [
      "red tape",
      "officialdom",
      "administrative hierarchy"
    ],
    "note": "官僚主义繁文缛节，往往带有负面冗长低效色彩",
    "fam": [
      {
        "text": "bureaucratic",
        "pos": "adj.",
        "meaning": "官僚作风的"
      },
      {
        "text": "bureaucrat",
        "pos": "n.",
        "meaning": "官僚政客"
      }
    ]
  },
  "burnout": {
    "syn": [
      "exhaustion",
      "fatigue",
      "nervous breakdown"
    ],
    "note": "现代快节奏职场中高发的职业倦怠耗竭综合征",
    "fam": [
      {
        "text": "burn out",
        "pos": "v.",
        "meaning": "烧毁；耗尽精力"
      }
    ]
  },
  "byline": {
    "syn": [
      "author credit",
      "signature line"
    ],
    "note": "刊登在新闻报道正文开头表明记者姓名的署名行",
    "fam": []
  },
  "byproduct": {
    "syn": [
      "side product",
      "secondary result"
    ],
    "note": "化学工业裂解合成过程中伴生的副产物",
    "fam": []
  },
  "bystander effect": {
    "syn": [
      "diffusion of responsibility",
      "passerby inaction"
    ],
    "note": "社会心理学名词：现场围观者越多反而没人伸出援手的旁观者冷漠效应",
    "fam": []
  },
  "cacophony": {
    "syn": [
      "din",
      "racket",
      "discord",
      "harsh noise"
    ],
    "note": "杂乱刺耳令人烦躁的嘈杂巨响，与 harmony（和谐之音）相对",
    "fam": [
      {
        "text": "cacophonous",
        "pos": "adj.",
        "meaning": "刺耳喧嚣的"
      }
    ]
  },
  "caffeine": {
    "syn": [
      "stimulant substance",
      "coffee extract"
    ],
    "note": "",
    "fam": [
      {
        "text": "decaffeinated",
        "pos": "adj.",
        "meaning": "脱去咖啡因的"
      }
    ]
  },
  "calamity": {
    "syn": [
      "catastrophe",
      "tragedy",
      "misfortune"
    ],
    "note": "突发重大灾难灾祸",
    "fam": [
      {
        "text": "calamitous",
        "pos": "adj.",
        "meaning": "灾难性的"
      }
    ]
  },
  "calcium": {
    "syn": [
      "bone mineral",
      "chemical element Ca"
    ],
    "note": "骨骼发育核心矿物质：calcium absorption",
    "fam": [
      {
        "text": "calcify",
        "pos": "v.",
        "meaning": "钙化；骨化"
      }
    ]
  },
  "calibration": {
    "syn": [
      "adjustment",
      "fine-tuning",
      "standardization",
      "alignment"
    ],
    "note": "精密仪器的校准与调试",
    "fam": [
      {
        "text": "calibrate",
        "pos": "v.",
        "meaning": "校准；标定"
      },
      {
        "text": "calibrated",
        "pos": "adj.",
        "meaning": "经过校准的"
      }
    ]
  },
  "calligraphy": {
    "syn": [
      "penmanship",
      "brushwork"
    ],
    "note": "王羲之兰亭集序展现出的笔走龙蛇力透纸背的中华绝美书法艺术",
    "fam": [
      {
        "text": "calligrapher",
        "pos": "n.",
        "meaning": "书法家"
      }
    ]
  },
  "calorie": {
    "syn": [
      "energy unit",
      "joule equivalent"
    ],
    "note": "减肥写作常见 calorie intake（热量摄入）",
    "fam": [
      {
        "text": "caloric",
        "pos": "adj.",
        "meaning": "热量的；卡路里的"
      }
    ]
  },
  "campaign": {
    "syn": [
      "drive",
      "operation",
      "promotion",
      "crusade"
    ],
    "note": "大规模广告营销或公益宣传战役：advertising campaign",
    "fam": [
      {
        "text": "campaigner",
        "pos": "n.",
        "meaning": "活动发起者"
      }
    ]
  },
  "campus": {
    "syn": [
      "grounds",
      "university site",
      "precinct"
    ],
    "note": "",
    "fam": []
  },
  "canopy": {
    "syn": [
      "treetop layer",
      "overhang"
    ],
    "note": "热带雨林郁郁葱葱的林冠树冠层",
    "fam": []
  },
  "cantilever": {
    "syn": [
      "bracket",
      "overhang",
      "projection beam"
    ],
    "note": "现代建筑大师常用的悬挑大挑臂结构",
    "fam": []
  },
  "capital gain": {
    "syn": [
      "investment profit",
      "asset appreciation"
    ],
    "note": "低买高卖股票房产所获得的资本利得增值收益",
    "fam": []
  },
  "capsule": {
    "syn": [
      "module",
      "pod",
      "container"
    ],
    "note": "航天中指太空返回舱/救生舱；医药中指胶囊",
    "fam": [
      {
        "text": "encapsulate",
        "pos": "v.",
        "meaning": "概括；装入胶囊"
      }
    ]
  },
  "captivity": {
    "syn": [
      "confinement",
      "imprisonment"
    ],
    "note": "在动物园人工繁育圈养环境中",
    "fam": [
      {
        "text": "captive",
        "pos": "adj./n.",
        "meaning": "被俘的；猎物"
      }
    ]
  },
  "car-free": {
    "syn": [
      "pedestrian-only",
      "vehicle-restricted"
    ],
    "note": "禁止私家车通行的全步行街区：car-free zones",
    "fam": []
  },
  "carbohydrate": {
    "syn": [
      "carb",
      "sugar",
      "starch"
    ],
    "note": "常考搭配：complex carbohydrates（复合碳水）",
    "fam": [
      {
        "text": "hydrate",
        "pos": "v./n.",
        "meaning": "水合；水合物"
      }
    ]
  },
  "carbon footprint": {
    "syn": [
      "environmental impact",
      "carbon total"
    ],
    "note": "日常活动所产生的温室气体碳排放总量",
    "fam": []
  },
  "carcinogen": {
    "syn": [
      "cancer-causing agent",
      "toxin"
    ],
    "note": "世界卫生组织明确定为一类致癌物的化学物质",
    "fam": [
      {
        "text": "carcinogenic",
        "pos": "adj.",
        "meaning": "致癌的"
      }
    ]
  },
  "cardiovascular": {
    "syn": [
      "heart-and-vessel",
      "cardiac"
    ],
    "note": "cardiovascular disease/health（心血管健康）",
    "fam": [
      {
        "text": "cardiac",
        "pos": "adj.",
        "meaning": "心脏的"
      },
      {
        "text": "vascular",
        "pos": "adj.",
        "meaning": "血管的"
      }
    ]
  },
  "caregiver": {
    "syn": [
      "carer",
      "guardian",
      "attendant",
      "nurse"
    ],
    "note": "亦作 carer，照料失能老人或病患的护理者",
    "fam": [
      {
        "text": "caregiving",
        "pos": "n.",
        "meaning": "看护护理工作"
      }
    ]
  },
  "carnivore": {
    "syn": [
      "meat-eater",
      "predator"
    ],
    "note": "大型猫科肉食动物",
    "fam": [
      {
        "text": "carnivorous",
        "pos": "adj.",
        "meaning": "肉食性的"
      }
    ]
  },
  "cartilage": {
    "syn": [
      "gristle",
      "articular tissue"
    ],
    "note": "关节处起到缓冲减震作用的软骨",
    "fam": [
      {
        "text": "cartilaginous",
        "pos": "adj.",
        "meaning": "软骨构成的"
      }
    ]
  },
  "cash flow": {
    "syn": [
      "liquidity flow",
      "financial circulation"
    ],
    "note": "企业的生命线：positive/negative cash flow（正/负现金流）",
    "fam": []
  },
  "casualty": {
    "syn": [
      "fatality",
      "victim",
      "injured"
    ],
    "note": "争分夺秒抢救生命最大限度压减灾害伤亡人数",
    "fam": []
  },
  "catalyst": {
    "syn": [
      "accelerator",
      "stimulus",
      "spark"
    ],
    "note": "扮演推动产业腾飞的关键催化剂与加速器",
    "fam": []
  },
  "catastrophe": {
    "syn": [
      "disaster",
      "calamity",
      "cataclysm"
    ],
    "note": "毁灭性灾难浩劫",
    "fam": [
      {
        "text": "catastrophic",
        "pos": "adj.",
        "meaning": "灾难性的"
      }
    ]
  },
  "catharsis": {
    "syn": [
      "emotional release",
      "purging",
      "purification",
      "relief"
    ],
    "note": "亚里士多德悲剧美学：观众在体验悲情后的精神净化宣泄",
    "fam": [
      {
        "text": "cathartic",
        "pos": "adj.",
        "meaning": "有宣泄舒缓作用的"
      }
    ]
  },
  "cathartic": {
    "syn": [
      "releasing",
      "purifying",
      "cleansing",
      "therapeutic"
    ],
    "note": "把内心积压很久的委屈哭出来后的舒畅释怀感：a cathartic experience",
    "fam": [
      {
        "text": "catharsis",
        "pos": "n.",
        "meaning": "宣泄；心灵净化"
      }
    ]
  },
  "causation": {
    "syn": [
      "causality",
      "cause-and-effect"
    ],
    "note": "严密的物理世界因果驱动机制",
    "fam": [
      {
        "text": "causal",
        "pos": "adj.",
        "meaning": "因果关系的"
      }
    ]
  },
  "celestial": {
    "syn": [
      "astronomical",
      "heavenly",
      "extraterrestrial",
      "stellar"
    ],
    "note": "常用于 celestial bodies（天体，如恒星、行星）",
    "fam": [
      {
        "text": "celestially",
        "pos": "adv.",
        "meaning": "如天体般地"
      }
    ]
  },
  "censorship": {
    "syn": [
      "suppression",
      "blackout",
      "control",
      "restriction"
    ],
    "note": "政府或机构对言论出版物的新闻审查制度",
    "fam": [
      {
        "text": "censor",
        "pos": "v./n.",
        "meaning": "审查；审查员"
      }
    ]
  },
  "census": {
    "syn": [
      "population count",
      "headcount",
      "survey"
    ],
    "note": "国家统计局每十年开展一次的全国人口普查入户调查",
    "fam": []
  },
  "centenarian": {
    "syn": [
      "100-year-old",
      "supercentenarian"
    ],
    "note": "身体硬朗耳聪目明的百岁寿星老人",
    "fam": []
  },
  "charisma": {
    "syn": [
      "magnetism",
      "charm",
      "allure",
      "prescence"
    ],
    "note": "领袖身上天然散发的非凡感召力与个人魅力",
    "fam": [
      {
        "text": "charismatic",
        "pos": "adj.",
        "meaning": "充满个人魅力的"
      }
    ]
  },
  "chauvinism": {
    "syn": [
      "jingoism",
      "fanaticism",
      "blind patriotism",
      "bigotry"
    ],
    "note": "沙文主义，盲目狂热排他的极端民族自负",
    "fam": [
      {
        "text": "chauvinist",
        "pos": "n.",
        "meaning": "沙文主义者"
      },
      {
        "text": "chauvinistic",
        "pos": "adj.",
        "meaning": "沙文主义的"
      }
    ]
  },
  "chemotherapy": {
    "syn": [
      "chemo",
      "antineoplastic therapy"
    ],
    "note": "针对癌症的化疗，口语简称 chemo",
    "fam": [
      {
        "text": "chemical",
        "pos": "adj./n.",
        "meaning": "化学的；化学品"
      }
    ]
  },
  "cholesterol": {
    "syn": [
      "blood lipid",
      "sterol"
    ],
    "note": "胆固醇分为 HDL（高密度良性）和 LDL（低密度有害）",
    "fam": [
      {
        "text": "lipid",
        "pos": "n.",
        "meaning": "脂质"
      }
    ]
  },
  "choreography": {
    "syn": [
      "dance design",
      "movement staging"
    ],
    "note": "芭蕾舞剧或歌舞剧的舞台舞蹈动作编排艺术",
    "fam": [
      {
        "text": "choreographer",
        "pos": "n.",
        "meaning": "编舞导演"
      }
    ]
  },
  "chronic": {
    "syn": [
      "persistent",
      "long-standing",
      "incurable",
      "long-term"
    ],
    "note": "与 acute（急性的）相对，指慢性持久的，如 chronic diseases",
    "fam": [
      {
        "text": "chronically",
        "pos": "adv.",
        "meaning": "长期慢性地"
      }
    ]
  },
  "chronicle": {
    "syn": [
      "historical record",
      "annals",
      "archive"
    ],
    "note": "二十四史等客观忠实记录历代帝王将相兴衰治乱的历史编年史史册",
    "fam": [
      {
        "text": "chronological",
        "pos": "adj.",
        "meaning": "按时间顺序的"
      }
    ]
  },
  "churn": {
    "syn": [
      "turnover rate",
      "customer attrition",
      "loss rate"
    ],
    "note": "互联网订阅制服务常见指标：churn rate（用户流失率）",
    "fam": [
      {
        "text": "churn out",
        "pos": "v.",
        "meaning": "粗制滥造大批产出"
      }
    ]
  },
  "circadian": {
    "syn": [
      "daily-rhythm",
      "twenty-four-hour cycle"
    ],
    "note": "常考搭配 circadian rhythm（昼夜生物钟节律）",
    "fam": [
      {
        "text": "rhythm",
        "pos": "n.",
        "meaning": "节奏；韵律"
      }
    ]
  },
  "circular economy": {
    "syn": [
      "closed-loop economy",
      "sustainable model"
    ],
    "note": "吃干榨净减量化的闭环循环经济模式",
    "fam": []
  },
  "circulate": {
    "syn": [
      "distribute",
      "disseminate",
      "spread",
      "diffuse"
    ],
    "note": "报刊发行传阅，或流言在民间流传",
    "fam": [
      {
        "text": "circulation",
        "pos": "n.",
        "meaning": "发行量；循环"
      },
      {
        "text": "circular",
        "pos": "adj./n.",
        "meaning": "循环的；传单"
      }
    ]
  },
  "citation": {
    "syn": [
      "reference",
      "attribution",
      "source credit"
    ],
    "note": "学术论文引文格式出处标注",
    "fam": [
      {
        "text": "cite",
        "pos": "v.",
        "meaning": "引用，引述"
      }
    ]
  },
  "citizen journalism": {
    "syn": [
      "participatory journalism",
      "crowdsourced reporting"
    ],
    "note": "普通公众利用智能手机拍摄并在自媒体发布的公民新闻",
    "fam": []
  },
  "civic": {
    "syn": [
      "municipal",
      "public",
      "communal",
      "citizen-related"
    ],
    "note": "公民责任与公共义务：civic duty/engagement",
    "fam": [
      {
        "text": "civil",
        "pos": "adj.",
        "meaning": "公民的；民事的"
      }
    ]
  },
  "claustrophobia": {
    "syn": [
      "fear of tight spaces",
      "confinement dread"
    ],
    "note": "电梯或逼仄密闭空间引起的幽闭恐惧症",
    "fam": [
      {
        "text": "claustrophobic",
        "pos": "adj.",
        "meaning": "幽闭恐惧的；逼仄局促的"
      }
    ]
  },
  "cliché": {
    "syn": [
      "platitude",
      "banality",
      "truism",
      "hackneyed phrase"
    ],
    "note": "缺乏创意的陈词滥调、毫无新意的俗套情节",
    "fam": []
  },
  "clickbait": {
    "syn": [
      "teaser headline",
      "sensational link",
      "link bait"
    ],
    "note": "靠虚假浮夸标题诱骗网民点击以骗取流量的‘标题党’",
    "fam": []
  },
  "climate": {
    "syn": [
      "weather pattern",
      "atmospheric conditions"
    ],
    "note": "climate change 气候变化；climate summit 气候峰会",
    "fam": [
      {
        "text": "climatic",
        "pos": "adj.",
        "meaning": "气候的"
      }
    ]
  },
  "clinical trial": {
    "syn": [
      "medical experiment",
      "human testing",
      "clinical study"
    ],
    "note": "新药上市前的人体临床验证试验",
    "fam": [
      {
        "text": "clinic",
        "pos": "n.",
        "meaning": "诊所"
      }
    ]
  },
  "cloning": {
    "syn": [
      "replication",
      "asexual duplication"
    ],
    "note": "体细胞核移植非受精胚胎生物克隆复制",
    "fam": [
      {
        "text": "clone",
        "pos": "n./v.",
        "meaning": "克隆"
      }
    ]
  },
  "cloud computing": {
    "syn": [
      "distributed computing",
      "cloud storage"
    ],
    "note": "弹性分布式云计算算力",
    "fam": []
  },
  "coalition": {
    "syn": [
      "alliance",
      "union",
      "partnership",
      "bloc"
    ],
    "note": "多党联合组建的联合政府：coalition government",
    "fam": [
      {
        "text": "coalesce",
        "pos": "v.",
        "meaning": "联合；合并"
      }
    ]
  },
  "coercion": {
    "syn": [
      "duress",
      "force",
      "intimidation",
      "compulsion"
    ],
    "note": "武力威胁或职场霸凌强迫屈从：act under coercion",
    "fam": [
      {
        "text": "coerce",
        "pos": "v.",
        "meaning": "强迫；胁迫"
      },
      {
        "text": "coercive",
        "pos": "adj.",
        "meaning": "强制胁迫性的"
      }
    ]
  },
  "cognition": {
    "syn": [
      "perception",
      "comprehension",
      "intellect",
      "reasoning"
    ],
    "note": "认知科学核心词：cognitive abilities / cognitive development",
    "fam": [
      {
        "text": "cognitive",
        "pos": "adj.",
        "meaning": "认知的"
      },
      {
        "text": "cognitively",
        "pos": "adv.",
        "meaning": "认知上地"
      }
    ]
  },
  "cognitive": {
    "syn": [
      "intellectual",
      "mental",
      "perceptual"
    ],
    "note": "大脑对信息的接收、加工编码与逻辑认知机能",
    "fam": [
      {
        "text": "cognition",
        "pos": "n.",
        "meaning": "认知能力"
      }
    ]
  },
  "cognitive overload": {
    "syn": [
      "information fatigue",
      "mental exhaustion"
    ],
    "note": "短时间信息涌入过多超过大脑处理带宽的认知超载",
    "fam": []
  },
  "coherence": {
    "syn": [
      "logic flow",
      "consistency",
      "clarity"
    ],
    "note": "雅思写作评分四要素之一：篇章逻辑语义通顺度",
    "fam": [
      {
        "text": "coherent",
        "pos": "adj.",
        "meaning": "连贯的"
      }
    ]
  },
  "coherent": {
    "syn": [
      "logical",
      "consistent",
      "lucid",
      "articulate"
    ],
    "note": "雅思评分标准 Coherence & Cohesion 核心：逻辑通顺连贯紧凑的论证",
    "fam": [
      {
        "text": "coherence",
        "pos": "n.",
        "meaning": "连贯性；条理性"
      }
    ]
  },
  "cohesion": {
    "syn": [
      "linking",
      "textual connectivity"
    ],
    "note": "雅思写作评分四要素之一：连接词与代词粘连度",
    "fam": [
      {
        "text": "cohesive",
        "pos": "adj.",
        "meaning": "凝聚的"
      }
    ]
  },
  "cohesive": {
    "syn": [
      "unified",
      "connected",
      "interlinked",
      "solid"
    ],
    "note": "段落之间紧密咬合有凝聚力的衔接：a cohesive argument/society",
    "fam": [
      {
        "text": "cohesion",
        "pos": "n.",
        "meaning": "凝聚力；衔接"
      }
    ]
  },
  "collaborative": {
    "syn": [
      "cooperative",
      "joint",
      "team-based"
    ],
    "note": "协作式小组探究学习",
    "fam": [
      {
        "text": "collaborate",
        "pos": "v.",
        "meaning": "合作"
      },
      {
        "text": "collaboration",
        "pos": "n.",
        "meaning": "协同合作"
      }
    ]
  },
  "collateral": {
    "syn": [
      "security",
      "pledge",
      "guarantee asset"
    ],
    "note": "向银行贷款时质押的担保物：put up collateral for a loan",
    "fam": []
  },
  "collocation": {
    "syn": [
      "word combination",
      "natural pairing"
    ],
    "note": "母语者世代相传、自然固化的词汇固定搭配",
    "fam": [
      {
        "text": "collocate",
        "pos": "v.",
        "meaning": "搭配"
      }
    ]
  },
  "colloquium": {
    "syn": [
      "seminar",
      "academic meeting",
      "symposium"
    ],
    "note": "高层次学术讨论会",
    "fam": []
  },
  "combustion": {
    "syn": [
      "burning",
      "ignition",
      "oxidation"
    ],
    "note": "内燃机缸内汽油不完全燃烧",
    "fam": [
      {
        "text": "combustible",
        "pos": "adj.",
        "meaning": "易燃的"
      }
    ]
  },
  "comet": {
    "syn": [
      "dirty snowball",
      "celestial body"
    ],
    "note": "",
    "fam": [
      {
        "text": "cometary",
        "pos": "adj.",
        "meaning": "彗星的"
      }
    ]
  },
  "commercialize": {
    "syn": [
      "market",
      "monetize",
      "launch",
      "capitalize"
    ],
    "note": "把科研成果推向市场量产：commercialize scientific discoveries",
    "fam": [
      {
        "text": "commercialization",
        "pos": "n.",
        "meaning": "商业化推广"
      }
    ]
  },
  "commodification": {
    "syn": [
      "commercial exploitation",
      "merchandising"
    ],
    "note": "把原本非买卖的东西（如艺术、传统文化）当成商品交易",
    "fam": [
      {
        "text": "commodity",
        "pos": "n.",
        "meaning": "大宗商品"
      }
    ]
  },
  "commodity": {
    "syn": [
      "raw material",
      "basic goods",
      "produce"
    ],
    "note": "大宗粮食石油金属期货交易商品",
    "fam": []
  },
  "commonalities": {
    "syn": [
      "shared traits",
      "common ground",
      "similarities"
    ],
    "note": "不同族群间的共同特质与共同点：find commonalities",
    "fam": []
  },
  "commute": {
    "syn": [
      "travel to work",
      "daily journey",
      "shuttle"
    ],
    "note": "上下班往返通勤：long daily commute",
    "fam": [
      {
        "text": "commuter",
        "pos": "n.",
        "meaning": "通勤族"
      }
    ]
  },
  "commuter": {
    "syn": [
      "daily passenger",
      "straphanger"
    ],
    "note": "早出晚归乘地铁赶路的职场通勤族：commuter train",
    "fam": []
  },
  "compelling": {
    "syn": [
      "persuasive",
      "convincing",
      "cogent",
      "irresistible"
    ],
    "note": "极具说服力的确凿事实理由：compelling evidence/reasons",
    "fam": [
      {
        "text": "compel",
        "pos": "v.",
        "meaning": "强迫；使不得不"
      }
    ]
  },
  "compensation": {
    "syn": [
      "remuneration",
      "recompense",
      "indemnity",
      "salary package"
    ],
    "note": "全面薪酬福利（含基本工资、奖金、五险一金）",
    "fam": [
      {
        "text": "compensate",
        "pos": "v.",
        "meaning": "补偿；付酬劳"
      }
    ]
  },
  "competence": {
    "syn": [
      "capability",
      "proficiency",
      "ability"
    ],
    "note": "能否胜任复杂职场岗位的核心职业胜任能力",
    "fam": [
      {
        "text": "competent",
        "pos": "adj.",
        "meaning": "能胜任的"
      }
    ]
  },
  "compliance": {
    "syn": [
      "adherence",
      "conformity",
      "obedience",
      "observance"
    ],
    "note": "企业或个人合规守法：ensure compliance with the law",
    "fam": [
      {
        "text": "comply",
        "pos": "v.",
        "meaning": "服从；遵从"
      },
      {
        "text": "compliant",
        "pos": "adj.",
        "meaning": "顺从合规的"
      }
    ]
  },
  "complication": {
    "syn": [
      "aggravation",
      "secondary disease",
      "unforeseen hurdle"
    ],
    "note": "手术或疾病诱发的并发症；也指繁难情况",
    "fam": [
      {
        "text": "complicate",
        "pos": "v.",
        "meaning": "使复杂化"
      },
      {
        "text": "complicated",
        "pos": "adj.",
        "meaning": "复杂的"
      }
    ]
  },
  "component": {
    "syn": [
      "element",
      "constituent",
      "part",
      "ingredient"
    ],
    "note": "雅思高频书面用词，常指系统或机械的构成部分",
    "fam": [
      {
        "text": "compose",
        "pos": "v.",
        "meaning": "组成；构图"
      }
    ]
  },
  "compost": {
    "syn": [
      "organic fertilizer",
      "humus"
    ],
    "note": "将厨余落叶堆肥发酵转化为天然有机肥料",
    "fam": [
      {
        "text": "compostable",
        "pos": "adj.",
        "meaning": "可堆肥的"
      }
    ]
  },
  "comprehend": {
    "syn": [
      "understand",
      "grasp",
      "fathom"
    ],
    "note": "深度理解并领悟知识点",
    "fam": [
      {
        "text": "comprehension",
        "pos": "n.",
        "meaning": "理解力"
      },
      {
        "text": "comprehensive",
        "pos": "adj.",
        "meaning": "综合全面的"
      }
    ]
  },
  "comprehensive": {
    "syn": [
      "inclusive",
      "broad",
      "sweeping",
      "universal"
    ],
    "note": "全方位的系统综合性方案：a comprehensive reform package",
    "fam": [
      {
        "text": "comprehend",
        "pos": "v.",
        "meaning": "理解涵盖"
      }
    ]
  },
  "compromise": {
    "syn": [
      "undermine",
      "endanger",
      "jeopardize",
      "concede"
    ],
    "note": "雅思作动词不仅表妥协，常表‘危及/危害安全性’：compromise safety/integrity",
    "fam": [
      {
        "text": "uncompromising",
        "pos": "adj.",
        "meaning": "不妥协的；坚定的"
      }
    ]
  },
  "compulsory": {
    "syn": [
      "mandatory",
      "obligatory",
      "required"
    ],
    "note": "compulsory education 义务教育/必修课，对立面是 optional",
    "fam": [
      {
        "text": "compel",
        "pos": "v.",
        "meaning": "强迫"
      }
    ]
  },
  "concede": {
    "syn": [
      "acknowledge",
      "admit",
      "grant",
      "yield"
    ],
    "note": "让步段中承认对方某些论点的合理性：concede that there are drawbacks",
    "fam": [
      {
        "text": "concession",
        "pos": "n.",
        "meaning": "让步妥协"
      }
    ]
  },
  "confined": {
    "syn": [
      "cramped",
      "restricted",
      "constricted",
      "narrow"
    ],
    "note": "狭小幽闭令人窒息的空间：confined space",
    "fam": [
      {
        "text": "confine",
        "pos": "v.",
        "meaning": "限制；监禁"
      }
    ]
  },
  "conformity": {
    "syn": [
      "compliance",
      "acquiescence",
      "conventionality"
    ],
    "note": "因害怕被群体孤立而盲从迎合他人的从众心理：peer conformity",
    "fam": [
      {
        "text": "conform",
        "pos": "v.",
        "meaning": "遵从；顺从"
      }
    ]
  },
  "congestion": {
    "syn": [
      "gridlock",
      "jam",
      "bottleneck",
      "overcrowding"
    ],
    "note": "雅思超高频搭配：traffic congestion（交通拥堵）",
    "fam": [
      {
        "text": "congested",
        "pos": "adj.",
        "meaning": "拥塞堵塞的"
      }
    ]
  },
  "conglomerate": {
    "syn": [
      "multinational corporation",
      "corporate group"
    ],
    "note": "横跨能源金融地产制造业的超大型多元化企业集团",
    "fam": []
  },
  "connotation": {
    "syn": [
      "implication",
      "undertone",
      "association"
    ],
    "note": "词汇字面背后的情感倾向褒贬内涵意义",
    "fam": [
      {
        "text": "connote",
        "pos": "v.",
        "meaning": "暗示，隐指"
      }
    ]
  },
  "consensus": {
    "syn": [
      "agreement",
      "unanimity",
      "harmony",
      "concord"
    ],
    "note": "学术界或社会各界达成的广泛共识：scientific/broad consensus",
    "fam": [
      {
        "text": "consensual",
        "pos": "adj.",
        "meaning": "经双方同意的"
      }
    ]
  },
  "conservation": {
    "syn": [
      "preservation",
      "protection",
      "stewardship"
    ],
    "note": "自然水土资源与野生动植物保护",
    "fam": [
      {
        "text": "conserve",
        "pos": "v.",
        "meaning": "保护节约"
      },
      {
        "text": "conservationist",
        "pos": "n.",
        "meaning": "环保人士"
      }
    ]
  },
  "consolidation": {
    "syn": [
      "solidification",
      "strengthening",
      "reinforcement",
      "merger"
    ],
    "note": "睡眠期间脑部自动将所学知识深度整合巩固：memory consolidation",
    "fam": [
      {
        "text": "consolidate",
        "pos": "v.",
        "meaning": "巩固；整合"
      }
    ]
  },
  "conspicuous": {
    "syn": [
      "noticeable",
      "prominent",
      "ostentatious",
      "flamboyant"
    ],
    "note": "社会学名著经典：conspicuous consumption（炫耀性消费）",
    "fam": [
      {
        "text": "inconspicuous",
        "pos": "adj.",
        "meaning": "低调不起眼的"
      }
    ]
  },
  "constellation": {
    "syn": [
      "star pattern",
      "stellar grouping",
      "cluster"
    ],
    "note": "亦可引申为卓越人群或事物的‘群集’",
    "fam": [
      {
        "text": "stellar",
        "pos": "adj.",
        "meaning": "恒星的；杰出的"
      }
    ]
  },
  "constituency": {
    "syn": [
      "electorate",
      "voters",
      "electoral district"
    ],
    "note": "议员代表的地理选区或选民支持群体",
    "fam": [
      {
        "text": "constituent",
        "pos": "n./adj.",
        "meaning": "选民；成分"
      }
    ]
  },
  "consumerism": {
    "syn": [
      "materialism",
      "consumption culture",
      "shopper lifestyle"
    ],
    "note": "崇尚无节制购买物质的消费主义文化",
    "fam": [
      {
        "text": "consumer",
        "pos": "n.",
        "meaning": "消费者"
      },
      {
        "text": "consume",
        "pos": "v.",
        "meaning": "消费；消耗"
      }
    ]
  },
  "contagious": {
    "syn": [
      "infectious",
      "transmissible",
      "communicable"
    ],
    "note": "传染性极强的变异病毒株",
    "fam": [
      {
        "text": "contagion",
        "pos": "n.",
        "meaning": "传染病，感染"
      }
    ]
  },
  "containment": {
    "syn": [
      "restriction",
      "curbing",
      "quarantine",
      "limitation"
    ],
    "note": "疫情或险情发生时的遏制隔离措施",
    "fam": [
      {
        "text": "contain",
        "pos": "v.",
        "meaning": "包含；遏制"
      },
      {
        "text": "container",
        "pos": "n.",
        "meaning": "容器"
      }
    ]
  },
  "contamination": {
    "syn": [
      "pollution",
      "tainting",
      "infection"
    ],
    "note": "重金属渗透对土壤造成的持久污染",
    "fam": [
      {
        "text": "contaminate",
        "pos": "v.",
        "meaning": "污染，弄脏"
      }
    ]
  },
  "contend": {
    "syn": [
      "argue",
      "maintain",
      "claim",
      "assert",
      "hold"
    ],
    "note": "主张、争辩说：Many scholars contend that education is a right.",
    "fam": [
      {
        "text": "contender",
        "pos": "n.",
        "meaning": "竞争者"
      }
    ]
  },
  "contention": {
    "syn": [
      "argument",
      "assertion",
      "claim",
      "dispute",
      "strife"
    ],
    "note": "大作文论文的核心论点立场：My main contention is that...",
    "fam": [
      {
        "text": "contend",
        "pos": "v.",
        "meaning": "争辩主张"
      },
      {
        "text": "contentious",
        "pos": "adj.",
        "meaning": "有争议的"
      }
    ]
  },
  "contentious": {
    "syn": [
      "controversial",
      "debatable",
      "disputed",
      "fraught"
    ],
    "note": "极易引发各方争执反目的敏感话题：a highly contentious issue",
    "fam": []
  },
  "contraband": {
    "syn": [
      "smuggled goods",
      "banned imports",
      "bootleg"
    ],
    "note": "海关拦截的走私违禁物品",
    "fam": []
  },
  "contradict": {
    "syn": [
      "conflict with",
      "dispute",
      "oppose",
      "gainsay"
    ],
    "note": "新发现与前人结论相矛盾相抵触：contradict previous findings",
    "fam": [
      {
        "text": "contradiction",
        "pos": "n.",
        "meaning": "矛盾；反驳"
      },
      {
        "text": "contradictory",
        "pos": "adj.",
        "meaning": "互相矛盾的"
      }
    ]
  },
  "contraindication": {
    "syn": [
      "inadvisability",
      "prohibition",
      "warning factor"
    ],
    "note": "药物或疗法说明书上的禁忌症状/禁用人群",
    "fam": [
      {
        "text": "contraindicate",
        "pos": "v.",
        "meaning": "显示不宜；禁忌"
      }
    ]
  },
  "control group": {
    "syn": [
      "baseline group",
      "comparison group"
    ],
    "note": "排除无关变量干扰的对照试验组",
    "fam": []
  },
  "conurbation": {
    "syn": [
      "agglomeration",
      "merged urban area"
    ],
    "note": "多个相邻城镇随着扩张连成一体的复合城市群",
    "fam": []
  },
  "convergent": {
    "syn": [
      "confluent",
      "merging",
      "integrating"
    ],
    "note": "convergent thinking 求同聚合思维，寻求唯一正确答案",
    "fam": [
      {
        "text": "converge",
        "pos": "v.",
        "meaning": "汇聚；趋同"
      }
    ]
  },
  "conversely": {
    "syn": [
      "in contrast",
      "on the other hand",
      "vice versa"
    ],
    "note": "学术论文引出截然相反论点的经典转折过渡词：Conversely, advocates argue...",
    "fam": []
  },
  "conveyor": {
    "syn": [
      "transporter",
      "conveyor belt",
      "carrier"
    ],
    "note": "conveyor belt 为流水线传送带",
    "fam": [
      {
        "text": "convey",
        "pos": "v.",
        "meaning": "输送；传达"
      }
    ]
  },
  "cool-down": {
    "syn": [
      "recovery stretching",
      "calming phase"
    ],
    "note": "剧烈运动后逐渐恢复心率与拉伸肌肉的整理活动",
    "fam": [
      {
        "text": "cool down",
        "pos": "v.",
        "meaning": "冷却；平静下来"
      }
    ]
  },
  "coordination": {
    "syn": [
      "harmony",
      "synchronization",
      "integration"
    ],
    "note": "运动神经与手眼协调能力：hand-eye coordination",
    "fam": [
      {
        "text": "coordinate",
        "pos": "v.",
        "meaning": "协调；配合"
      },
      {
        "text": "coordinator",
        "pos": "n.",
        "meaning": "协调员"
      }
    ]
  },
  "coping": {
    "syn": [
      "managing",
      "dealing",
      "adapting",
      "handling"
    ],
    "note": "心理学常考短语：coping mechanism/strategy（应对机制）",
    "fam": [
      {
        "text": "cope",
        "pos": "v.",
        "meaning": "应付；处理"
      }
    ]
  },
  "coral reef": {
    "syn": [
      "marine limestone formation"
    ],
    "note": "被称为海洋热带雨林的珊瑚礁群落",
    "fam": []
  },
  "correlate": {
    "syn": [
      "associate",
      "connect",
      "link",
      "interrelate"
    ],
    "note": "统计学与图表分析中表‘正向/负向相关’：correlate strongly with",
    "fam": [
      {
        "text": "correlation",
        "pos": "n.",
        "meaning": "相关性"
      },
      {
        "text": "correlative",
        "pos": "adj.",
        "meaning": "相互关联的"
      }
    ]
  },
  "correlation": {
    "syn": [
      "association",
      "linkage",
      "relationship"
    ],
    "note": "相关性并不等同于直接因果关系",
    "fam": [
      {
        "text": "correlate",
        "pos": "v.",
        "meaning": "相互关联"
      }
    ]
  },
  "corroborate": {
    "syn": [
      "confirm",
      "verify",
      "support",
      "substantiate"
    ],
    "note": "以独立实验数据相互佐证印证：corroborate the findings",
    "fam": [
      {
        "text": "corroboration",
        "pos": "n.",
        "meaning": "佐证；确证"
      }
    ]
  },
  "corroboration": {
    "syn": [
      "confirmation",
      "substantiation",
      "verification",
      "support"
    ],
    "note": "法庭或科研中提供确凿无可辩驳的佐证补充证明",
    "fam": [
      {
        "text": "corroborate",
        "pos": "v.",
        "meaning": "佐证；确证"
      }
    ]
  },
  "corruption": {
    "syn": [
      "bribery",
      "dishonesty",
      "venality",
      "fraud"
    ],
    "note": "公权力寻租与贪腐腐败：political/institutional corruption",
    "fam": [
      {
        "text": "corrupt",
        "pos": "adj./v.",
        "meaning": "腐败的；使堕落"
      },
      {
        "text": "corruptible",
        "pos": "adj.",
        "meaning": "可被买通贿赂的"
      }
    ]
  },
  "cosmic": {
    "syn": [
      "universal",
      "vast",
      "astronomical",
      "infinite"
    ],
    "note": "既指宇宙天体的，也用于比喻规模宏大：cosmic scale",
    "fam": [
      {
        "text": "cosmos",
        "pos": "n.",
        "meaning": "宇宙"
      },
      {
        "text": "microcosm",
        "pos": "n.",
        "meaning": "微观世界；缩影"
      }
    ]
  },
  "cosmology": {
    "syn": [
      "astrophysics",
      "study of the universe"
    ],
    "note": "",
    "fam": [
      {
        "text": "cosmologist",
        "pos": "n.",
        "meaning": "宇宙学家"
      },
      {
        "text": "cosmic",
        "pos": "adj.",
        "meaning": "宇宙的"
      }
    ]
  },
  "cosmonaut": {
    "syn": [
      "astronaut",
      "taikonaut",
      "spaceman"
    ],
    "note": "通常指前苏联/俄罗斯宇航员，美国常用 astronaut，中国用 taikonaut",
    "fam": [
      {
        "text": "cosmos",
        "pos": "n.",
        "meaning": "宇宙"
      }
    ]
  },
  "cosmopolitan": {
    "syn": [
      "international",
      "global",
      "multicultural",
      "sophisticated"
    ],
    "note": "具有世界胸怀见多识广的，或国际化大都市：cosmopolitan city",
    "fam": [
      {
        "text": "cosmopolitanism",
        "pos": "n.",
        "meaning": "世界主义"
      }
    ]
  },
  "counselor": {
    "syn": [
      "advisor",
      "therapist",
      "mentor",
      "guide"
    ],
    "note": "心理咨询辅导员：school/marriage counselor",
    "fam": [
      {
        "text": "counsel",
        "pos": "v./n.",
        "meaning": "提供咨询；劝告"
      },
      {
        "text": "counseling",
        "pos": "n.",
        "meaning": "咨询服务"
      }
    ]
  },
  "counteract": {
    "syn": [
      "neutralize",
      "offset",
      "counterbalance",
      "nullify"
    ],
    "note": "采取积极措施以抵消其负面不良影响：counteract the negative effects",
    "fam": [
      {
        "text": "counteraction",
        "pos": "n.",
        "meaning": "抵抗；中和"
      }
    ]
  },
  "counterfeit": {
    "syn": [
      "fake",
      "forged",
      "bogus",
      "imitation",
      "pirated"
    ],
    "note": "假冒伪劣商品：counterfeit goods",
    "fam": [
      {
        "text": "counterfeiter",
        "pos": "n.",
        "meaning": "造假分子"
      }
    ]
  },
  "coverage": {
    "syn": [
      "reporting",
      "exposure",
      "treatment",
      "broadcasting"
    ],
    "note": "媒体报道深度与范围：media/news coverage",
    "fam": [
      {
        "text": "cover",
        "pos": "v.",
        "meaning": "报道；覆盖"
      }
    ]
  },
  "cramp": {
    "syn": [
      "spasm",
      "muscle contraction",
      "stitch"
    ],
    "note": "小腿或肌肉突发性剧烈抽筋：leg cramp",
    "fam": [
      {
        "text": "cramped",
        "pos": "adj.",
        "meaning": "狭窄拥挤的"
      }
    ]
  },
  "craving": {
    "syn": [
      "longing",
      "yearning",
      "desire",
      "hunger",
      "urge"
    ],
    "note": "常搭配 a craving for sugar/junk food",
    "fam": [
      {
        "text": "crave",
        "pos": "v.",
        "meaning": "渴望；极度渴望"
      }
    ]
  },
  "credential": {
    "syn": [
      "qualification",
      "diploma",
      "certification"
    ],
    "note": "官方颁发具有公信力的毕业文凭与资格资质证书",
    "fam": [
      {
        "text": "credentials",
        "pos": "n.",
        "meaning": "资历凭证"
      }
    ]
  },
  "credibility": {
    "syn": [
      "trustworthiness",
      "reliability",
      "integrity",
      "plausibility"
    ],
    "note": "机构或个人的公信力与信誉：lose credibility",
    "fam": [
      {
        "text": "credible",
        "pos": "adj.",
        "meaning": "可信的"
      },
      {
        "text": "incredible",
        "pos": "adj.",
        "meaning": "难以置信的"
      }
    ]
  },
  "credit score": {
    "syn": [
      "credit rating",
      "creditworthiness index"
    ],
    "note": "个人征信评分决定贷款额度与利率优惠",
    "fam": []
  },
  "creolization": {
    "syn": [
      "cultural hybridization",
      "linguistic blending"
    ],
    "note": "不同种族在殖民地长期混合衍生出全新克里奥尔语言和文化",
    "fam": []
  },
  "crispr": {
    "syn": [
      "molecular scissors",
      "gene editor"
    ],
    "note": "诺贝尔奖革命性基因编辑分子靶向工具",
    "fam": []
  },
  "criterion": {
    "syn": [
      "standard",
      "benchmark",
      "yardstick"
    ],
    "note": "评判学术水平的标准准则，复数为 criteria",
    "fam": [
      {
        "text": "criteria",
        "pos": "n.",
        "meaning": "标准（复数）"
      }
    ]
  },
  "cryptocurrency": {
    "syn": [
      "digital token",
      "virtual currency"
    ],
    "note": "加密数字虚拟代币",
    "fam": []
  },
  "cryptography": {
    "syn": [
      "ciphering",
      "secret writing",
      "cryptology"
    ],
    "note": "信息安全基石学科",
    "fam": [
      {
        "text": "cryptographic",
        "pos": "adj.",
        "meaning": "密码学的"
      },
      {
        "text": "cryptographer",
        "pos": "n.",
        "meaning": "密码学者"
      }
    ]
  },
  "culminate": {
    "syn": [
      "peak",
      "climax",
      "conclude",
      "terminate"
    ],
    "note": "多年苦读最终以取得优异成绩圆满达到顶峰：culminate in a master's degree",
    "fam": [
      {
        "text": "culmination",
        "pos": "n.",
        "meaning": "顶峰；终局"
      }
    ]
  },
  "culpability": {
    "syn": [
      "blameworthiness",
      "guilt",
      "accountability",
      "liability"
    ],
    "note": "行为人应承担的法律过错与罪责程度",
    "fam": [
      {
        "text": "culpable",
        "pos": "adj.",
        "meaning": "应受谴责惩罚的"
      },
      {
        "text": "culprit",
        "pos": "n.",
        "meaning": "罪魁祸首"
      }
    ]
  },
  "culprit": {
    "syn": [
      "offender",
      "wrongdoer",
      "cause"
    ],
    "note": "揪出推高河流水质黑臭超标的真正元凶罪魁祸首",
    "fam": []
  },
  "curator": {
    "syn": [
      "museum keeper",
      "custodian",
      "exhibition designer"
    ],
    "note": "国家级历史艺术博物馆资深典藏专家策展人文博馆员",
    "fam": [
      {
        "text": "curate",
        "pos": "v.",
        "meaning": "策划展览"
      }
    ]
  },
  "currency": {
    "syn": [
      "money",
      "legal tender",
      "medium of exchange"
    ],
    "note": "在国际外汇市场上交易的主权法定货币",
    "fam": []
  },
  "curriculum": {
    "syn": [
      "syllabus",
      "course of study",
      "program"
    ],
    "note": "curriculum 侧重学校总课程体系，syllabus 侧重单科大纲",
    "fam": [
      {
        "text": "curricular",
        "pos": "adj.",
        "meaning": "课程的"
      },
      {
        "text": "extracurricular",
        "pos": "adj.",
        "meaning": "课外的"
      }
    ]
  },
  "curriculum vitae": {
    "syn": [
      "résumé",
      "CV",
      "professional profile"
    ],
    "note": "求职求学个人履历，英式常用 CV，美式常用 resume",
    "fam": []
  },
  "custodial": {
    "syn": [
      "imprisonment-based",
      "incarcerative"
    ],
    "note": "custodial sentence 指实刑监禁判决，非监禁刑为 non-custodial",
    "fam": [
      {
        "text": "custody",
        "pos": "n.",
        "meaning": "监禁；羁押"
      }
    ]
  },
  "custodian": {
    "syn": [
      "keeper",
      "guardian",
      "caretaker",
      "steward"
    ],
    "note": "文化遗产守护者：custodian of cultural heritage",
    "fam": [
      {
        "text": "custody",
        "pos": "n.",
        "meaning": "监护；监管"
      }
    ]
  },
  "custody": {
    "syn": [
      "guardianship",
      "care",
      "detention",
      "confinement"
    ],
    "note": "法律上指父母抚养监护权；也可指公安机关刑事拘留",
    "fam": [
      {
        "text": "custodian",
        "pos": "n.",
        "meaning": "看守人；保管者"
      }
    ]
  },
  "custom": {
    "syn": [
      "tradition",
      "convention",
      "practice",
      "ritual",
      "usage"
    ],
    "note": "千百年传承下来的民风民俗：local customs and traditions",
    "fam": [
      {
        "text": "customary",
        "pos": "adj.",
        "meaning": "习俗惯常的"
      }
    ]
  },
  "cybersecurity": {
    "syn": [
      "information security",
      "network defense"
    ],
    "note": "现代国家网络空间信息安全防护",
    "fam": []
  },
  "cyclical": {
    "syn": [
      "recurrent",
      "periodic",
      "seasonal",
      "rhythmic"
    ],
    "note": "经济波动的周期性起伏：cyclical fluctuations",
    "fam": [
      {
        "text": "cycle",
        "pos": "n.",
        "meaning": "周期；循环"
      }
    ]
  },
  "database": {
    "syn": [
      "datastore",
      "data bank"
    ],
    "note": "高并发结构化数据库",
    "fam": []
  },
  "dean": {
    "syn": [
      "faculty head",
      "department director"
    ],
    "note": "大学学院院长或系主任",
    "fam": []
  },
  "debris": {
    "syn": [
      "rubble",
      "wreckage",
      "remains",
      "fragments",
      "detritus"
    ],
    "note": "发音末尾 s 不发音 [dəˈbriː]，常用于 space debris（太空碎片）",
    "fam": [
      {
        "text": "fragment",
        "pos": "n.",
        "meaning": "碎片"
      }
    ]
  },
  "debunk": {
    "syn": [
      "discredit",
      "expose",
      "puncture",
      "demolish"
    ],
    "note": "揭穿打破流传甚广的民俗伪科学迷思：debunk a popular myth",
    "fam": []
  },
  "decarbonize": {
    "syn": [
      "reduce carbon",
      "cut emissions"
    ],
    "note": "对钢铁水泥重工业开展工艺脱碳改造",
    "fam": [
      {
        "text": "decarbonization",
        "pos": "n.",
        "meaning": "脱碳"
      }
    ]
  },
  "decelerate": {
    "syn": [
      "slow down",
      "retard",
      "brake"
    ],
    "note": "使全球变暖速度减速放缓",
    "fam": [
      {
        "text": "deceleration",
        "pos": "n.",
        "meaning": "减速"
      }
    ]
  },
  "decentralize": {
    "syn": [
      "delegate",
      "disperse",
      "distribute",
      "deregulate"
    ],
    "note": "现代扁平化管理中的分权下放，与 centralize 相对",
    "fam": [
      {
        "text": "decentralization",
        "pos": "n.",
        "meaning": "去中心化；权力下放"
      }
    ]
  },
  "decontaminate": {
    "syn": [
      "purify",
      "disinfect",
      "cleanse"
    ],
    "note": "对受生化核泄漏污染场地彻底洗消净化",
    "fam": [
      {
        "text": "decontamination",
        "pos": "n.",
        "meaning": "洗消去污"
      }
    ]
  },
  "decryption": {
    "syn": [
      "deciphering",
      "decoding",
      "unscrambling"
    ],
    "note": "",
    "fam": [
      {
        "text": "decrypt",
        "pos": "v.",
        "meaning": "解密；破译"
      },
      {
        "text": "decrypted",
        "pos": "adj.",
        "meaning": "已解密的"
      }
    ]
  },
  "decryption key": {
    "syn": [
      "cipher key",
      "secret code",
      "unlock key"
    ],
    "note": "",
    "fam": [
      {
        "text": "key",
        "pos": "n.",
        "meaning": "密钥；关键"
      }
    ]
  },
  "deduction": {
    "syn": [
      "logical inference",
      "top-down reasoning"
    ],
    "note": "从一般普遍定律推导特殊个例的演绎推理法",
    "fam": [
      {
        "text": "deduce",
        "pos": "v.",
        "meaning": "推论，推导"
      },
      {
        "text": "deductive",
        "pos": "adj.",
        "meaning": "演绎的"
      }
    ]
  },
  "deepfake": {
    "syn": [
      "synthetic video",
      "AI face-swap"
    ],
    "note": "生成对抗网络伪造人脸声纹的AI深度伪造技术",
    "fam": []
  },
  "defamation": {
    "syn": [
      "slander",
      "libel",
      "maligning",
      "character assassination"
    ],
    "note": "法律上破坏他人名誉的诽谤罪总称",
    "fam": [
      {
        "text": "defame",
        "pos": "v.",
        "meaning": "诽谤中伤"
      },
      {
        "text": "defamatory",
        "pos": "adj.",
        "meaning": "诽谤性的"
      }
    ]
  },
  "default": {
    "syn": [
      "nonpayment",
      "insolvency",
      "failure to pay"
    ],
    "note": "债务违约爆雷：default on a loan / default risk",
    "fam": [
      {
        "text": "defaulter",
        "pos": "n.",
        "meaning": "违约者"
      }
    ]
  },
  "defect": {
    "syn": [
      "flaw",
      "imperfection",
      "fault",
      "deficiency",
      "shortcoming"
    ],
    "note": "质量检验中指零件瑕疵缺陷；作动词 defect to 指叛变",
    "fam": [
      {
        "text": "defective",
        "pos": "adj.",
        "meaning": "有缺陷的"
      },
      {
        "text": "defection",
        "pos": "n.",
        "meaning": "背叛；脱离"
      }
    ]
  },
  "defendant": {
    "syn": [
      "the accused",
      "respondent",
      "prisoner at the bar"
    ],
    "note": "",
    "fam": [
      {
        "text": "defend",
        "pos": "v.",
        "meaning": "辩护；防御"
      },
      {
        "text": "defense",
        "pos": "n.",
        "meaning": "辩护；被告方"
      }
    ]
  },
  "defiance": {
    "syn": [
      "resistance",
      "disobedience",
      "rebellion",
      "contempt"
    ],
    "note": "公然反抗不合理权威与蔑视：in open defiance of",
    "fam": [
      {
        "text": "defiant",
        "pos": "adj.",
        "meaning": "挑衅反叛的"
      },
      {
        "text": "defy",
        "pos": "v.",
        "meaning": "藐视；违抗"
      }
    ]
  },
  "defibrillator": {
    "syn": [
      "AED device",
      "cardiac shocker"
    ],
    "note": "自动体外除颤仪 AED，公共场所急救核心设备",
    "fam": [
      {
        "text": "defibrillate",
        "pos": "v.",
        "meaning": "使除颤"
      },
      {
        "text": "fibrillation",
        "pos": "n.",
        "meaning": "心室纤颤"
      }
    ]
  },
  "deficiency": {
    "syn": [
      "shortcoming",
      "flaw",
      "inadequacy"
    ],
    "note": "基础知识储备或技能树上存在的薄弱短板漏洞",
    "fam": [
      {
        "text": "deficient",
        "pos": "adj.",
        "meaning": "匮乏短缺的"
      }
    ]
  },
  "deficit": {
    "syn": [
      "shortfall",
      "deficiency",
      "shortage"
    ],
    "note": "财政赤字或经常账户贸易逆差",
    "fam": [
      {
        "text": "deficient",
        "pos": "adj.",
        "meaning": "匮乏短缺的"
      }
    ]
  },
  "definitive": {
    "syn": [
      "conclusive",
      "authoritative",
      "decisive",
      "ultimate"
    ],
    "note": "最具权威、一锤定音的定论或经典名著：a definitive guide/study",
    "fam": [
      {
        "text": "define",
        "pos": "v.",
        "meaning": "定义；明确"
      }
    ]
  },
  "deflation": {
    "syn": [
      "price reduction",
      "economic contraction"
    ],
    "note": "通货紧缩抑制企业扩大再生产意愿",
    "fam": [
      {
        "text": "deflate",
        "pos": "v.",
        "meaning": "紧缩"
      },
      {
        "text": "deflationary",
        "pos": "adj.",
        "meaning": "通缩的"
      }
    ]
  },
  "deforestation": {
    "syn": [
      "logging",
      "clear-cutting",
      "tree clearance"
    ],
    "note": "热带雨林大面积滥伐森林，对立面是 reforestation",
    "fam": [
      {
        "text": "deforest",
        "pos": "v.",
        "meaning": "砍伐森林"
      }
    ]
  },
  "degradation": {
    "syn": [
      "decay",
      "breakdown",
      "decline"
    ],
    "note": "塑料在自然环境中降解长达数百年",
    "fam": []
  },
  "degrade": {
    "syn": [
      "deteriorate",
      "decay",
      "erode"
    ],
    "note": "过度放牧导致草场严重退化",
    "fam": [
      {
        "text": "degradation",
        "pos": "n.",
        "meaning": "退化"
      }
    ]
  },
  "delineate": {
    "syn": [
      "outline",
      "describe",
      "define",
      "trace",
      "chart"
    ],
    "note": "字斟句酌地勾勒界定研究边界与范围：delineate the boundaries",
    "fam": [
      {
        "text": "delineation",
        "pos": "n.",
        "meaning": "清晰描述；轮廓"
      }
    ]
  },
  "delusion": {
    "syn": [
      "hallucination",
      "illusion",
      "misconception",
      "fantasy"
    ],
    "note": "精神分裂症典型的固执妄想（如被害妄想）：suffer from delusions",
    "fam": [
      {
        "text": "delusional",
        "pos": "adj.",
        "meaning": "妄想狂的"
      }
    ]
  },
  "demarcate": {
    "syn": [
      "delimit",
      "delineate",
      "bound",
      "separate"
    ],
    "note": "清晰标明两国疆界或学术边界：demarcate borders/disciplines",
    "fam": [
      {
        "text": "demarcation",
        "pos": "n.",
        "meaning": "界线划定"
      }
    ]
  },
  "demographic": {
    "syn": [
      "population-based",
      "statistical"
    ],
    "note": "人口出生率与年龄结构的动态统计人口统计学特征",
    "fam": [
      {
        "text": "demography",
        "pos": "n.",
        "meaning": "人口统计学"
      }
    ]
  },
  "demographics": {
    "syn": [
      "population profile",
      "socioeconomic breakdown",
      "user statistics"
    ],
    "note": "目标客户的年龄性别收入等人口统计画像",
    "fam": [
      {
        "text": "demographic",
        "pos": "adj.",
        "meaning": "人口学的"
      }
    ]
  },
  "demolition": {
    "syn": [
      "destruction",
      "knocking down",
      "bulldozing",
      "wrecking"
    ],
    "note": "用挖掘机或炸药实施的依法拆除爆破：demolition of illegal buildings",
    "fam": [
      {
        "text": "demolish",
        "pos": "v.",
        "meaning": "拆除；彻底摧毁"
      }
    ]
  },
  "demonstrate": {
    "syn": [
      "prove",
      "evince",
      "illustrate",
      "exhibit"
    ],
    "note": "严谨证明、直观展示：These statistics clearly demonstrate that...",
    "fam": [
      {
        "text": "demonstration",
        "pos": "n.",
        "meaning": "示范；游行"
      }
    ]
  },
  "denial of service": {
    "syn": [
      "DoS attack",
      "service disruption"
    ],
    "note": "分布式拒绝服务攻击通常缩写为 DDoS",
    "fam": [
      {
        "text": "deny",
        "pos": "v.",
        "meaning": "拒绝；否认"
      }
    ]
  },
  "denotation": {
    "syn": [
      "literal meaning",
      "dictionary definition"
    ],
    "note": "词典中最本源客观的字面指称意义",
    "fam": [
      {
        "text": "denote",
        "pos": "v.",
        "meaning": "指代，表示"
      }
    ]
  },
  "density": {
    "syn": [
      "compactness",
      "concentration",
      "crowdedness",
      "solidity"
    ],
    "note": "population density（人口密度），high-density housing（高容积率住宅）",
    "fam": [
      {
        "text": "dense",
        "pos": "adj.",
        "meaning": "密集的；浓密的"
      }
    ]
  },
  "dependency": {
    "syn": [
      "reliance",
      "vulnerability"
    ],
    "note": "劳动年龄人口负担老幼的社会总抚养比负担",
    "fam": [
      {
        "text": "depend",
        "pos": "v.",
        "meaning": "依赖依靠"
      },
      {
        "text": "dependent",
        "pos": "adj./n.",
        "meaning": "依赖的；受抚养人"
      }
    ]
  },
  "deplete": {
    "syn": [
      "exhaust",
      "consume",
      "drain"
    ],
    "note": "不可再生能源终将被人类消耗殆尽",
    "fam": [
      {
        "text": "depletion",
        "pos": "n.",
        "meaning": "枯竭"
      }
    ]
  },
  "depletion": {
    "syn": [
      "exhaustion",
      "reduction",
      "draining"
    ],
    "note": "资源枯竭或臭氧层损耗",
    "fam": [
      {
        "text": "deplete",
        "pos": "v.",
        "meaning": "消耗，耗尽"
      }
    ]
  },
  "depopulation": {
    "syn": [
      "population loss",
      "emptying"
    ],
    "note": "偏远高寒山区空心村面临的常住人口急剧流失萎缩现象",
    "fam": [
      {
        "text": "depopulate",
        "pos": "v.",
        "meaning": "使人口减少"
      }
    ]
  },
  "depreciation": {
    "syn": [
      "devaluation",
      "loss in value",
      "drop in worth"
    ],
    "note": "本币遭遇投机性做空引发的断崖贬值",
    "fam": [
      {
        "text": "depreciate",
        "pos": "v.",
        "meaning": "贬值"
      }
    ]
  },
  "depression": {
    "syn": [
      "melancholy",
      "despondency",
      "gloom",
      "slump",
      "downturn"
    ],
    "note": "既指临床抑郁症，也指经济大萧条（the Great Depression）",
    "fam": [
      {
        "text": "depress",
        "pos": "v.",
        "meaning": "使抑郁；压下"
      },
      {
        "text": "depressive",
        "pos": "adj.",
        "meaning": "抑郁的"
      }
    ]
  },
  "deprivation": {
    "syn": [
      "deficiency",
      "hardship",
      "loss",
      "denial",
      "want"
    ],
    "note": "物质或精神匮乏：sleep/sensory/social deprivation",
    "fam": [
      {
        "text": "deprive",
        "pos": "v.",
        "meaning": "剥夺；使丧失"
      },
      {
        "text": "deprived",
        "pos": "adj.",
        "meaning": "处于贫困边缘的"
      }
    ]
  },
  "deregulation": {
    "syn": [
      "liberalization",
      "decontrol",
      "market opening"
    ],
    "note": "取消政府行政管制与市场开放",
    "fam": [
      {
        "text": "deregulate",
        "pos": "v.",
        "meaning": "取消管制"
      }
    ]
  },
  "derivative": {
    "syn": [
      "secondary financial instrument",
      "byproduct",
      "spin-off"
    ],
    "note": "期权、期货等金融衍生品；也指派生物",
    "fam": [
      {
        "text": "derive",
        "pos": "v.",
        "meaning": "源于；衍生"
      }
    ]
  },
  "derive": {
    "syn": [
      "originate from",
      "deduce",
      "extract"
    ],
    "note": "从原始实验数据中推导提炼出理论模型",
    "fam": [
      {
        "text": "derivative",
        "pos": "adj./n.",
        "meaning": "派生的；衍生品"
      }
    ]
  },
  "destination": {
    "syn": [
      "journey's end",
      "hotspot",
      "target location"
    ],
    "note": "热门旅游打卡胜地：popular tourist destination",
    "fam": []
  },
  "destitute": {
    "syn": [
      "impoverished",
      "penniless",
      "indigent",
      "poverty-stricken"
    ],
    "note": "极其穷困匮乏，连基本生活资料都没有",
    "fam": [
      {
        "text": "destitution",
        "pos": "n.",
        "meaning": "赤贫；贫困交加"
      }
    ]
  },
  "detergent": {
    "syn": [
      "cleaner",
      "washing powder",
      "soap"
    ],
    "note": "洗涤剂表面活性剂",
    "fam": []
  },
  "deteriorate": {
    "syn": [
      "degenerate",
      "decay",
      "decline",
      "worsen"
    ],
    "note": "空气质量或健康状况每况愈下恶化：Air quality has deteriorated rapidly.",
    "fam": [
      {
        "text": "deterioration",
        "pos": "n.",
        "meaning": "变坏恶化"
      }
    ]
  },
  "deterrence": {
    "syn": [
      "intimidation",
      "discouragement",
      "prevention",
      "disincentive"
    ],
    "note": "刑罚对于潜在罪犯的吓阻威慑力：act as a deterrence to crime",
    "fam": [
      {
        "text": "deter",
        "pos": "v.",
        "meaning": "威慑；阻止"
      },
      {
        "text": "deterrent",
        "pos": "n./adj.",
        "meaning": "威慑物；遏制的"
      }
    ]
  },
  "devastation": {
    "syn": [
      "destruction",
      "ruin",
      "havoc"
    ],
    "note": "超强台风过境后的满目疮痍毁灭",
    "fam": [
      {
        "text": "devastate",
        "pos": "v.",
        "meaning": "毁灭摧毁"
      },
      {
        "text": "devastating",
        "pos": "adj.",
        "meaning": "毁灭性的"
      }
    ]
  },
  "diagnosis": {
    "syn": [
      "identification",
      "detection",
      "determination"
    ],
    "note": "医生做出的病症诊断，复数形式为 diagnoses",
    "fam": [
      {
        "text": "diagnose",
        "pos": "v.",
        "meaning": "诊断"
      },
      {
        "text": "diagnostic",
        "pos": "adj.",
        "meaning": "诊断的"
      }
    ]
  },
  "dialect": {
    "syn": [
      "vernacular",
      "regional speech",
      "patois"
    ],
    "note": "特定地理区域内形成的方言土语",
    "fam": [
      {
        "text": "dialectal",
        "pos": "adj.",
        "meaning": "方言的"
      }
    ]
  },
  "dialogue": {
    "syn": [
      "conversation",
      "exchange",
      "discourse"
    ],
    "note": "双方平等倾听真诚沟通的双向对话交流",
    "fam": [
      {
        "text": "monologue",
        "pos": "n.",
        "meaning": "独白"
      }
    ]
  },
  "diaspora": {
    "syn": [
      "dispersion",
      "exodus",
      "migrant community",
      "expatriates"
    ],
    "note": "流散在世界各地的同宗侨民群体：Chinese/Jewish diaspora",
    "fam": []
  },
  "dichotomy": {
    "syn": [
      "division",
      "split",
      "duality",
      "bifurcation"
    ],
    "note": "非黑即白的二元对立划分：a false dichotomy between nature and nurture",
    "fam": [
      {
        "text": "dichotomous",
        "pos": "adj.",
        "meaning": "二分的"
      }
    ]
  },
  "didactic": {
    "syn": [
      "instructional",
      "educational",
      "pedantic"
    ],
    "note": "偏向单向灌输式的讲课方式",
    "fam": [
      {
        "text": "didacticism",
        "pos": "n.",
        "meaning": "说教主义"
      }
    ]
  },
  "differentiate": {
    "syn": [
      "distinguish",
      "discriminate",
      "separate",
      "tell apart"
    ],
    "note": "在两类极相似事物间精准区分明辨：differentiate between fact and opinion",
    "fam": [
      {
        "text": "differentiation",
        "pos": "n.",
        "meaning": "差异化特色"
      }
    ]
  },
  "digestive": {
    "syn": [
      "gastrointestinal",
      "alimentary"
    ],
    "note": "digestive system（消化系统）",
    "fam": [
      {
        "text": "digest",
        "pos": "v.",
        "meaning": "消化；领会"
      },
      {
        "text": "digestion",
        "pos": "n.",
        "meaning": "消化作用"
      }
    ]
  },
  "digitize": {
    "syn": [
      "computerize",
      "digitalize",
      "electronize"
    ],
    "note": "digitize 侧重将实体资料转为数字形式，digitalize 侧重业务数字化转型",
    "fam": [
      {
        "text": "digitization",
        "pos": "n.",
        "meaning": "数字化过程"
      },
      {
        "text": "digital",
        "pos": "adj.",
        "meaning": "数字的"
      }
    ]
  },
  "dignity": {
    "syn": [
      "self-respect",
      "honor",
      "pride",
      "decency"
    ],
    "note": "人的内在不可剥夺的基本尊严：human dignity",
    "fam": [
      {
        "text": "dignified",
        "pos": "adj.",
        "meaning": "庄重大方的"
      }
    ]
  },
  "dilapidated": {
    "syn": [
      "run-down",
      "ramshackle",
      "derelict",
      "decayed"
    ],
    "note": "长年无人居住导致破败倒塌的危房：a dilapidated house",
    "fam": []
  },
  "dilemma": {
    "syn": [
      "quandary",
      "predicament",
      "catch-22",
      "impasse"
    ],
    "note": "雅思大作文首选高级词汇：moral/ethical dilemma",
    "fam": [
      {
        "text": "dilemmatic",
        "pos": "adj.",
        "meaning": "进退维谷的"
      }
    ]
  },
  "diligent": {
    "syn": [
      "hardworking",
      "industrious",
      "assiduous"
    ],
    "note": "起早贪黑手不释卷的刻苦勤奋作风",
    "fam": [
      {
        "text": "diligence",
        "pos": "n.",
        "meaning": "勤勉勤奋"
      }
    ]
  },
  "dimension": {
    "syn": [
      "aspect",
      "facet",
      "element",
      "scope"
    ],
    "note": "考察问题的多个维度与层面：the economic and moral dimensions of an issue",
    "fam": []
  },
  "diminish": {
    "syn": [
      "decrease",
      "lessen",
      "curtail",
      "wane",
      "dwindle"
    ],
    "note": "威信或资源的衰退减少：diminish the importance of",
    "fam": []
  },
  "diplomacy": {
    "syn": [
      "statesmanship",
      "negotiation",
      "tact",
      "international relations"
    ],
    "note": "跨国外交斡旋，引申为人际处事的圆滑手腕",
    "fam": [
      {
        "text": "diplomat",
        "pos": "n.",
        "meaning": "外交官"
      },
      {
        "text": "diplomatic",
        "pos": "adj.",
        "meaning": "外交的；委婉圆融的"
      }
    ]
  },
  "disability": {
    "syn": [
      "impairment",
      "handicap",
      "disorder",
      "infirmity"
    ],
    "note": "身体或智能机能障碍：people with disabilities",
    "fam": [
      {
        "text": "disabled",
        "pos": "adj.",
        "meaning": "残障的；伤残的"
      }
    ]
  },
  "disabuse": {
    "syn": [
      "undeceive",
      "disillusion",
      "set straight",
      "correct"
    ],
    "note": "帮某人打消执迷不悟的偏见迷思：disabuse the public of the notion that...",
    "fam": []
  },
  "disadvantage": {
    "syn": [
      "handicap",
      "drawback",
      "detriment",
      "liability"
    ],
    "note": "处于不利境地：at a disadvantage",
    "fam": [
      {
        "text": "disadvantaged",
        "pos": "adj.",
        "meaning": "处于劣势的"
      }
    ]
  },
  "discipline": {
    "syn": [
      "field of study",
      "branch of knowledge",
      "subject"
    ],
    "note": "在学术语境中意为学科分支，在管理语境中指自律或纪律",
    "fam": [
      {
        "text": "disciplinary",
        "pos": "adj.",
        "meaning": "学科的；纪律的"
      },
      {
        "text": "interdisciplinary",
        "pos": "adj.",
        "meaning": "跨学科的"
      }
    ]
  },
  "discrepancy": {
    "syn": [
      "inconsistency",
      "divergence",
      "variance"
    ],
    "note": "不同观测仪器之间出现的数据出入差异",
    "fam": []
  },
  "discrimination": {
    "syn": [
      "prejudice",
      "bias",
      "bigotry",
      "intolerance",
      "chauvinism"
    ],
    "note": "写作核心大词：racial/age/gender discrimination",
    "fam": [
      {
        "text": "discriminate",
        "pos": "v.",
        "meaning": "歧视；区别"
      },
      {
        "text": "discriminatory",
        "pos": "adj.",
        "meaning": "歧视性的"
      }
    ]
  },
  "disenfranchised": {
    "syn": [
      "dispossessed",
      "powerless",
      "marginalized",
      "excluded"
    ],
    "note": "原指被剥夺选举权，现泛指社会地位边缘弱势无权发声者",
    "fam": [
      {
        "text": "disenfranchise",
        "pos": "v.",
        "meaning": "剥夺公民权"
      }
    ]
  },
  "disinfect": {
    "syn": [
      "sterilize",
      "sanitize",
      "purify",
      "decontaminate"
    ],
    "note": "用化学药剂消灭病菌，disinfect surfaces/instruments",
    "fam": [
      {
        "text": "disinfectant",
        "pos": "n.",
        "meaning": "消毒剂"
      },
      {
        "text": "disinfection",
        "pos": "n.",
        "meaning": "消毒杀菌"
      }
    ]
  },
  "disinformation": {
    "syn": [
      "fake news",
      "propaganda",
      "deception",
      "false intelligence"
    ],
    "note": "disinformation 指蓄意编造散播的假消息，misinformation 指无意误传的错消息",
    "fam": [
      {
        "text": "misinform",
        "pos": "v.",
        "meaning": "误导通知"
      }
    ]
  },
  "dismissal": {
    "syn": [
      "firing",
      "discharge",
      "termination",
      "sack"
    ],
    "note": "雇主单方面解除合同开除：unfair dismissal",
    "fam": [
      {
        "text": "dismiss",
        "pos": "v.",
        "meaning": "解雇；驳回"
      }
    ]
  },
  "disparity": {
    "syn": [
      "inequality",
      "imbalance",
      "discrepancy",
      "divergence"
    ],
    "note": "雅思高频大词：healthcare/income disparity",
    "fam": [
      {
        "text": "disparate",
        "pos": "adj.",
        "meaning": "截然不同的"
      }
    ]
  },
  "disposal": {
    "syn": [
      "dumping",
      "elimination",
      "discarding"
    ],
    "note": "安全合规处置废旧锂离子动力电池",
    "fam": [
      {
        "text": "dispose",
        "pos": "v.",
        "meaning": "处理处置"
      },
      {
        "text": "disposable",
        "pos": "adj.",
        "meaning": "一次性的"
      }
    ]
  },
  "dispute": {
    "syn": [
      "controversy",
      "debate",
      "conflict",
      "quarrel",
      "contest"
    ],
    "note": "学术争论或边界领土纠纷：beyond all dispute",
    "fam": [
      {
        "text": "disputable",
        "pos": "adj.",
        "meaning": "有争议的"
      },
      {
        "text": "indisputable",
        "pos": "adj.",
        "meaning": "无可争辩的"
      }
    ]
  },
  "disruption": {
    "syn": [
      "upheaval",
      "disturbance",
      "revolution",
      "disorder"
    ],
    "note": "disruption在科技与商业中指颠覆性变革，写作常用 disruptive innovation",
    "fam": [
      {
        "text": "disrupt",
        "pos": "v.",
        "meaning": "颠覆；扰乱"
      },
      {
        "text": "disruptive",
        "pos": "adj.",
        "meaning": "颠覆性的；破坏性的"
      }
    ]
  },
  "disruptive": {
    "syn": [
      "revolutionary",
      "groundbreaking"
    ],
    "note": "重构商业生态格局的破坏性颠覆创新",
    "fam": [
      {
        "text": "disrupt",
        "pos": "v.",
        "meaning": "颠覆扰乱"
      }
    ]
  },
  "disseminate": {
    "syn": [
      "spread",
      "circulate",
      "diffuse",
      "broadcast",
      "propagate"
    ],
    "note": "向全社会广泛公布普及科研成果：disseminate scientific knowledge",
    "fam": [
      {
        "text": "dissemination",
        "pos": "n.",
        "meaning": "普及传播"
      }
    ]
  },
  "dissertation": {
    "syn": [
      "thesis",
      "treatise",
      "research paper"
    ],
    "note": "英联邦国家通常 dissertation 指硕士论文，thesis 指博士论文",
    "fam": []
  },
  "dissonance": {
    "syn": [
      "discord",
      "conflict",
      "discrepancy",
      "inconsistency"
    ],
    "note": "cognitive dissonance（认知失调：当行为与内心信念冲突时的煎熬不适）",
    "fam": []
  },
  "distinction": {
    "syn": [
      "honors",
      "excellence",
      "merit"
    ],
    "note": "在毕业学位证书上加注的一等优等生荣誉等级",
    "fam": [
      {
        "text": "distinct",
        "pos": "adj.",
        "meaning": "清晰独特的"
      },
      {
        "text": "distinctive",
        "pos": "adj.",
        "meaning": "有特色的"
      }
    ]
  },
  "divergence": {
    "syn": [
      "difference",
      "deviation",
      "disparity",
      "split"
    ],
    "note": "两组数据走势发生分歧脱钩：a widening divergence between growth and income",
    "fam": [
      {
        "text": "diverge",
        "pos": "v.",
        "meaning": "发散；分岔"
      }
    ]
  },
  "divergent": {
    "syn": [
      "differing",
      "deviating",
      "conflicting",
      "dissimilar"
    ],
    "note": "divergent thinking 发散性创新思维，与 convergent（聚合）相对",
    "fam": [
      {
        "text": "diverge",
        "pos": "v.",
        "meaning": "分歧；偏离"
      },
      {
        "text": "divergence",
        "pos": "n.",
        "meaning": "分歧差异"
      }
    ]
  },
  "diversification": {
    "syn": [
      "broadening",
      "expansion",
      "risk spreading"
    ],
    "note": "不把鸡蛋放在一个篮子里：diversification of risks",
    "fam": [
      {
        "text": "diversify",
        "pos": "v.",
        "meaning": "使多样化；分散投资"
      }
    ]
  },
  "diversity": {
    "syn": [
      "variety",
      "multiculturalism",
      "heterogeneity"
    ],
    "note": "现代包容性大都市海纳百川的多元文化包容性",
    "fam": [
      {
        "text": "diverse",
        "pos": "adj.",
        "meaning": "多元的"
      },
      {
        "text": "diversify",
        "pos": "v.",
        "meaning": "使多样化"
      }
    ]
  },
  "dividend": {
    "syn": [
      "payout",
      "share of profit",
      "yield"
    ],
    "note": "上市公司年终向普通流通股股东派发的现金分红股息",
    "fam": []
  },
  "divorce": {
    "syn": [
      "separation",
      "dissolution",
      "severance",
      "split"
    ],
    "note": "",
    "fam": [
      {
        "text": "divorced",
        "pos": "adj.",
        "meaning": "离异的"
      }
    ]
  },
  "docking": {
    "syn": [
      "coupling",
      "junction",
      "berthing",
      "connection"
    ],
    "note": "",
    "fam": [
      {
        "text": "dock",
        "pos": "v./n.",
        "meaning": "对接；停靠码头"
      }
    ]
  },
  "dogmatism": {
    "syn": [
      "bigotry",
      "arrogance",
      "inflexibility",
      "authoritarianism"
    ],
    "note": "自视绝对正确、拒绝承认任何异议的盲目教条主义",
    "fam": [
      {
        "text": "dogmatic",
        "pos": "adj.",
        "meaning": "教条武断的"
      },
      {
        "text": "dogma",
        "pos": "n.",
        "meaning": "教条"
      }
    ]
  },
  "domestic": {
    "syn": [
      "household",
      "internal",
      "national",
      "indigenous"
    ],
    "note": "domestic violence 家庭暴力，domestic market 国内市场",
    "fam": [
      {
        "text": "domesticate",
        "pos": "v.",
        "meaning": "驯化；驯养"
      },
      {
        "text": "domestically",
        "pos": "adv.",
        "meaning": "在国内；家庭内"
      }
    ]
  },
  "donor": {
    "syn": [
      "contributor",
      "giver",
      "benefactor",
      "supporter"
    ],
    "note": "器官或血液捐赠者：organ/blood donor",
    "fam": [
      {
        "text": "donate",
        "pos": "v.",
        "meaning": "捐赠"
      },
      {
        "text": "donation",
        "pos": "n.",
        "meaning": "捐献"
      }
    ]
  },
  "doping": {
    "syn": [
      "substance abuse",
      "performance-enhancing drug use"
    ],
    "note": "体育竞技中使用违禁药物兴奋剂：anti-doping agency",
    "fam": [
      {
        "text": "dope",
        "pos": "v./n.",
        "meaning": "服兴奋剂；毒品"
      }
    ]
  },
  "dormant": {
    "syn": [
      "quiescent",
      "sleeping",
      "inactive"
    ],
    "note": "沉寂了数千年未曾活动的休眠火山",
    "fam": []
  },
  "dormitory": {
    "syn": [
      "residence hall",
      "hostel",
      "dorm"
    ],
    "note": "常缩写为 dorm",
    "fam": [
      {
        "text": "dorm",
        "pos": "n.",
        "meaning": "宿舍（缩写）"
      }
    ]
  },
  "double-blind": {
    "syn": [
      "masked trial",
      "two-way blind"
    ],
    "note": "医药研发中受试者与主试医生双盲的最高标准临床试验",
    "fam": []
  },
  "downtime": {
    "syn": [
      "stoppage",
      "idle time",
      "outage",
      "inactivity"
    ],
    "note": "设备故障或维护停机时间，反义词为 uptime",
    "fam": [
      {
        "text": "uptime",
        "pos": "n.",
        "meaning": "正常运行时间"
      }
    ]
  },
  "dropout": {
    "syn": [
      "school-leaver",
      "non-completer"
    ],
    "note": "因各种原因中途放弃学业未能毕业的退学辍学者",
    "fam": [
      {
        "text": "drop out",
        "pos": "v. phr.",
        "meaning": "退学"
      }
    ]
  },
  "drought": {
    "syn": [
      "dry spell",
      "aridity",
      "water shortage"
    ],
    "note": "特大干旱少雨灾害",
    "fam": []
  },
  "dual-use": {
    "syn": [
      "military-civilian",
      "two-way application"
    ],
    "note": "可转作军事打击用途的军民两用敏感高科技",
    "fam": []
  },
  "due diligence": {
    "syn": [
      "investigation",
      "audit",
      "scrutiny",
      "background check"
    ],
    "note": "并购投资前对标的企业财务与合规进行的尽职调查",
    "fam": []
  },
  "durability": {
    "syn": [
      "longevity",
      "endurance",
      "robustness",
      "resilience"
    ],
    "note": "建筑材料在风吹雨淋下的长久耐用年限",
    "fam": [
      {
        "text": "durable",
        "pos": "adj.",
        "meaning": "经久耐用的"
      }
    ]
  },
  "dwindle": {
    "syn": [
      "shrink",
      "diminish",
      "deplete",
      "peter out"
    ],
    "note": "森林面积或储蓄随着时间逐渐缩水减少：dwindling natural resources",
    "fam": []
  },
  "dynasty": {
    "syn": [
      "reign",
      "regime",
      "empire"
    ],
    "note": "在大一统华夏文明长河中更迭更替的大汉大唐盛世朝代",
    "fam": [
      {
        "text": "dynastic",
        "pos": "adj.",
        "meaning": "王朝的"
      }
    ]
  },
  "earthquake": {
    "syn": [
      "quake",
      "seism",
      "tremor"
    ],
    "note": "地动山摇的强震大地震",
    "fam": [
      {
        "text": "seismic",
        "pos": "adj.",
        "meaning": "地震的"
      }
    ]
  },
  "echo chamber": {
    "syn": [
      "filter bubble",
      "information silo",
      "closed mindset"
    ],
    "note": "算法推荐导致的只听到相同声音的‘信息茧房/回音室’",
    "fam": []
  },
  "eclipse": {
    "syn": [
      "overshadow",
      "outshine",
      "obscure",
      "surpass"
    ],
    "note": "作动词常表‘使相形见绌/掩盖锋芒’：His achievements eclipsed those of his peers.",
    "fam": [
      {
        "text": "ecliptic",
        "pos": "adj./n.",
        "meaning": "黄道的；日食的"
      }
    ]
  },
  "ecosystem": {
    "syn": [
      "ecological community",
      "biosphere"
    ],
    "note": "包含生物群落与非生物环境的生态系统",
    "fam": [
      {
        "text": "ecological",
        "pos": "adj.",
        "meaning": "生态的"
      }
    ]
  },
  "ecotourism": {
    "syn": [
      "sustainable tourism",
      "green travel",
      "nature tourism"
    ],
    "note": "旨在保护原生态自然环境和尊重土著的生态旅游",
    "fam": []
  },
  "edifice": {
    "syn": [
      "monumental structure",
      "grand building",
      "palace",
      "complex"
    ],
    "note": "宏伟庞大的建筑物，也可比喻庞大的思想体系",
    "fam": []
  },
  "editorial": {
    "syn": [
      "leading article",
      "opinion piece",
      "commentary"
    ],
    "note": "代表报社官方观点的社论社评",
    "fam": [
      {
        "text": "editor",
        "pos": "n.",
        "meaning": "编辑"
      },
      {
        "text": "edit",
        "pos": "v.",
        "meaning": "编辑修订"
      }
    ]
  },
  "efficacy": {
    "syn": [
      "effectiveness",
      "potency",
      "success rate",
      "value"
    ],
    "note": "医学和科研中常用于衡量药物或疗法的真实效果",
    "fam": [
      {
        "text": "efficacious",
        "pos": "adj.",
        "meaning": "灵验有效的"
      }
    ]
  },
  "efficiency": {
    "syn": [
      "productivity",
      "efficacy",
      "competence"
    ],
    "note": "电机能效评级指标",
    "fam": [
      {
        "text": "efficient",
        "pos": "adj.",
        "meaning": "高效的"
      }
    ]
  },
  "effluent": {
    "syn": [
      "liquid waste",
      "sewage",
      "industrial outflow"
    ],
    "note": "未经达标处理直排入海的工业废水毒液",
    "fam": []
  },
  "elasticity": {
    "syn": [
      "responsiveness",
      "flexibility"
    ],
    "note": "价格变动对需求量影响的价格需求弹性",
    "fam": [
      {
        "text": "elastic",
        "pos": "adj.",
        "meaning": "有弹性的"
      }
    ]
  },
  "elective": {
    "syn": [
      "optional course",
      "selective"
    ],
    "note": "可根据兴趣自主选择的选修课",
    "fam": [
      {
        "text": "elect",
        "pos": "v.",
        "meaning": "选举，选修"
      }
    ]
  },
  "electrolyte": {
    "syn": [
      "conductive mineral",
      "salts and minerals"
    ],
    "note": "出汗后运动饮料补充的电解质",
    "fam": [
      {
        "text": "electrolytic",
        "pos": "adj.",
        "meaning": "电解的"
      }
    ]
  },
  "eloquent": {
    "syn": [
      "persuasive",
      "rhetorical",
      "expressive"
    ],
    "note": "在演讲台面上出口成章字字珠玑的雄辩风采",
    "fam": [
      {
        "text": "eloquence",
        "pos": "n.",
        "meaning": "雄辩，口才"
      }
    ]
  },
  "elucidate": {
    "syn": [
      "clarify",
      "explain",
      "illuminate",
      "expound"
    ],
    "note": "将晦涩难懂的学术理论阐释得一清二楚：elucidate the mechanisms",
    "fam": [
      {
        "text": "elucidation",
        "pos": "n.",
        "meaning": "阐明；解释"
      }
    ]
  },
  "embargo": {
    "syn": [
      "trade ban",
      "blockade",
      "prohibition",
      "restriction"
    ],
    "note": "对某国实行的货物禁运或封锁：arms/trade embargo",
    "fam": [
      {
        "text": "blockade",
        "pos": "n.",
        "meaning": "封锁"
      }
    ]
  },
  "emigration": {
    "syn": [
      "out-migration",
      "exodus"
    ],
    "note": "本国国民移居迁往海外定居的他国移出行为",
    "fam": [
      {
        "text": "emigrate",
        "pos": "v.",
        "meaning": "移居国外"
      },
      {
        "text": "emigrant",
        "pos": "n.",
        "meaning": "移居国外的移民"
      }
    ]
  },
  "emission": {
    "syn": [
      "discharge",
      "release",
      "exhaust",
      "outflow"
    ],
    "note": "carbon emissions 指碳排放；zero emissions 零排放",
    "fam": [
      {
        "text": "emit",
        "pos": "v.",
        "meaning": "散发，排放"
      }
    ]
  },
  "empathetic": {
    "syn": [
      "compassionate",
      "sensitive",
      "sympathetic",
      "caring"
    ],
    "note": "能够完全设身处地换位思考的同理心：an empathetic listener",
    "fam": [
      {
        "text": "empathize",
        "pos": "v.",
        "meaning": "感同身受"
      }
    ]
  },
  "empathy": {
    "syn": [
      "compassion",
      "understanding",
      "fellow feeling",
      "sensitivity"
    ],
    "note": "empathy 指感同身受的共情，sympathy 偏向居高临下的同情",
    "fam": [
      {
        "text": "empathize",
        "pos": "v.",
        "meaning": "产生共鸣；共情"
      },
      {
        "text": "empathetic",
        "pos": "adj.",
        "meaning": "富有同理心的"
      }
    ]
  },
  "empirical": {
    "syn": [
      "observational",
      "experimental",
      "evidence-based"
    ],
    "note": "扎根于客观实验观察与一手数据实证的",
    "fam": [
      {
        "text": "empiricism",
        "pos": "n.",
        "meaning": "经验主义"
      }
    ]
  },
  "empower": {
    "syn": [
      "enable",
      "authorize",
      "equip"
    ],
    "note": "赋予学生独立思考与自信表达的底气权能",
    "fam": [
      {
        "text": "empowerment",
        "pos": "n.",
        "meaning": "赋权，自信"
      }
    ]
  },
  "empowerment": {
    "syn": [
      "authorization",
      "enabling",
      "autonomy",
      "agency"
    ],
    "note": "赋权增能，如 women empowerment / youth empowerment",
    "fam": [
      {
        "text": "empower",
        "pos": "v.",
        "meaning": "赋权；增强自主权"
      }
    ]
  },
  "encapsulate": {
    "syn": [
      "summarize",
      "epitomize",
      "condense",
      "abstract"
    ],
    "note": "用一两句话精辟概括全文核心思想：encapsulate the key message",
    "fam": [
      {
        "text": "capsule",
        "pos": "n.",
        "meaning": "胶囊；概要"
      }
    ]
  },
  "encompass": {
    "syn": [
      "include",
      "comprehend",
      "embrace",
      "cover",
      "contain"
    ],
    "note": "研究课题囊括涵盖诸多学科门类：encompass various fields of study",
    "fam": []
  },
  "encryption": {
    "syn": [
      "encoding",
      "cryptography",
      "ciphering"
    ],
    "note": "网络安全核心词，动词为 encrypt，反义词为 decryption",
    "fam": [
      {
        "text": "encrypt",
        "pos": "v.",
        "meaning": "加密"
      },
      {
        "text": "encrypted",
        "pos": "adj.",
        "meaning": "已加密的"
      }
    ]
  },
  "endangered": {
    "syn": [
      "threatened",
      "at risk",
      "vulnerable"
    ],
    "note": "濒危野生珍稀物种",
    "fam": [
      {
        "text": "endanger",
        "pos": "v.",
        "meaning": "危及"
      }
    ]
  },
  "endorsement": {
    "syn": [
      "advocacy",
      "sponsorship",
      "backing",
      "recommendation"
    ],
    "note": "明星代言宣传：celebrity endorsement",
    "fam": [
      {
        "text": "endorse",
        "pos": "v.",
        "meaning": "代言；赞同认可"
      }
    ]
  },
  "endowment": {
    "syn": [
      "bequest",
      "trust fund",
      "donation"
    ],
    "note": "常春藤名校校友捐赠设立的百亿美元大学永久捐赠基金",
    "fam": [
      {
        "text": "endow",
        "pos": "v.",
        "meaning": "赋予；资助捐赠"
      }
    ]
  },
  "endurance": {
    "syn": [
      "stamina",
      "perseverance",
      "fortitude",
      "resilience"
    ],
    "note": "身体持久力或精神坚韧度：endurance sport",
    "fam": [
      {
        "text": "endure",
        "pos": "v.",
        "meaning": "忍受；持久"
      },
      {
        "text": "enduring",
        "pos": "adj.",
        "meaning": "持久的"
      }
    ]
  },
  "engender": {
    "syn": [
      "foster",
      "generate",
      "spawn",
      "provoke",
      "induce"
    ],
    "note": "高级学术词汇，指在社会中诱发滋生某种氛围情绪：engender trust/distrust",
    "fam": []
  },
  "enrolment": {
    "syn": [
      "matriculation",
      "registration",
      "admission"
    ],
    "note": "美式拼写为 enrollment",
    "fam": [
      {
        "text": "enrol",
        "pos": "v.",
        "meaning": "登记入学"
      }
    ]
  },
  "entrepreneur": {
    "syn": [
      "business founder",
      "innovator",
      "tycoon",
      "pioneer"
    ],
    "note": "具有创新精神的创业家与民营企业家",
    "fam": [
      {
        "text": "entrepreneurial",
        "pos": "adj.",
        "meaning": "有创业头脑的"
      },
      {
        "text": "entrepreneurship",
        "pos": "n.",
        "meaning": "企业家精神"
      }
    ]
  },
  "epicenter": {
    "syn": [
      "hypocenter focal point",
      "ground zero"
    ],
    "note": "震感最强烈的地震地表震中位置",
    "fam": []
  },
  "epidemic": {
    "syn": [
      "outbreak",
      "plague",
      "wave of infection"
    ],
    "note": "突发区域性烈性传染病疫情",
    "fam": []
  },
  "epiphany": {
    "syn": [
      "revelation",
      "realization",
      "insight",
      "eureka moment"
    ],
    "note": "突然如醍醐灌顶般顿悟明朗的灵感瞬间：have an epiphany",
    "fam": []
  },
  "episodic": {
    "syn": [
      "incident-based",
      "narrative",
      "periodic"
    ],
    "note": "episodic memory 情景记忆（亲身经历过的特定时间地点事件记忆）",
    "fam": [
      {
        "text": "episode",
        "pos": "n.",
        "meaning": "一集；片段事件"
      }
    ]
  },
  "equality": {
    "syn": [
      "parity",
      "evenness",
      "fairness",
      "equal status"
    ],
    "note": "同等对待与平等人权：gender/social equality",
    "fam": [
      {
        "text": "equal",
        "pos": "adj.",
        "meaning": "平等的"
      },
      {
        "text": "equalize",
        "pos": "v.",
        "meaning": "使平等均等"
      }
    ]
  },
  "equilibrium": {
    "syn": [
      "balance",
      "stability",
      "market parity"
    ],
    "note": "供求曲线相交达成的市场清算均衡价格",
    "fam": []
  },
  "equitable": {
    "syn": [
      "fair",
      "just",
      "impartial",
      "reasonable"
    ],
    "note": "资源公平合理调配：equitable distribution of wealth",
    "fam": [
      {
        "text": "equity",
        "pos": "n.",
        "meaning": "公平公正"
      }
    ]
  },
  "equity": {
    "syn": [
      "fairness",
      "justice",
      "impartiality",
      "even-handedness"
    ],
    "note": "equity 强调因人制宜的实质公正，equality 是无差别均等",
    "fam": [
      {
        "text": "equitable",
        "pos": "adj.",
        "meaning": "公正合理的"
      }
    ]
  },
  "equivocal": {
    "syn": [
      "ambiguous",
      "vague",
      "evasive",
      "unclear"
    ],
    "note": "故意闪烁其词含糊其辞模棱两可：an equivocal answer",
    "fam": [
      {
        "text": "unequivocal",
        "pos": "adj.",
        "meaning": "明确毫无疑问的"
      }
    ]
  },
  "eradicate": {
    "syn": [
      "eliminate",
      "wipe out",
      "stamp out"
    ],
    "note": "全人类携手通过接种天花疫苗彻底消灭天花病毒",
    "fam": [
      {
        "text": "eradication",
        "pos": "n.",
        "meaning": "根除消灭"
      }
    ]
  },
  "ergonomics": {
    "syn": [
      "human factors engineering",
      "user-centered design"
    ],
    "note": "人体工效学，强调工具使人体舒适高效",
    "fam": [
      {
        "text": "ergonomic",
        "pos": "adj.",
        "meaning": "符合人体工程学的"
      }
    ]
  },
  "erosion": {
    "syn": [
      "wearing away",
      "corrosion",
      "abrasion"
    ],
    "note": "滔滔江水亿万年对大峡谷悬崖两岸的切割侵蚀冲刷",
    "fam": [
      {
        "text": "erode",
        "pos": "v.",
        "meaning": "侵蚀"
      }
    ]
  },
  "eruption": {
    "syn": [
      "blowout",
      "explosion",
      "burst"
    ],
    "note": "遮天蔽日浓烟与滚烫熔岩的剧烈火山喷发",
    "fam": [
      {
        "text": "erupt",
        "pos": "v.",
        "meaning": "喷发"
      }
    ]
  },
  "escalation": {
    "syn": [
      "intensification",
      "surge",
      "amplification",
      "heightening"
    ],
    "note": "矛盾、冲突或战事逐步升级恶化：an escalation of tensions",
    "fam": [
      {
        "text": "escalate",
        "pos": "v.",
        "meaning": "升级；使加剧"
      }
    ]
  },
  "espionage": {
    "syn": [
      "spying",
      "intelligence-gathering",
      "surveillance"
    ],
    "note": "写作中常见搭配 cyber espionage（网络间谍/窃密活动）",
    "fam": [
      {
        "text": "spy",
        "pos": "n./v.",
        "meaning": "间谍；暗中监视"
      }
    ]
  },
  "estranged": {
    "syn": [
      "alienated",
      "separated",
      "distant",
      "detached"
    ],
    "note": "常用于夫妻或父子反目分居：an estranged husband",
    "fam": [
      {
        "text": "estrangement",
        "pos": "n.",
        "meaning": "隔阂；疏远"
      }
    ]
  },
  "estuary": {
    "syn": [
      "river mouth",
      "inlet",
      "delta"
    ],
    "note": "咸淡水交汇浮游生物富集的长江入海口河口湾",
    "fam": []
  },
  "ethics": {
    "syn": [
      "morality",
      "moral code",
      "principles",
      "standards"
    ],
    "note": "雅思学术写作关键议题：medical/business/AI ethics",
    "fam": [
      {
        "text": "ethical",
        "pos": "adj.",
        "meaning": "符合伦理道德的"
      },
      {
        "text": "unethical",
        "pos": "adj.",
        "meaning": "不道德的"
      }
    ]
  },
  "ethnocentrism": {
    "syn": [
      "cultural superiority",
      "chauvinism",
      "narrow-mindedness"
    ],
    "note": "以自身民族文化为宇宙中心并轻视其他文明的狭隘优越感",
    "fam": [
      {
        "text": "ethnocentric",
        "pos": "adj.",
        "meaning": "族群中心主义的"
      }
    ]
  },
  "etymology": {
    "syn": [
      "word origin",
      "linguistic roots"
    ],
    "note": "追溯拉丁文古希腊词根前缀后缀演变的词源学",
    "fam": [
      {
        "text": "etymological",
        "pos": "adj.",
        "meaning": "词源学的"
      }
    ]
  },
  "eugenics": {
    "syn": [
      "selective breeding",
      "genetic improvement"
    ],
    "note": "生物伦理学术词汇，指企图通过优生改变人类种群的学说",
    "fam": [
      {
        "text": "eugenic",
        "pos": "adj.",
        "meaning": "优生学的"
      }
    ]
  },
  "euphoria": {
    "syn": [
      "elation",
      "ecstasy",
      "rapture",
      "exuberance",
      "bliss"
    ],
    "note": "极度亢奋、狂喜与幸福感，反义词为 dysphoria",
    "fam": [
      {
        "text": "euphoric",
        "pos": "adj.",
        "meaning": "狂喜欣快的"
      }
    ]
  },
  "eutrophication": {
    "syn": [
      "nutrient overload",
      "algae bloom"
    ],
    "note": "氮磷超标诱发湖泊水华蓝藻爆发富营养化",
    "fam": []
  },
  "evacuation": {
    "syn": [
      "clearing out",
      "withdrawal",
      "relocation"
    ],
    "note": "分秒必争组织危险区域群众紧急避险大撤离",
    "fam": [
      {
        "text": "evacuate",
        "pos": "v.",
        "meaning": "撤离疏散"
      }
    ]
  },
  "evaporation": {
    "syn": [
      "vaporization",
      "drying up"
    ],
    "note": "水体受热蒸发过程",
    "fam": [
      {
        "text": "evaporate",
        "pos": "v.",
        "meaning": "蒸发，消失"
      }
    ]
  },
  "evocative": {
    "syn": [
      "reminiscent",
      "expressive",
      "suggestive",
      "poignant"
    ],
    "note": "唤起美好童年回忆或强烈思乡情感的：evocative melody/prose",
    "fam": [
      {
        "text": "evoke",
        "pos": "v.",
        "meaning": "唤起；引起"
      }
    ]
  },
  "exacerbate": {
    "syn": [
      "aggravate",
      "worsen",
      "inflame",
      "compound"
    ],
    "note": "雅思大作文首选核心学术大词：exacerbate existing problems/inequality",
    "fam": [
      {
        "text": "exacerbation",
        "pos": "n.",
        "meaning": "恶化加重"
      }
    ]
  },
  "excavation": {
    "syn": [
      "unearthing",
      "digging",
      "quarrying"
    ],
    "note": "对沉睡数千年三星堆祭祀坑开展的科学考古发掘",
    "fam": [
      {
        "text": "excavate",
        "pos": "v.",
        "meaning": "发掘开凿"
      }
    ]
  },
  "excursion": {
    "syn": [
      "day trip",
      "outing",
      "jaunt",
      "short tour"
    ],
    "note": "周末当天往返的短途远足郊游",
    "fam": []
  },
  "exemplary": {
    "syn": [
      "model",
      "praiseworthy",
      "outstanding"
    ],
    "note": "足以作为全体同学效仿学习榜样的楷模表率典范",
    "fam": [
      {
        "text": "exemplify",
        "pos": "v.",
        "meaning": "作为...的典范"
      }
    ]
  },
  "exhaustive": {
    "syn": [
      "comprehensive",
      "thorough",
      "in-depth",
      "all-out"
    ],
    "note": "详尽无遗滴水不漏的彻底调研：an exhaustive investigation",
    "fam": [
      {
        "text": "exhaustively",
        "pos": "adv.",
        "meaning": "详尽透彻地"
      }
    ]
  },
  "exodus": {
    "syn": [
      "mass departure",
      "flight",
      "evacuation"
    ],
    "note": "战火蔓延引发难民携家带口仓皇越境逃难的大逃亡大迁徙潮",
    "fam": []
  },
  "exonerate": {
    "syn": [
      "acquit",
      "absolve",
      "vindicate",
      "clear"
    ],
    "note": "由确凿新证据彻底还清清白并宣告无罪",
    "fam": [
      {
        "text": "exoneration",
        "pos": "n.",
        "meaning": "洗脱罪名；免除责任"
      }
    ]
  },
  "expedition": {
    "syn": [
      "scientific voyage",
      "exploration trek",
      "safari"
    ],
    "note": "前往南北极或深海的艰险科学考察探险队：polar expedition",
    "fam": []
  },
  "expenditure": {
    "syn": [
      "spending",
      "outlay",
      "disbursement",
      "expenses"
    ],
    "note": "政府或公共机构财政开支：public expenditure on education",
    "fam": [
      {
        "text": "expend",
        "pos": "v.",
        "meaning": "花费；耗尽"
      }
    ]
  },
  "exponential": {
    "syn": [
      "rapid",
      "snowballing",
      "dramatic",
      "mushrooming"
    ],
    "note": "成几何级数、指数级高速爆炸式增长：exponential growth",
    "fam": [
      {
        "text": "exponentially",
        "pos": "adv.",
        "meaning": "成倍指数级地"
      }
    ]
  },
  "expressionism": {
    "syn": [
      "emotional stylization",
      "subjective modernism"
    ],
    "note": "强调主观强烈情感表达的表现主义艺术（如蒙克《呐喊》）",
    "fam": [
      {
        "text": "expressionist",
        "pos": "adj./n.",
        "meaning": "表现主义的"
      }
    ]
  },
  "extended family": {
    "syn": [
      "joint family",
      "multigenerational household"
    ],
    "note": "包含祖父母、叔伯等多代同堂的大家庭",
    "fam": []
  },
  "extinction": {
    "syn": [
      "dying out",
      "disappearance",
      "eradication"
    ],
    "note": "物种在地球上彻底灭绝",
    "fam": [
      {
        "text": "extinct",
        "pos": "adj.",
        "meaning": "灭绝的"
      }
    ]
  },
  "extracurricular": {
    "syn": [
      "after-school",
      "co-curricular",
      "club-based"
    ],
    "note": "课外社团与文体活动",
    "fam": [
      {
        "text": "curriculum",
        "pos": "n.",
        "meaning": "课程"
      }
    ]
  },
  "extradition": {
    "syn": [
      "deportation",
      "repatriation",
      "surrender of fugitive"
    ],
    "note": "国际法中引渡跨国在逃逃犯：extradition treaty（引渡条约）",
    "fam": [
      {
        "text": "extradite",
        "pos": "v.",
        "meaning": "引渡出国"
      }
    ]
  },
  "extrapolate": {
    "syn": [
      "project",
      "predict",
      "infer"
    ],
    "note": "基于已知历史数据走势向未来未知区间推断",
    "fam": [
      {
        "text": "extrapolation",
        "pos": "n.",
        "meaning": "外推法"
      }
    ]
  },
  "extraterrestrial": {
    "syn": [
      "alien",
      "outer-space",
      "unearthly"
    ],
    "note": "简称 ET，指地球之外的生命或物质",
    "fam": [
      {
        "text": "terrestrial",
        "pos": "adj.",
        "meaning": "陆地的；地球的"
      }
    ]
  },
  "extreme": {
    "syn": [
      "severe",
      "intense",
      "drastic",
      "radical"
    ],
    "note": "extreme weather events 极端天气灾害",
    "fam": [
      {
        "text": "extremity",
        "pos": "n.",
        "meaning": "极度，绝境"
      },
      {
        "text": "extremely",
        "pos": "adv.",
        "meaning": "极其"
      }
    ]
  },
  "extrinsic": {
    "syn": [
      "external",
      "outside",
      "alien",
      "peripheral"
    ],
    "note": "extrinsic motivation（外部激励：如奖金、评优升职），与 intrinsic 相对",
    "fam": []
  },
  "extroversion": {
    "syn": [
      "outgoingness",
      "sociability",
      "gregariousness"
    ],
    "note": "外向乐天性格，与 introversion 相对",
    "fam": [
      {
        "text": "extrovert",
        "pos": "n./adj.",
        "meaning": "外向的人"
      },
      {
        "text": "extroverted",
        "pos": "adj.",
        "meaning": "外向健谈的"
      }
    ]
  },
  "extrovert": {
    "syn": [
      "outgoing person",
      "socializer"
    ],
    "note": "在社交人群中汲取能量的外向者",
    "fam": [
      {
        "text": "extroverted",
        "pos": "adj.",
        "meaning": "外向善交际的"
      }
    ]
  },
  "fabrication": {
    "syn": [
      "manufacturing",
      "production",
      "assembly",
      "invention"
    ],
    "note": "工科指构件加工制造；法律/阅读中也可指‘捏造虚构’",
    "fam": [
      {
        "text": "fabricate",
        "pos": "v.",
        "meaning": "制造；捏造"
      },
      {
        "text": "fabricator",
        "pos": "n.",
        "meaning": "制造厂商"
      }
    ]
  },
  "facade": {
    "syn": [
      "frontage",
      "exterior face",
      "veneer",
      "guise"
    ],
    "note": "建筑物的朝街立面；引申为掩盖丑陋真相的光鲜外表",
    "fam": [
      {
        "text": "front",
        "pos": "n.",
        "meaning": "正面"
      }
    ]
  },
  "facet": {
    "syn": [
      "aspect",
      "feature",
      "angle",
      "component"
    ],
    "note": "犹如宝石的多面切面，探讨复杂议题的某一方面：explore every facet of the problem",
    "fam": []
  },
  "facilitator": {
    "syn": [
      "guide",
      "moderator",
      "coordinator"
    ],
    "note": "从单向灌输者转变为引导课堂讨论的促进者",
    "fam": [
      {
        "text": "facilitate",
        "pos": "v.",
        "meaning": "促进，便利"
      }
    ]
  },
  "faculty": {
    "syn": [
      "academic staff",
      "professoriate",
      "department"
    ],
    "note": "在美式英语中多指全体教员，英式亦可指大学的大学院/学部",
    "fam": []
  },
  "fallacy": {
    "syn": [
      "misconception",
      "error",
      "delusion",
      "untruth",
      "flaw"
    ],
    "note": "逻辑论证中的荒谬错误：logical fallacy",
    "fam": [
      {
        "text": "fallacious",
        "pos": "adj.",
        "meaning": "谬误的；欺骗性的"
      }
    ]
  },
  "fasting": {
    "syn": [
      "abstinence",
      "dieting",
      "starvation regimen"
    ],
    "note": "intermittent fasting (IF) 间歇性断食法",
    "fam": [
      {
        "text": "fast",
        "pos": "v.",
        "meaning": "禁食；斋戒"
      }
    ]
  },
  "fatigue": {
    "syn": [
      "exhaustion",
      "tiredness",
      "weariness",
      "drain"
    ],
    "note": "长期劳作或运动后的深度力竭疲劳：muscle/mental fatigue",
    "fam": [
      {
        "text": "fatigued",
        "pos": "adj.",
        "meaning": "精疲力竭的"
      }
    ]
  },
  "fault line": {
    "syn": [
      "fracture line",
      "rift"
    ],
    "note": "潜伏在地表深处随时可能错位发震的地质断裂带",
    "fam": []
  },
  "fauna": {
    "syn": [
      "wildlife",
      "animal life"
    ],
    "note": "特定区域内的全部动物群",
    "fam": []
  },
  "feasibility": {
    "syn": [
      "viability",
      "practicability",
      "workability"
    ],
    "note": "项目正式立项上马前的技术环境可行性评估论证",
    "fam": [
      {
        "text": "feasible",
        "pos": "adj.",
        "meaning": "可行的"
      }
    ]
  },
  "feedback": {
    "syn": [
      "critique",
      "input",
      "evaluation"
    ],
    "note": "导师给出的针对性修改批评与提升建议反馈意见",
    "fam": []
  },
  "felony": {
    "syn": [
      "serious crime",
      "major offense",
      "capital crime"
    ],
    "note": "英美法系中性质严重的重罪（如谋杀、抢劫），与 misdemeanour 相对",
    "fam": [
      {
        "text": "felon",
        "pos": "n.",
        "meaning": "重罪犯"
      },
      {
        "text": "felonious",
        "pos": "adj.",
        "meaning": "重罪的"
      }
    ]
  },
  "fertility": {
    "syn": [
      "birth rate",
      "fecundity"
    ],
    "note": "年轻育龄夫妇生育意愿低迷导致的低总和生育率",
    "fam": [
      {
        "text": "fertile",
        "pos": "adj.",
        "meaning": "多产的，肥沃的"
      }
    ]
  },
  "fertilizer": {
    "syn": [
      "plant food",
      "enricher"
    ],
    "note": "过量施用导致土壤盐碱化的化肥化学肥料",
    "fam": [
      {
        "text": "fertilize",
        "pos": "v.",
        "meaning": "使肥沃；施肥"
      },
      {
        "text": "fertility",
        "pos": "n.",
        "meaning": "肥力"
      }
    ]
  },
  "fiber": {
    "syn": [
      "roughage",
      "bulk",
      "dietary fiber"
    ],
    "note": "膳食纤维促进肠道蠕动消化",
    "fam": [
      {
        "text": "fibrous",
        "pos": "adj.",
        "meaning": "纤维质的"
      }
    ]
  },
  "fiduciary": {
    "syn": [
      "trust-based",
      "trustee",
      "custodial"
    ],
    "note": "基金经理对基民财产负有的最高级别信托忠实受托责任",
    "fam": []
  },
  "firewall": {
    "syn": [
      "security shield",
      "traffic barrier"
    ],
    "note": "拦截非法流量的软硬件网络防火墙",
    "fam": []
  },
  "fiscal": {
    "syn": [
      "budgetary",
      "financial",
      "monetary",
      "economic"
    ],
    "note": "国家财政税收政策：fiscal policy / fiscal year",
    "fam": [
      {
        "text": "fiscally",
        "pos": "adv.",
        "meaning": "在财政上"
      }
    ]
  },
  "fission": {
    "syn": [
      "atomic splitting",
      "cleavage"
    ],
    "note": "传统核电站遵循的重原子核裂变原理",
    "fam": []
  },
  "flexibility": {
    "syn": [
      "suppleness",
      "elasticity",
      "adaptability",
      "pliability"
    ],
    "note": "肌肉韧带的柔韧性，亦指时间安排的灵活性",
    "fam": [
      {
        "text": "flexible",
        "pos": "adj.",
        "meaning": "柔软的；灵活的"
      }
    ]
  },
  "flood": {
    "syn": [
      "inundation",
      "deluge",
      "overflow"
    ],
    "note": "大江大河特大暴雨洪涝漫堤溃坝",
    "fam": [
      {
        "text": "flooding",
        "pos": "n.",
        "meaning": "洪灾"
      }
    ]
  },
  "flora": {
    "syn": [
      "plant life",
      "botany"
    ],
    "note": "特定区域内的植物群落",
    "fam": []
  },
  "fluctuate": {
    "syn": [
      "oscillate",
      "vary",
      "waver",
      "alternate"
    ],
    "note": "季节性气温与降水量上下无序波动",
    "fam": [
      {
        "text": "fluctuation",
        "pos": "n.",
        "meaning": "波动"
      }
    ]
  },
  "fluctuation": {
    "syn": [
      "variation",
      "oscillation",
      "shift",
      "wave"
    ],
    "note": "雅思小作文图表描写数据上下起伏波动的必备名词：experience wild fluctuations",
    "fam": [
      {
        "text": "fluctuate",
        "pos": "v.",
        "meaning": "波动起伏"
      }
    ]
  },
  "fluency": {
    "syn": [
      "smoothness",
      "articulateness",
      "eloquence"
    ],
    "note": "日常交流表达的行云流水与流利度",
    "fam": [
      {
        "text": "fluent",
        "pos": "adj.",
        "meaning": "流利的"
      }
    ]
  },
  "folklore": {
    "syn": [
      "mythology",
      "popular lore",
      "tradition"
    ],
    "note": "在大江南北乡间民间口口相传千百年的神话传说与民俗学",
    "fam": []
  },
  "formative": {
    "syn": [
      "diagnostic",
      "developmental"
    ],
    "note": "在教学日常过程中开展、旨在及时纠偏的形成性评价",
    "fam": [
      {
        "text": "formation",
        "pos": "n.",
        "meaning": "形成"
      }
    ]
  },
  "fortify": {
    "syn": [
      "strengthen",
      "enrich",
      "reinforce",
      "boost"
    ],
    "note": "在食物中额外补充微量元素：fortified milk with Vitamin D",
    "fam": [
      {
        "text": "fortification",
        "pos": "n.",
        "meaning": "强化；设防"
      },
      {
        "text": "fortress",
        "pos": "n.",
        "meaning": "堡垒"
      }
    ]
  },
  "fossil fuel": {
    "syn": [
      "non-renewable energy",
      "hydrocarbon fuel"
    ],
    "note": "煤炭、石油、天然气等传统化石能源",
    "fam": []
  },
  "fossilize": {
    "syn": [
      "petrify",
      "turn to stone"
    ],
    "note": "远古动植物遗骸经过地质演变化为化石",
    "fam": [
      {
        "text": "fossil",
        "pos": "n.",
        "meaning": "化石"
      }
    ]
  },
  "foster": {
    "syn": [
      "nurture",
      "cultivate",
      "promote",
      "encourage"
    ],
    "note": "可表示寄养孤儿（foster parents），也可指培养能力或合作精神",
    "fam": [
      {
        "text": "fostering",
        "pos": "n.",
        "meaning": "代养；鼓励培养"
      }
    ]
  },
  "foundations": {
    "syn": [
      "footing",
      "substructure",
      "base",
      "bedrock"
    ],
    "note": "高楼稳固扎根的地下桩基基础：lay the foundations",
    "fam": []
  },
  "franchise": {
    "syn": [
      "chain outlet",
      "licensing agreement",
      "concession"
    ],
    "note": "麦当劳等商业特许连锁加盟经营模式",
    "fam": [
      {
        "text": "franchisee",
        "pos": "n.",
        "meaning": "加盟商"
      },
      {
        "text": "franchisor",
        "pos": "n.",
        "meaning": "特许品牌总公司"
      }
    ]
  },
  "freelancer": {
    "syn": [
      "independent contractor",
      "self-employed worker"
    ],
    "note": "不隶属于固定雇主的自由职业者",
    "fam": [
      {
        "text": "freelance",
        "pos": "adj./v.",
        "meaning": "自由职业的"
      }
    ]
  },
  "freight": {
    "syn": [
      "cargo",
      "shipment",
      "lading",
      "consignment"
    ],
    "note": "海陆空大宗货物运输：freight transport/train",
    "fam": [
      {
        "text": "freighter",
        "pos": "n.",
        "meaning": "货船；货运机"
      }
    ]
  },
  "fresco": {
    "syn": [
      "mural",
      "wall painting"
    ],
    "note": "敦煌莫高窟石窟岩壁上运用矿物颜料精心绘制的千年飞天壁画",
    "fam": []
  },
  "fusion": {
    "syn": [
      "atomic merging",
      "amalgamation"
    ],
    "note": "人造太阳受控磁约束核聚变终极能源",
    "fam": []
  },
  "galaxy": {
    "syn": [
      "star system",
      "stellar system",
      "cosmos"
    ],
    "note": "",
    "fam": [
      {
        "text": "galactic",
        "pos": "adj.",
        "meaning": "星系的；银河的"
      }
    ]
  },
  "gap year": {
    "syn": [
      "sabbatical",
      "year off"
    ],
    "note": "西方学生在高中毕业与升入大学之间的间隔休整年",
    "fam": []
  },
  "generation": {
    "syn": [
      "age group",
      "cohort",
      "peer group"
    ],
    "note": "雅思常见搭配：generation gap（代沟），future generations（后代）",
    "fam": [
      {
        "text": "generational",
        "pos": "adj.",
        "meaning": "代际的"
      },
      {
        "text": "generate",
        "pos": "v.",
        "meaning": "产生；引起"
      }
    ]
  },
  "genetic engineering": {
    "syn": [
      "gene modification",
      "transgenic tech"
    ],
    "note": "现代基因修饰转基因技术",
    "fam": []
  },
  "genome": {
    "syn": [
      "genetic sequence",
      "genetic blueprint",
      "DNA makeup"
    ],
    "note": "",
    "fam": [
      {
        "text": "genomic",
        "pos": "adj.",
        "meaning": "基因组的"
      },
      {
        "text": "genomics",
        "pos": "n.",
        "meaning": "基因组学"
      }
    ]
  },
  "genre": {
    "syn": [
      "category",
      "style",
      "classification",
      "type"
    ],
    "note": "文学、音乐或电影的具体体裁门类：literary/film genre",
    "fam": []
  },
  "gentrification": {
    "syn": [
      "urban renewal",
      "neighborhood upgrade"
    ],
    "note": "中产阶级迁入旧街区改造导致原底层老租客租金暴涨被挤出的士绅化贵族化现象",
    "fam": [
      {
        "text": "gentrify",
        "pos": "v.",
        "meaning": "士绅化改造"
      }
    ]
  },
  "gentrify": {
    "syn": [
      "upgrade",
      "beautify",
      "commercialize urban area"
    ],
    "note": "廉价旧街区被中产入驻翻新高档化，导致原住民被高房租逼走",
    "fam": [
      {
        "text": "gentrification",
        "pos": "n.",
        "meaning": "中产阶层化；贵族化"
      }
    ]
  },
  "geological": {
    "syn": [
      "earth-science-related"
    ],
    "note": "经历上亿年沧海桑田沧桑巨变的地质年代记录",
    "fam": [
      {
        "text": "geology",
        "pos": "n.",
        "meaning": "地质学"
      },
      {
        "text": "geologist",
        "pos": "n.",
        "meaning": "地质学家"
      }
    ]
  },
  "geothermal": {
    "syn": [
      "earth-heat"
    ],
    "note": "利用地下高温蒸汽的地热发电",
    "fam": []
  },
  "gig economy": {
    "syn": [
      "freelance economy",
      "on-demand labor market"
    ],
    "note": "依托平台接零单的灵活用工经济形态（如骑手网约车）",
    "fam": []
  },
  "glaciation": {
    "syn": [
      "ice age process",
      "glacial epoch"
    ],
    "note": "第四纪严寒气候下覆盖半个北半球的大陆冰期冰川作用",
    "fam": [
      {
        "text": "glacier",
        "pos": "n.",
        "meaning": "冰川"
      }
    ]
  },
  "glacier": {
    "syn": [
      "ice sheet",
      "icefield",
      "ice cap"
    ],
    "note": "高山与极地大陆冰川",
    "fam": [
      {
        "text": "glacial",
        "pos": "adj.",
        "meaning": "冰川的；极冷的"
      }
    ]
  },
  "glass ceiling": {
    "syn": [
      "invisible barrier",
      "unseen hindrance"
    ],
    "note": "女性或少数族裔在职场晋升中遇到的无形隐形天花板",
    "fam": []
  },
  "global citizen": {
    "syn": [
      "world citizen",
      "cosmopolite"
    ],
    "note": "具有全球视野、关注人类命运共同体的世界公民",
    "fam": []
  },
  "globalization": {
    "syn": [
      "international integration",
      "worldwide trade"
    ],
    "note": "经济全球化浪潮深刻重塑世界供应链",
    "fam": [
      {
        "text": "global",
        "pos": "adj.",
        "meaning": "全球的"
      },
      {
        "text": "globalize",
        "pos": "v.",
        "meaning": "使全球化"
      }
    ]
  },
  "glycemic": {
    "syn": [
      "blood sugar related",
      "glucose-related"
    ],
    "note": "常考短语 Glycemic Index (GI 升糖指数)",
    "fam": [
      {
        "text": "glucose",
        "pos": "n.",
        "meaning": "葡萄糖"
      }
    ]
  },
  "gorge": {
    "syn": [
      "canyon",
      "ravine",
      "chasm"
    ],
    "note": "两岸壁立千仞一线天的长江三峡险峻峡谷",
    "fam": []
  },
  "governance": {
    "syn": [
      "administration",
      "management",
      "stewardship",
      "rule"
    ],
    "note": "公共管理体系治理水平：good governance",
    "fam": [
      {
        "text": "govern",
        "pos": "v.",
        "meaning": "统治；管理"
      },
      {
        "text": "governmental",
        "pos": "adj.",
        "meaning": "政府的"
      }
    ]
  },
  "grade inflation": {
    "syn": [
      "score dilution",
      "lenient grading"
    ],
    "note": "某些高校为迎合就业率故意给分过宽的分数虚高贬值现象",
    "fam": []
  },
  "grassroots": {
    "syn": [
      "community-based",
      "bottom-up",
      "popular",
      "ordinary people"
    ],
    "note": "源自普通老百姓的民间基层行动：grassroots movement",
    "fam": []
  },
  "gravitational": {
    "syn": [
      "attractive",
      "gravitic"
    ],
    "note": "常考搭配：gravitational pull/field（万有引力/重力场）",
    "fam": [
      {
        "text": "gravity",
        "pos": "n.",
        "meaning": "重力；严重性"
      },
      {
        "text": "gravitate",
        "pos": "v.",
        "meaning": "受吸引；移向"
      }
    ]
  },
  "green belt": {
    "syn": [
      "green zone",
      "ecological buffer",
      "parkland ring"
    ],
    "note": "城市外围严禁开发的绿化隔离环带以限制城市无序扩张",
    "fam": []
  },
  "greenhouse": {
    "syn": [
      "glasshouse",
      "hothouse"
    ],
    "note": "greenhouse effect 温室效应；greenhouse gases 温室气体",
    "fam": []
  },
  "grid": {
    "syn": [
      "power network",
      "electrical grid"
    ],
    "note": "特高压跨区域智能输配电电网",
    "fam": []
  },
  "gridlock": {
    "syn": [
      "traffic paralysis",
      "standstill",
      "impasse",
      "deadlock"
    ],
    "note": "早晚高峰十字路口车流彻底锁死的瘫痪状态；政治僵局",
    "fam": []
  },
  "gross domestic product": {
    "syn": [
      "GDP",
      "economic output"
    ],
    "note": "衡量一国经济发展总体规模的国内生产总值",
    "fam": []
  },
  "guarantee": {
    "syn": [
      "warranty",
      "assurance",
      "pledge",
      "covenant"
    ],
    "note": "品质质保承诺：money-back guarantee",
    "fam": [
      {
        "text": "guarantor",
        "pos": "n.",
        "meaning": "担保人"
      }
    ]
  },
  "habitable": {
    "syn": [
      "livable",
      "inhabitable",
      "viable"
    ],
    "note": "inhabitable 意思也是适居的（并非不可居），unhabitable 才是不宜居",
    "fam": [
      {
        "text": "habitat",
        "pos": "n.",
        "meaning": "栖息地"
      },
      {
        "text": "inhabit",
        "pos": "v.",
        "meaning": "居住于"
      }
    ]
  },
  "habitat": {
    "syn": [
      "natural home",
      "environment",
      "territory"
    ],
    "note": "野生动植物赖以繁衍的天然栖息地",
    "fam": [
      {
        "text": "inhabit",
        "pos": "v.",
        "meaning": "栖息居住"
      }
    ]
  },
  "hacker": {
    "syn": [
      "cyber-intruder",
      "cracker",
      "cyber-attacker"
    ],
    "note": "",
    "fam": [
      {
        "text": "hack",
        "pos": "v.",
        "meaning": "入侵黑进系统"
      },
      {
        "text": "hacking",
        "pos": "n.",
        "meaning": "黑客攻击行为"
      }
    ]
  },
  "hallucination": {
    "syn": [
      "illusion",
      "vision",
      "apparition",
      "mirage"
    ],
    "note": "感官不存在刺激时凭空出现的幻听幻视：auditory hallucination",
    "fam": [
      {
        "text": "hallucinate",
        "pos": "v.",
        "meaning": "产生幻觉"
      }
    ]
  },
  "harmony": {
    "syn": [
      "concord",
      "melody",
      "peace",
      "agreement"
    ],
    "note": "音乐上的悦耳和声，或多元族群间的和睦相处",
    "fam": [
      {
        "text": "harmonious",
        "pos": "adj.",
        "meaning": "和谐融洽的"
      },
      {
        "text": "harmonize",
        "pos": "v.",
        "meaning": "使协调一致"
      }
    ]
  },
  "harness": {
    "syn": [
      "utilize",
      "tap",
      "channel",
      "exploit"
    ],
    "note": "驯服并开发利用大自然的狂暴风浪潮汐能",
    "fam": []
  },
  "hazardous": {
    "syn": [
      "dangerous",
      "risky",
      "perilous"
    ],
    "note": "危险品防爆化学试剂运输规范",
    "fam": [
      {
        "text": "hazard",
        "pos": "n.",
        "meaning": "隐患危险"
      }
    ]
  },
  "headhunt": {
    "syn": [
      "poach",
      "scout",
      "recruit senior talent"
    ],
    "note": "猎头公司高薪挖取高端管理或技术人才",
    "fam": [
      {
        "text": "headhunter",
        "pos": "n.",
        "meaning": "猎头顾问"
      }
    ]
  },
  "hedge": {
    "syn": [
      "safeguard",
      "shield",
      "counterbalance",
      "protect"
    ],
    "note": "对冲风险的金融操作：hedge against inflation（抗通胀对冲）",
    "fam": [
      {
        "text": "hedge fund",
        "pos": "n.",
        "meaning": "对冲基金"
      }
    ]
  },
  "herbivore": {
    "syn": [
      "plant-eater",
      "vegetarian animal"
    ],
    "note": "牛羊等草食性动物",
    "fam": [
      {
        "text": "herbivorous",
        "pos": "adj.",
        "meaning": "草食性的"
      }
    ]
  },
  "heritage": {
    "syn": [
      "legacy",
      "inheritance",
      "cultural roots"
    ],
    "note": "被联合国教科文组织列入名录的世界文化遗产",
    "fam": [
      {
        "text": "inherit",
        "pos": "v.",
        "meaning": "继承"
      }
    ]
  },
  "heuristic": {
    "syn": [
      "exploratory",
      "discovery-based",
      "problem-solving"
    ],
    "note": "引导学生主动发现规律的启发式教学法",
    "fam": []
  },
  "hibernate": {
    "syn": [
      "sleep through winter",
      "lie dormant"
    ],
    "note": "黑熊等动物冬季冬眠休眠",
    "fam": [
      {
        "text": "hibernation",
        "pos": "n.",
        "meaning": "冬眠"
      }
    ]
  },
  "hierarchy": {
    "syn": [
      "pecking order",
      "ranking system",
      "chain of command"
    ],
    "note": "企业自上而下的传统科层官僚管理等级",
    "fam": [
      {
        "text": "hierarchical",
        "pos": "adj.",
        "meaning": "等级分明的"
      }
    ]
  },
  "high-speed rail": {
    "syn": [
      "bullet train",
      "rapid rail network"
    ],
    "note": "时速 300 公里以上的高铁铁路网络",
    "fam": []
  },
  "hinterland": {
    "syn": [
      "inland region",
      "backcountry",
      "catchment area"
    ],
    "note": "港口或中心城市背靠的广阔内陆经济辐射腹地",
    "fam": []
  },
  "hippocampus": {
    "syn": [
      "memory center",
      "limbic structure"
    ],
    "note": "负责将瞬时短期记忆转化为长期记忆的大脑海马体",
    "fam": []
  },
  "holistic": {
    "syn": [
      "comprehensive",
      "all-round",
      "integrated"
    ],
    "note": "注重德智体美劳全人格发展的全人教育理念",
    "fam": [
      {
        "text": "holistically",
        "pos": "adv.",
        "meaning": "整体性地"
      }
    ]
  },
  "homelessness": {
    "syn": [
      "vagrancy",
      "destitution"
    ],
    "note": "流落街头睡桥洞裹硬纸板过夜的无家可归流浪困境",
    "fam": [
      {
        "text": "homeless",
        "pos": "adj.",
        "meaning": "无家可归的"
      }
    ]
  },
  "homogenization": {
    "syn": [
      "standardization",
      "uniformity",
      "assimilation"
    ],
    "note": "全球化带来的文化同质化与单一化隐忧：cultural homogenization",
    "fam": [
      {
        "text": "homogenize",
        "pos": "v.",
        "meaning": "使同质化"
      },
      {
        "text": "homogeneous",
        "pos": "adj.",
        "meaning": "同质单一的"
      }
    ]
  },
  "hospitality": {
    "syn": [
      "guest service",
      "welcoming",
      "catering and lodging"
    ],
    "note": "酒店餐饮与款待服务行业：hospitality industry",
    "fam": [
      {
        "text": "hospitable",
        "pos": "adj.",
        "meaning": "好客热情的"
      }
    ]
  },
  "housing crisis": {
    "syn": [
      "shelter shortage",
      "unaffordable property problem"
    ],
    "note": "大城市年轻人买不起、租不起房的重大社会危机",
    "fam": []
  },
  "humanitarian": {
    "syn": [
      "philanthropic",
      "charitable",
      "compassionate"
    ],
    "note": "国际紧急人道主义援助：humanitarian aid/crisis",
    "fam": [
      {
        "text": "humanity",
        "pos": "n.",
        "meaning": "人类；人道"
      }
    ]
  },
  "hurricane": {
    "syn": [
      "cyclone",
      "tropical tempest"
    ],
    "note": "中心风力达十七级以上的加勒比海狂暴飓风",
    "fam": []
  },
  "hybridity": {
    "syn": [
      "crossbreed",
      "fusion",
      "amalgamation",
      "mixture"
    ],
    "note": "后殖民理论核心：不同文明杂糅交融的跨文化杂糅性",
    "fam": [
      {
        "text": "hybrid",
        "pos": "adj./n.",
        "meaning": "混合的；杂交品种"
      }
    ]
  },
  "hydration": {
    "syn": [
      "moisture balance",
      "fluid intake",
      "water replenishment"
    ],
    "note": "",
    "fam": [
      {
        "text": "hydrate",
        "pos": "v.",
        "meaning": "补充水分"
      },
      {
        "text": "dehydration",
        "pos": "n.",
        "meaning": "脱水"
      }
    ]
  },
  "hydraulic": {
    "syn": [
      "fluid-operated",
      "water-powered",
      "pressurized"
    ],
    "note": "液压驱动机械，如 hydraulic brakes/press",
    "fam": [
      {
        "text": "hydraulics",
        "pos": "n.",
        "meaning": "水力学；液压系统"
      }
    ]
  },
  "hydroelectric": {
    "syn": [
      "hydropower",
      "water-powered"
    ],
    "note": "三峡大坝等水力发电工程",
    "fam": [
      {
        "text": "hydroelectricity",
        "pos": "n.",
        "meaning": "水力发电"
      }
    ]
  },
  "hygiene": {
    "syn": [
      "cleanliness",
      "asepsis"
    ],
    "note": "个人勤洗手勤通风良好日常个人卫生习惯",
    "fam": [
      {
        "text": "hygienic",
        "pos": "adj.",
        "meaning": "卫生的"
      }
    ]
  },
  "hype": {
    "syn": [
      "exaggeration",
      "ballyhoo",
      "publicity buzz",
      "promotion"
    ],
    "note": "过度虚张声势的市场炒作宣传：live up to the hype",
    "fam": [
      {
        "text": "hyped",
        "pos": "adj.",
        "meaning": "被过度吹捧炒作的"
      }
    ]
  },
  "hypertrophy": {
    "syn": [
      "muscle enlargement",
      "tissue growth"
    ],
    "note": "健身抗阻训练引发的肌肉纤维肥大增大：muscle hypertrophy",
    "fam": [
      {
        "text": "atrophy",
        "pos": "n./v.",
        "meaning": "肌肉萎缩"
      }
    ]
  },
  "hypochondria": {
    "syn": [
      "health anxiety",
      "imagined illness"
    ],
    "note": "整天无端怀疑自己得了致命绝症的疑病症",
    "fam": [
      {
        "text": "hypochondriac",
        "pos": "n.",
        "meaning": "疑病症患者"
      }
    ]
  },
  "hypothesis": {
    "syn": [
      "supposition",
      "conjecture",
      "theory",
      "proposition"
    ],
    "note": "提出待科学验证的假说假设",
    "fam": [
      {
        "text": "hypothesize",
        "pos": "v.",
        "meaning": "提出假说"
      },
      {
        "text": "hypothetical",
        "pos": "adj.",
        "meaning": "假设的"
      }
    ]
  },
  "hypothesize": {
    "syn": [
      "theorize",
      "speculate",
      "postulate",
      "suppose"
    ],
    "note": "科学家在开展实验前提出理论假说：Researchers hypothesized that...",
    "fam": [
      {
        "text": "hypothesis",
        "pos": "n.",
        "meaning": "假说；假定"
      }
    ]
  },
  "iconic": {
    "syn": [
      "legendary",
      "emblematic",
      "classic",
      "celebrated"
    ],
    "note": "标志性建筑或人物：an iconic building/figure",
    "fam": [
      {
        "text": "icon",
        "pos": "n.",
        "meaning": "偶像；图标"
      }
    ]
  },
  "idiom": {
    "syn": [
      "expression",
      "turn of phrase",
      "figure of speech"
    ],
    "note": "只可整体意会不可望文生义的地道成语习语",
    "fam": [
      {
        "text": "idiomatic",
        "pos": "adj.",
        "meaning": "符合语言习惯的地道的"
      }
    ]
  },
  "illicit": {
    "syn": [
      "illegal",
      "unlawful",
      "prohibited",
      "banned",
      "clandestine"
    ],
    "note": "非法秘密勾当：illicit trade/drugs",
    "fam": [
      {
        "text": "licit",
        "pos": "adj.",
        "meaning": "合法的"
      }
    ]
  },
  "illiteracy": {
    "syn": [
      "lack of reading ability",
      "ignorance"
    ],
    "note": "文盲状态，现代衍生出 digital illiteracy (数字文盲)",
    "fam": [
      {
        "text": "illiterate",
        "pos": "adj./n.",
        "meaning": "目不识丁的"
      }
    ]
  },
  "illustrate": {
    "syn": [
      "exemplify",
      "demonstrate",
      "clarify",
      "depict"
    ],
    "note": "举例生动说明论述：The graph illustrates the trend in...",
    "fam": [
      {
        "text": "illustration",
        "pos": "n.",
        "meaning": "插图；例证"
      }
    ]
  },
  "immersion": {
    "syn": [
      "submersion",
      "deep involvement"
    ],
    "note": "全天候不讲一句母语的纯外语浸入式语言环境",
    "fam": [
      {
        "text": "immerse",
        "pos": "v.",
        "meaning": "沉浸，浸泡"
      }
    ]
  },
  "immigration": {
    "syn": [
      "in-migration",
      "foreign entry"
    ],
    "note": "海关边检办理合法永久居留手续的跨国入境移民",
    "fam": [
      {
        "text": "immigrate",
        "pos": "v.",
        "meaning": "移居入境"
      },
      {
        "text": "immigrant",
        "pos": "n.",
        "meaning": "外来移民"
      }
    ]
  },
  "immunization": {
    "syn": [
      "inoculation",
      "immune defense"
    ],
    "note": "建立全民群体免疫屏障的计划免疫",
    "fam": [
      {
        "text": "immune",
        "pos": "adj.",
        "meaning": "免疫的"
      },
      {
        "text": "immunity",
        "pos": "n.",
        "meaning": "免疫力"
      }
    ]
  },
  "impart": {
    "syn": [
      "transmit",
      "pass on",
      "convey"
    ],
    "note": "德高望重的师长传授毕生知识技艺",
    "fam": []
  },
  "impartiality": {
    "syn": [
      "objectivity",
      "neutrality",
      "fairness",
      "unbiasedness"
    ],
    "note": "新闻媒体应坚守的客观公正与中立：maintain strict impartiality",
    "fam": [
      {
        "text": "impartial",
        "pos": "adj.",
        "meaning": "公正不偏不倚的"
      },
      {
        "text": "partial",
        "pos": "adj.",
        "meaning": "偏袒的；部分的"
      }
    ]
  },
  "imperative": {
    "syn": [
      "vital",
      "urgent",
      "compulsory",
      "critical",
      "mandatory"
    ],
    "note": "句型：It is imperative that governments take action immediately.",
    "fam": [
      {
        "text": "imperiously",
        "pos": "adv.",
        "meaning": "专横迫切地"
      }
    ]
  },
  "impetus": {
    "syn": [
      "momentum",
      "catalyst",
      "driving force",
      "stimulus",
      "incentive"
    ],
    "note": "为经济发展注入强大动力推动力：provide a fresh impetus for growth",
    "fam": []
  },
  "implication": {
    "syn": [
      "ramification",
      "consequence",
      "connotation",
      "inference"
    ],
    "note": "科研发现对于未来政策制定的深远启示与潜移默化影响：policy implications",
    "fam": [
      {
        "text": "imply",
        "pos": "v.",
        "meaning": "暗示；意味着"
      }
    ]
  },
  "improvise": {
    "syn": [
      "ad-lib",
      "extemporize",
      "play by ear",
      "invent"
    ],
    "note": "无乐谱的爵士乐即兴演奏，或临场即兴发挥应对",
    "fam": [
      {
        "text": "improvisation",
        "pos": "n.",
        "meaning": "即兴创作"
      },
      {
        "text": "impromptu",
        "pos": "adj.",
        "meaning": "即席的"
      }
    ]
  },
  "impulsive": {
    "syn": [
      "spontaneous",
      "rash",
      "unplanned",
      "reckless"
    ],
    "note": "结账台前常见的冲动消费购买：impulsive buying",
    "fam": [
      {
        "text": "impulse",
        "pos": "n.",
        "meaning": "冲动；脉冲"
      }
    ]
  },
  "incentive": {
    "syn": [
      "motivation",
      "encouragement",
      "inducement"
    ],
    "note": "利用税收减免优惠激励企业投资绿电",
    "fam": [
      {
        "text": "incentivize",
        "pos": "v.",
        "meaning": "激励"
      }
    ]
  },
  "incinerate": {
    "syn": [
      "burn up",
      "cremate"
    ],
    "note": "采用高温二噁英分解技术焚烧垃圾发电",
    "fam": [
      {
        "text": "incineration",
        "pos": "n.",
        "meaning": "焚烧"
      },
      {
        "text": "incinerator",
        "pos": "n.",
        "meaning": "垃圾焚烧炉"
      }
    ]
  },
  "inclusion": {
    "syn": [
      "incorporation",
      "involvement",
      "comprehensiveness"
    ],
    "note": "现代社会倡导的 Diversity & Inclusion (D&I)",
    "fam": [
      {
        "text": "inclusive",
        "pos": "adj.",
        "meaning": "包容的"
      }
    ]
  },
  "inclusive": {
    "syn": [
      "comprehensive",
      "all-embracing",
      "open",
      "broad"
    ],
    "note": "inclusive society/education（包容性全纳社会/融合教育）",
    "fam": [
      {
        "text": "include",
        "pos": "v.",
        "meaning": "包含"
      },
      {
        "text": "inclusivity",
        "pos": "n.",
        "meaning": "包容性"
      }
    ]
  },
  "incubation": {
    "syn": [
      "dormancy period",
      "latency"
    ],
    "note": "潜伏期内毫无体征症状但具备传染性",
    "fam": [
      {
        "text": "incubate",
        "pos": "v.",
        "meaning": "潜伏；孵化"
      }
    ]
  },
  "incubator": {
    "syn": [
      "accelerator",
      "business nursery",
      "innovation hub"
    ],
    "note": "为早期创业团队提供场地与孵化辅导的创业孵化器",
    "fam": [
      {
        "text": "incubate",
        "pos": "v.",
        "meaning": "孵化；培育"
      }
    ]
  },
  "indemnity": {
    "syn": [
      "compensation",
      "reimbursement",
      "restitution",
      "redress"
    ],
    "note": "保险理赔或事故损害保障赔偿金",
    "fam": [
      {
        "text": "indemnify",
        "pos": "v.",
        "meaning": "赔偿；免除责任"
      }
    ]
  },
  "indigenous": {
    "syn": [
      "native",
      "endemic",
      "aboriginal"
    ],
    "note": "本土土生土长的原生物种",
    "fam": [
      {
        "text": "indigene",
        "pos": "n.",
        "meaning": "原住民"
      }
    ]
  },
  "indispensable": {
    "syn": [
      "essential",
      "crucial",
      "vital",
      "imperative",
      "requisite"
    ],
    "note": "雅思大作文首选替代 important 的顶流高级词汇：play an indispensable role in",
    "fam": [
      {
        "text": "dispense with",
        "pos": "v.",
        "meaning": "免除；摒弃"
      }
    ]
  },
  "induce": {
    "syn": [
      "cause",
      "provoke",
      "prompt",
      "engender"
    ],
    "note": "诱导导致某种生理或心理反应：induce sleep/anxiety",
    "fam": [
      {
        "text": "induction",
        "pos": "n.",
        "meaning": "归纳法；感应"
      }
    ]
  },
  "induction": {
    "syn": [
      "bottom-up reasoning",
      "generalization"
    ],
    "note": "从大量观察样本归纳抽象出规律的归纳法",
    "fam": [
      {
        "text": "induce",
        "pos": "v.",
        "meaning": "引起；归纳"
      },
      {
        "text": "inductive",
        "pos": "adj.",
        "meaning": "归纳的"
      }
    ]
  },
  "inequality": {
    "syn": [
      "disparity",
      "imbalance",
      "gap",
      "unevenness"
    ],
    "note": "income inequality 收入差距；gender inequality 性别不平等",
    "fam": [
      {
        "text": "equal",
        "pos": "adj.",
        "meaning": "平等的"
      },
      {
        "text": "equality",
        "pos": "n.",
        "meaning": "平等"
      }
    ]
  },
  "inevitably": {
    "syn": [
      "unavoidably",
      "inescapably",
      "necessarily",
      "certainly"
    ],
    "note": "学术写作阐述逻辑必然走向的高频副词",
    "fam": [
      {
        "text": "inevitable",
        "pos": "adj.",
        "meaning": "不可避免的"
      }
    ]
  },
  "infant": {
    "syn": [
      "baby",
      "newborn",
      "toddler"
    ],
    "note": "严格把控新生儿重症监护以大幅压减婴儿死亡率",
    "fam": [
      {
        "text": "infancy",
        "pos": "n.",
        "meaning": "婴儿期；萌芽阶段"
      }
    ]
  },
  "inflation": {
    "syn": [
      "price increase",
      "currency depreciation",
      "escalation of prices"
    ],
    "note": "通货膨胀导致购买力持续缩水",
    "fam": [
      {
        "text": "inflate",
        "pos": "v.",
        "meaning": "使膨胀"
      },
      {
        "text": "inflationary",
        "pos": "adj.",
        "meaning": "通胀的"
      }
    ]
  },
  "influencer": {
    "syn": [
      "content creator",
      "opinion leader",
      "blogger"
    ],
    "note": "拥有庞大粉丝号召力的新兴网络红人带货者",
    "fam": [
      {
        "text": "influence",
        "pos": "v./n.",
        "meaning": "影响"
      }
    ]
  },
  "infotainment": {
    "syn": [
      "soft news",
      "entertainment journalism"
    ],
    "note": "信息 information 与娱乐 entertainment 的合成词，指资讯娱乐化",
    "fam": []
  },
  "infrastructure": {
    "syn": [
      "framework",
      "underpinning",
      "foundation",
      "facilities"
    ],
    "note": "雅思核心高频词，包括 transport/digital/energy infrastructure",
    "fam": [
      {
        "text": "infrastructural",
        "pos": "adj.",
        "meaning": "基础设施的"
      }
    ]
  },
  "infringement": {
    "syn": [
      "violation",
      "transgression",
      "encroachment",
      "contravention"
    ],
    "note": "常指法律或知识产权的侵权：copyright infringement",
    "fam": [
      {
        "text": "infringe",
        "pos": "v.",
        "meaning": "侵犯；违背"
      }
    ]
  },
  "inhabitant": {
    "syn": [
      "resident",
      "dweller",
      "citizen",
      "occupant"
    ],
    "note": "城市常住居民：city/urban inhabitants",
    "fam": [
      {
        "text": "inhabit",
        "pos": "v.",
        "meaning": "栖居于"
      }
    ]
  },
  "inherit": {
    "syn": [
      "acquire",
      "succeed to",
      "receive",
      "take over"
    ],
    "note": "既可继承房产遗产，也可继承遗传基因或前人传统",
    "fam": [
      {
        "text": "inheritance",
        "pos": "n.",
        "meaning": "继承权；遗产"
      },
      {
        "text": "inheritor",
        "pos": "n.",
        "meaning": "继承人"
      }
    ]
  },
  "inoculate": {
    "syn": [
      "vaccinate",
      "inject",
      "immunize"
    ],
    "note": "按期为适龄儿童打预防针接种疫苗",
    "fam": [
      {
        "text": "inoculation",
        "pos": "n.",
        "meaning": "接种"
      }
    ]
  },
  "inquisitive": {
    "syn": [
      "curious",
      "inquiring",
      "probing"
    ],
    "note": "积极探索的好奇求知心",
    "fam": [
      {
        "text": "inquire",
        "pos": "v.",
        "meaning": "询问，探究"
      },
      {
        "text": "inquisition",
        "pos": "n.",
        "meaning": "探究"
      }
    ]
  },
  "inscrutable": {
    "syn": [
      "enigmatic",
      "mysterious",
      "unfathomable",
      "impenetrable"
    ],
    "note": "深不可测、神情冷峻难以捉摸透彻的：an inscrutable smile",
    "fam": []
  },
  "insolvency": {
    "syn": [
      "bankruptcy",
      "ruin",
      "financial failure",
      "default"
    ],
    "note": "企业或个人资产不足以清偿到期债务的破产状态",
    "fam": [
      {
        "text": "insolvent",
        "pos": "adj.",
        "meaning": "破产无清偿能力的"
      },
      {
        "text": "solvent",
        "pos": "adj.",
        "meaning": "有清偿能力的"
      }
    ]
  },
  "insolvent": {
    "syn": [
      "bankrupt",
      "broke",
      "ruined",
      "in default"
    ],
    "note": "无力偿还到期债务的破产状态",
    "fam": [
      {
        "text": "insolvency",
        "pos": "n.",
        "meaning": "破产清算"
      }
    ]
  },
  "insomnia": {
    "syn": [
      "sleeplessness",
      "wakefulness",
      "restlessness"
    ],
    "note": "慢性失眠多梦症：suffer from severe insomnia",
    "fam": [
      {
        "text": "insomniac",
        "pos": "n.",
        "meaning": "失眠症患者"
      }
    ]
  },
  "instil": {
    "syn": [
      "impart",
      "infuse",
      "ingrain"
    ],
    "note": "润物细无声地向孩子心中灌输品德价值观",
    "fam": [
      {
        "text": "instillation",
        "pos": "n.",
        "meaning": "灌输"
      }
    ]
  },
  "insularity": {
    "syn": [
      "parochialism",
      "narrow-mindedness",
      "provincialism",
      "isolation"
    ],
    "note": "闭关自守、与世隔绝的岛民狭隘自私心态",
    "fam": [
      {
        "text": "insular",
        "pos": "adj.",
        "meaning": "海岛的；狭隘闭塞的"
      }
    ]
  },
  "insulate": {
    "syn": [
      "shield",
      "protect",
      "isolate",
      "cushion"
    ],
    "note": "做保温隔热，也可引申为保护免受外界经济动荡冲击",
    "fam": [
      {
        "text": "insulation",
        "pos": "n.",
        "meaning": "隔离；绝缘"
      }
    ]
  },
  "insulation": {
    "syn": [
      "thermal shielding",
      "proofing",
      "lagging",
      "barrier"
    ],
    "note": "住宅墙体或窗户的节能保温隔热层：thermal/sound insulation",
    "fam": [
      {
        "text": "insulate",
        "pos": "v.",
        "meaning": "隔离；使绝缘"
      }
    ]
  },
  "insurmountable": {
    "syn": [
      "unconquerable",
      "invincible",
      "impassable",
      "overwhelming"
    ],
    "note": "看似不可战胜、难以逾越的艰难阻碍：insurmountable obstacles/challenges",
    "fam": []
  },
  "intangible": {
    "syn": [
      "non-material",
      "incorporeal",
      "ethereal"
    ],
    "note": "昆曲皮影戏针灸等非物质文化遗产",
    "fam": [
      {
        "text": "intangibility",
        "pos": "n.",
        "meaning": "无形性"
      }
    ]
  },
  "integration": {
    "syn": [
      "incorporation",
      "assimilation",
      "amalgamation",
      "unification"
    ],
    "note": "移民融入当地主流社会的文化与经济进程",
    "fam": [
      {
        "text": "integrate",
        "pos": "v.",
        "meaning": "使融入；整合"
      },
      {
        "text": "integrated",
        "pos": "adj.",
        "meaning": "一体化的"
      }
    ]
  },
  "integrity": {
    "syn": [
      "honesty",
      "uprightness",
      "probity",
      "soundness"
    ],
    "note": "既指学术廉洁与做人道德操守（academic integrity），也指建筑结构坚固完整",
    "fam": []
  },
  "intellectual": {
    "syn": [
      "academic",
      "scholarly",
      "cerebral"
    ],
    "note": "追求真理的知识分子；高层次智力心智维度的",
    "fam": [
      {
        "text": "intellect",
        "pos": "n.",
        "meaning": "智力，思维才华"
      }
    ]
  },
  "intellectual property": {
    "syn": [
      "IP rights",
      "patents and copyrights"
    ],
    "note": "法律严格保护的专利与知识产权",
    "fam": []
  },
  "intensity": {
    "syn": [
      "vigor",
      "strength",
      "forcefulness",
      "severity"
    ],
    "note": "高强度间歇训练：high-intensity interval training (HIIT)",
    "fam": [
      {
        "text": "intense",
        "pos": "adj.",
        "meaning": "强烈的；紧张的"
      },
      {
        "text": "intensify",
        "pos": "v.",
        "meaning": "加剧；强化"
      }
    ]
  },
  "intensive care": {
    "syn": [
      "critical care",
      "ICU support"
    ],
    "note": "Intensive Care Unit (ICU) 重症监护病房",
    "fam": [
      {
        "text": "intensive",
        "pos": "adj.",
        "meaning": "高强度的；精细的"
      }
    ]
  },
  "interactive": {
    "syn": [
      "two-way",
      "participatory",
      "engaging"
    ],
    "note": "注重互动参与的课堂模式",
    "fam": [
      {
        "text": "interact",
        "pos": "v.",
        "meaning": "相互作用"
      },
      {
        "text": "interaction",
        "pos": "n.",
        "meaning": "互动"
      }
    ]
  },
  "intercultural": {
    "syn": [
      "cross-cultural",
      "transcultural"
    ],
    "note": "跨文化交流与沟通能力：intercultural competence",
    "fam": []
  },
  "interdependence": {
    "syn": [
      "mutual reliance",
      "interconnection"
    ],
    "note": "生物链各环节息息相关休戚与共的相互依存性",
    "fam": [
      {
        "text": "interdependent",
        "pos": "adj.",
        "meaning": "相互依存的"
      }
    ]
  },
  "interest rate": {
    "syn": [
      "borrowing cost",
      "rate of return"
    ],
    "note": "央行宏观调控基准利率：central bank interest rate hike/cut",
    "fam": []
  },
  "interface": {
    "syn": [
      "UI",
      "user boundary",
      "interaction channel"
    ],
    "note": "直观简洁的用户人机交互界面",
    "fam": [
      {
        "text": "interact",
        "pos": "v.",
        "meaning": "互动交互"
      }
    ]
  },
  "interlocking": {
    "syn": [
      "intertwined",
      "meshing",
      "fitted together"
    ],
    "note": "中国传统榫卯结构或咬合联锁地砖：interlocking mechanism",
    "fam": []
  },
  "intermittent": {
    "syn": [
      "sporadic",
      "periodic",
      "erratic"
    ],
    "note": "风电与光伏看天吃饭的间歇性波动特点",
    "fam": [
      {
        "text": "intermittently",
        "pos": "adv.",
        "meaning": "间歇地"
      }
    ]
  },
  "intermodal": {
    "syn": [
      "multimodal",
      "integrated logistics"
    ],
    "note": "将集装箱无缝在火车、货轮、卡车间转运的多式联运",
    "fam": []
  },
  "internship": {
    "syn": [
      "traineeship",
      "practical placement",
      "probation"
    ],
    "note": "大学生在校期间的职场实习",
    "fam": [
      {
        "text": "intern",
        "pos": "n./v.",
        "meaning": "实习生；做实习"
      }
    ]
  },
  "interoperability": {
    "syn": [
      "compatibility",
      "interchangeability",
      "integration"
    ],
    "note": "写作中常论述不同软硬件系统协同工作能力",
    "fam": [
      {
        "text": "interoperable",
        "pos": "adj.",
        "meaning": "可互操作的；兼容的"
      }
    ]
  },
  "interpersonal": {
    "syn": [
      "social",
      "interactive",
      "relational"
    ],
    "note": "人际交往与人际沟通能力：interpersonal skills/relationships",
    "fam": []
  },
  "interplanetary": {
    "syn": [
      "between-planet",
      "solar-system wide"
    ],
    "note": "",
    "fam": [
      {
        "text": "planet",
        "pos": "n.",
        "meaning": "行星"
      },
      {
        "text": "planetary",
        "pos": "adj.",
        "meaning": "行星的"
      }
    ]
  },
  "interstellar": {
    "syn": [
      "deep-space",
      "cosmic",
      "intergalactic"
    ],
    "note": "inter- (之间) + stellar (恒星的)，如 interstellar travel",
    "fam": [
      {
        "text": "stellar",
        "pos": "adj.",
        "meaning": "恒星的"
      }
    ]
  },
  "intertwine": {
    "syn": [
      "interconnect",
      "weave together",
      "entangle",
      "link"
    ],
    "note": "环境与经济发展唇齿相依错综复杂交织：closely intertwined",
    "fam": [
      {
        "text": "twine",
        "pos": "v./n.",
        "meaning": "缠绕；细绳"
      }
    ]
  },
  "interval": {
    "syn": [
      "break",
      "gap",
      "intermission",
      "pause"
    ],
    "note": "间歇训练中的恢复组间时间：rest interval",
    "fam": [
      {
        "text": "intervene",
        "pos": "v.",
        "meaning": "介入；干预"
      }
    ]
  },
  "intrinsic": {
    "syn": [
      "innate",
      "inherent",
      "inborn",
      "essential"
    ],
    "note": "intrinsic motivation（源于内心真正热爱和好奇心的内在驱动力）",
    "fam": [
      {
        "text": "intrinsically",
        "pos": "adv.",
        "meaning": "从本质上地"
      }
    ]
  },
  "introversion": {
    "syn": [
      "shyness",
      "inwardness",
      "reserve",
      "reticence"
    ],
    "note": "心理学大五人格特质：内向性格，与 extroversion 相对",
    "fam": [
      {
        "text": "introvert",
        "pos": "n./adj.",
        "meaning": "内向的人"
      },
      {
        "text": "introverted",
        "pos": "adj.",
        "meaning": "内向的"
      }
    ]
  },
  "introvert": {
    "syn": [
      "solitary person",
      "quiet personality"
    ],
    "note": "喜静独处充电的内向者",
    "fam": [
      {
        "text": "introverted",
        "pos": "adj.",
        "meaning": "内向的"
      }
    ]
  },
  "intuition": {
    "syn": [
      "gut feeling",
      "instinct",
      "hunch",
      "sixth sense"
    ],
    "note": "无需经过理性逻辑推理瞬间做出的直觉顿悟",
    "fam": [
      {
        "text": "intuitive",
        "pos": "adj.",
        "meaning": "直觉的；直观易用的"
      }
    ]
  },
  "invaluable": {
    "syn": [
      "priceless",
      "precious",
      "irreplaceable",
      "inestimable"
    ],
    "note": "invaluable 意为‘无价之宝’而非无价值（worthless 才是无价值）",
    "fam": [
      {
        "text": "valuable",
        "pos": "adj.",
        "meaning": "有价值的"
      }
    ]
  },
  "invasive": {
    "syn": [
      "encroaching",
      "alien",
      "intrusive"
    ],
    "note": "外来入侵物种破坏本土生态平衡",
    "fam": [
      {
        "text": "invade",
        "pos": "v.",
        "meaning": "入侵"
      },
      {
        "text": "invasion",
        "pos": "n.",
        "meaning": "入侵"
      }
    ]
  },
  "inventory": {
    "syn": [
      "stock",
      "supplies",
      "stockpile",
      "catalogue"
    ],
    "note": "仓库物资库存；管理理念中有 zero-inventory（零库存）",
    "fam": [
      {
        "text": "inventorize",
        "pos": "v.",
        "meaning": "盘点存货"
      }
    ]
  },
  "irony": {
    "syn": [
      "sarcasm",
      "paradox",
      "incongruity",
      "mockery"
    ],
    "note": "言不由衷的反语，或造化弄人的戏剧性反讽：tragic irony",
    "fam": [
      {
        "text": "ironic",
        "pos": "adj.",
        "meaning": "讽刺幽默的"
      },
      {
        "text": "ironically",
        "pos": "adv.",
        "meaning": "讽刺的是"
      }
    ]
  },
  "irreversible": {
    "syn": [
      "permanent",
      "irrevocable",
      "incurable"
    ],
    "note": "不可逆转的生态破坏损失",
    "fam": [
      {
        "text": "reversible",
        "pos": "adj.",
        "meaning": "可逆的"
      }
    ]
  },
  "isometric": {
    "syn": [
      "static-contraction",
      "equal-length"
    ],
    "note": "静力性等长收缩训练（如平板支撑 plank）",
    "fam": [
      {
        "text": "metric",
        "pos": "adj.",
        "meaning": "度量的"
      }
    ]
  },
  "itinerary": {
    "syn": [
      "travel schedule",
      "route",
      "journey plan",
      "agenda"
    ],
    "note": "列有日期、航班和景点的详细旅行行程单",
    "fam": []
  },
  "jargon": {
    "syn": [
      "terminology",
      "slang",
      "cant",
      "specialized vocabulary"
    ],
    "note": "非专业外行如听天书的行业专业术语行话",
    "fam": []
  },
  "journalism": {
    "syn": [
      "press",
      "news media",
      "reportage",
      "broadcasting"
    ],
    "note": "",
    "fam": [
      {
        "text": "journalist",
        "pos": "n.",
        "meaning": "记者"
      },
      {
        "text": "journalistic",
        "pos": "adj.",
        "meaning": "新闻业的"
      }
    ]
  },
  "judiciary": {
    "syn": [
      "judicial system",
      "the courts",
      "judicature"
    ],
    "note": "三权分立中的司法权/司法系统：an independent judiciary",
    "fam": [
      {
        "text": "judicial",
        "pos": "adj.",
        "meaning": "司法的；审判的"
      },
      {
        "text": "judge",
        "pos": "n./v.",
        "meaning": "法官；评判"
      }
    ]
  },
  "jurisdiction": {
    "syn": [
      "authority",
      "competence",
      "domain",
      "sphere"
    ],
    "note": "法院或执法机关管辖权与属地范围：within the court's jurisdiction",
    "fam": [
      {
        "text": "juridical",
        "pos": "adj.",
        "meaning": "司法的；法律上的"
      }
    ]
  },
  "justify": {
    "syn": [
      "vindicate",
      "substantiate",
      "defend",
      "validate"
    ],
    "note": "证明其行为的正当性合理性：justify government expenditure",
    "fam": [
      {
        "text": "justification",
        "pos": "n.",
        "meaning": "正当理由"
      },
      {
        "text": "justified",
        "pos": "adj.",
        "meaning": "无可厚非的"
      }
    ]
  },
  "juvenile": {
    "syn": [
      "adolescent",
      "young person",
      "youth"
    ],
    "note": "针对未成年人走上弯路的青少年违法犯罪挽救帮教",
    "fam": [
      {
        "text": "juvenility",
        "pos": "n.",
        "meaning": "年轻，不成熟"
      }
    ]
  },
  "juxtapose": {
    "syn": [
      "contrast",
      "compare",
      "place side by side"
    ],
    "note": "将古建筑与现代摩天大楼并置对比：juxtapose the ancient with the modern",
    "fam": [
      {
        "text": "juxtaposition",
        "pos": "n.",
        "meaning": "并列对比"
      }
    ]
  },
  "juxtaposition": {
    "syn": [
      "contrast",
      "comparison",
      "parallelism",
      "collocation"
    ],
    "note": "将两种截然不同的事物并置排列以产生强烈对比效果",
    "fam": [
      {
        "text": "juxtapose",
        "pos": "v.",
        "meaning": "并置对比"
      }
    ]
  },
  "kinesthetic": {
    "syn": [
      "hands-on",
      "tactile",
      "physical"
    ],
    "note": "通过身体力行动手操作来学习的动觉学习风格",
    "fam": []
  },
  "kinship": {
    "syn": [
      "blood relation",
      "affinity",
      "family ties",
      "solidarity"
    ],
    "note": "人类学亲属血缘纽带，也引申为志趣相投的亲密感",
    "fam": [
      {
        "text": "kinsman",
        "pos": "n.",
        "meaning": "男性亲属"
      },
      {
        "text": "kin",
        "pos": "n.",
        "meaning": "家族亲戚"
      }
    ]
  },
  "lag": {
    "syn": [
      "fall behind",
      "straggle",
      "delay",
      "slackness"
    ],
    "note": "政策见效的滞后性：time lag between policy and results",
    "fam": [
      {
        "text": "laggard",
        "pos": "n.",
        "meaning": "落后者"
      }
    ]
  },
  "landfill": {
    "syn": [
      "waste dump",
      "refuse tip"
    ],
    "note": "超负荷运转的城市生活垃圾综合填埋场",
    "fam": []
  },
  "landslide": {
    "syn": [
      "mudflow",
      "rockfall"
    ],
    "note": "暴雨引发的山体大面积松动崩塌滑坡泥石流",
    "fam": []
  },
  "latency": {
    "syn": [
      "time delay",
      "lag",
      "response interval"
    ],
    "note": "毫秒级超低数据空中传输网络延迟",
    "fam": []
  },
  "lateral thinking": {
    "syn": [
      "creative thinking",
      "out-of-the-box thinking"
    ],
    "note": "跳出常规死胡同、另辟蹊径寻找解法的水平横向思维",
    "fam": []
  },
  "lean": {
    "syn": [
      "efficient",
      "streamlined",
      "spare",
      "economical"
    ],
    "note": "工业界著名的 lean manufacturing（精益生产）",
    "fam": [
      {
        "text": "leanness",
        "pos": "n.",
        "meaning": "精益；精瘦"
      }
    ]
  },
  "lecture": {
    "syn": [
      "talk",
      "presentation",
      "address"
    ],
    "note": "大学大班讲座授课，区别于研讨课 seminar",
    "fam": [
      {
        "text": "lecturer",
        "pos": "n.",
        "meaning": "讲师"
      }
    ]
  },
  "legacy": {
    "syn": [
      "heritage",
      "bequest",
      "tradition",
      "endowment"
    ],
    "note": "历史遗赠的丰厚遗产或精神传承",
    "fam": [
      {
        "text": "legator",
        "pos": "n.",
        "meaning": "立遗嘱留产者"
      }
    ]
  },
  "legislation": {
    "syn": [
      "statutes",
      "lawmaking",
      "acts",
      "regulations"
    ],
    "note": "通过立法手段解决社会痛点：introduce new legislation",
    "fam": [
      {
        "text": "legislate",
        "pos": "v.",
        "meaning": "立法"
      },
      {
        "text": "legislative",
        "pos": "adj.",
        "meaning": "立法的"
      },
      {
        "text": "legislator",
        "pos": "n.",
        "meaning": "立法委员"
      }
    ]
  },
  "leisure": {
    "syn": [
      "free time",
      "spare time",
      "relaxation",
      "recreation"
    ],
    "note": "闲暇与娱乐时光：leisure activities",
    "fam": [
      {
        "text": "leisurely",
        "pos": "adj./adv.",
        "meaning": "悠闲从容的"
      }
    ]
  },
  "lexicon": {
    "syn": [
      "vocabulary",
      "wordstock",
      "glossary"
    ],
    "note": "某一专业领域或脑海中的全部词汇储备长城",
    "fam": [
      {
        "text": "lexical",
        "pos": "adj.",
        "meaning": "词汇的"
      }
    ]
  },
  "liability": {
    "syn": [
      "debt",
      "obligation",
      "encumbrance",
      "hindrance"
    ],
    "note": "既指财务负债，也指法律责任或拖后腿的包袱",
    "fam": [
      {
        "text": "liable",
        "pos": "adj.",
        "meaning": "负有责任的；倾向于"
      }
    ]
  },
  "libel": {
    "syn": [
      "written defamation",
      "printed slander",
      "calumny"
    ],
    "note": "以书面、报刊或网络文字形式构成的文字诽谤罪",
    "fam": [
      {
        "text": "libelous",
        "pos": "adj.",
        "meaning": "诽谤性的"
      }
    ]
  },
  "life expectancy": {
    "syn": [
      "expected lifespan",
      "average age at death"
    ],
    "note": "国民人均预期健康自理寿命大幅延长",
    "fam": []
  },
  "lifecycle": {
    "syn": [
      "life span",
      "cradle-to-grave"
    ],
    "note": "工业产品从制造到报废的全生命周期碳追踪",
    "fam": []
  },
  "lifestyle": {
    "syn": [
      "way of life",
      "living habits"
    ],
    "note": "长年熬夜高糖高盐的不良生活作息方式",
    "fam": []
  },
  "ligament": {
    "syn": [
      "connective tissue",
      "fibrous band"
    ],
    "note": "连接骨与骨之间的韧带（如 ACL 交叉韧带）",
    "fam": [
      {
        "text": "ligamentous",
        "pos": "adj.",
        "meaning": "韧带的"
      }
    ]
  },
  "light pollution": {
    "syn": [
      "luminous glare",
      "skyglow"
    ],
    "note": "夜间刺目霓虹射灯夺走璀璨星空的城市光污染",
    "fam": []
  },
  "lineage": {
    "syn": [
      "pedigree",
      "ancestry",
      "descent"
    ],
    "note": "名门望族族谱清晰记载传承数十代的一脉相承血统世系家族谱系",
    "fam": []
  },
  "linguistic": {
    "syn": [
      "language-related",
      "grammatical"
    ],
    "note": "语言学层面的客观规律与演变脉络",
    "fam": [
      {
        "text": "linguist",
        "pos": "n.",
        "meaning": "语言学家"
      },
      {
        "text": "linguistics",
        "pos": "n.",
        "meaning": "语言学"
      }
    ]
  },
  "liquidation": {
    "syn": [
      "winding up",
      "clearance sale",
      "cash conversion"
    ],
    "note": "破产清算变现以偿还债权人债务",
    "fam": [
      {
        "text": "liquidate",
        "pos": "v.",
        "meaning": "清盘清算；变现"
      }
    ]
  },
  "liquidity": {
    "syn": [
      "cash availability",
      "fluid capital"
    ],
    "note": "商业银行抵御挤兑挤提的充足现金流动性",
    "fam": [
      {
        "text": "liquid",
        "pos": "adj.",
        "meaning": "流动的，易变现的"
      }
    ]
  },
  "literacy": {
    "syn": [
      "reading ability",
      "scholarliness",
      "proficiency"
    ],
    "note": "读写能力；拓展词有 computer literacy (计算机素养)",
    "fam": [
      {
        "text": "illiteracy",
        "pos": "n.",
        "meaning": "文盲"
      },
      {
        "text": "literate",
        "pos": "adj.",
        "meaning": "有读写能力的"
      }
    ]
  },
  "litigation": {
    "syn": [
      "lawsuit",
      "legal dispute",
      "court action"
    ],
    "note": "繁琐耗时的民商事打官司诉讼程序",
    "fam": [
      {
        "text": "litigate",
        "pos": "v.",
        "meaning": "打官司；诉讼"
      },
      {
        "text": "litigant",
        "pos": "n.",
        "meaning": "诉讼当事人"
      }
    ]
  },
  "litter": {
    "syn": [
      "rubbish",
      "trash",
      "debris"
    ],
    "note": "景区沿途随手乱扔的饮料瓶纸屑垃圾杂物",
    "fam": []
  },
  "livability": {
    "syn": [
      "quality of life",
      "residential comfort"
    ],
    "note": "联合国评选的全球最宜居城市指标：livability ranking",
    "fam": [
      {
        "text": "livable",
        "pos": "adj.",
        "meaning": "适宜居住的"
      }
    ]
  },
  "lobbying": {
    "syn": [
      "advocacy",
      "solicitation",
      "political campaigning"
    ],
    "note": "利益集团游说议员影响立法的政治公关行动",
    "fam": [
      {
        "text": "lobby",
        "pos": "v./n.",
        "meaning": "游说；大堂"
      },
      {
        "text": "lobbyist",
        "pos": "n.",
        "meaning": "说客"
      }
    ]
  },
  "logistics": {
    "syn": [
      "supply chain",
      "distribution",
      "transportation",
      "handling"
    ],
    "note": "现代现代物流配送体系：logistics network",
    "fam": [
      {
        "text": "logistical",
        "pos": "adj.",
        "meaning": "物流后勤的"
      }
    ]
  },
  "longevity": {
    "syn": [
      "long life",
      "durability",
      "endurance"
    ],
    "note": "地中海清淡膳食与乐观心态有助健康长寿长寿",
    "fam": [
      {
        "text": "long-lived",
        "pos": "adj.",
        "meaning": "长寿的"
      }
    ]
  },
  "longitudinal": {
    "syn": [
      "long-term",
      "follow-up",
      "multi-year"
    ],
    "note": "跨越数年乃至数十年的跟踪随访纵向对比研究",
    "fam": []
  },
  "loyalty": {
    "syn": [
      "allegiance",
      "fidelity",
      "commitment",
      "devotion"
    ],
    "note": "客户粘性与忠诚度：brand/customer loyalty",
    "fam": [
      {
        "text": "loyal",
        "pos": "adj.",
        "meaning": "忠诚的"
      }
    ]
  },
  "lucidity": {
    "syn": [
      "clarity",
      "clearness",
      "coherence",
      "sobriety"
    ],
    "note": "大脑极度清醒澄澈无杂念：mental lucidity",
    "fam": [
      {
        "text": "lucid",
        "pos": "adj.",
        "meaning": "神志清醒的；清晰明了的"
      }
    ]
  },
  "lunar": {
    "syn": [
      "moon-related",
      "moonly"
    ],
    "note": "与 solar（太阳的）相对，如 lunar exploration/landing",
    "fam": [
      {
        "text": "moon",
        "pos": "n.",
        "meaning": "月球"
      }
    ]
  },
  "lyricism": {
    "syn": [
      "poetic expression",
      "melodiousness",
      "expressiveness"
    ],
    "note": "文学或旋律中洋溢的浪漫诗情画意",
    "fam": [
      {
        "text": "lyrical",
        "pos": "adj.",
        "meaning": "抒情优美的"
      },
      {
        "text": "lyrics",
        "pos": "n.",
        "meaning": "歌词"
      }
    ]
  },
  "machiavellian": {
    "syn": [
      "cunning",
      "scheming",
      "devious",
      "opportunistic"
    ],
    "note": "马基雅维利式权谋算计、为达目的不择手段的冷血心机",
    "fam": [
      {
        "text": "Machiavellianism",
        "pos": "n.",
        "meaning": "马基雅维利主义"
      }
    ]
  },
  "machine learning": {
    "syn": [
      "ML",
      "predictive training"
    ],
    "note": "基于数据训练自主归纳规律的机器学习",
    "fam": []
  },
  "machining": {
    "syn": [
      "milling",
      "tooling",
      "metalworking",
      "turning"
    ],
    "note": "",
    "fam": [
      {
        "text": "machine",
        "pos": "n./v.",
        "meaning": "机械；切削加工"
      },
      {
        "text": "machinist",
        "pos": "n.",
        "meaning": "机械加工师"
      }
    ]
  },
  "macroeconomics": {
    "syn": [
      "broad economics",
      "national economy"
    ],
    "note": "研究通胀失业率国家总产出的宏观经济学",
    "fam": [
      {
        "text": "macroeconomic",
        "pos": "adj.",
        "meaning": "宏观经济的"
      }
    ]
  },
  "magnitude": {
    "syn": [
      "intensity",
      "scale",
      "severity"
    ],
    "note": "能量释放级别的里氏震级规模",
    "fam": []
  },
  "malignant": {
    "syn": [
      "cancerous",
      "deadly",
      "harmful",
      "destructive"
    ],
    "note": "恶性肿瘤：malignant tumor，反义词 benign",
    "fam": [
      {
        "text": "malignancy",
        "pos": "n.",
        "meaning": "恶性肿瘤；恶性"
      }
    ]
  },
  "malnutrition": {
    "syn": [
      "under-nutrition",
      "nutrient deficiency"
    ],
    "note": "贫困战乱地区幼儿蛋白质严重摄入不足的营养不良",
    "fam": [
      {
        "text": "nutrition",
        "pos": "n.",
        "meaning": "营养"
      },
      {
        "text": "nutritious",
        "pos": "adj.",
        "meaning": "有营养的"
      }
    ]
  },
  "malware": {
    "syn": [
      "malicious software",
      "computer virus",
      "trojan"
    ],
    "note": "勒索蠕虫恶意木马病毒程序",
    "fam": []
  },
  "manifest": {
    "syn": [
      "display",
      "exhibit",
      "demonstrate",
      "evince"
    ],
    "note": "作动词表在外表清晰显露表明，作形容词表显而易见的",
    "fam": [
      {
        "text": "manifestation",
        "pos": "n.",
        "meaning": "显现形式"
      },
      {
        "text": "manifestly",
        "pos": "adv.",
        "meaning": "显然地"
      }
    ]
  },
  "manifestation": {
    "syn": [
      "expression",
      "embodiment",
      "reflection",
      "sign"
    ],
    "note": "某种深层社会问题在外在的典型表现表征：a manifestation of deep inequality",
    "fam": [
      {
        "text": "manifest",
        "pos": "v./adj.",
        "meaning": "显现；明显的"
      }
    ]
  },
  "manipulation": {
    "syn": [
      "alteration",
      "engineering",
      "exploitation",
      "handling"
    ],
    "note": "可指科技操纵（genetic manipulation），也可指人际欺骗操控",
    "fam": [
      {
        "text": "manipulate",
        "pos": "v.",
        "meaning": "操纵；控制"
      },
      {
        "text": "manipulative",
        "pos": "adj.",
        "meaning": "善于操纵人心的"
      }
    ]
  },
  "manuscript": {
    "syn": [
      "handwritten document",
      "scroll",
      "codex"
    ],
    "note": "藏经洞深处封存千年的敦煌手抄本珍稀古代手稿",
    "fam": []
  },
  "marginalize": {
    "syn": [
      "alienate",
      "exclude",
      "isolate",
      "sideline"
    ],
    "note": "把弱势群体边缘化或排挤：marginalize minority groups",
    "fam": [
      {
        "text": "marginal",
        "pos": "adj.",
        "meaning": "微小的；边缘的"
      },
      {
        "text": "marginalization",
        "pos": "n.",
        "meaning": "边缘化"
      }
    ]
  },
  "marginalized": {
    "syn": [
      "disadvantaged",
      "deprived",
      "isolated",
      "excluded"
    ],
    "note": "生活在社会边缘遭排斥的人群：marginalized communities",
    "fam": [
      {
        "text": "margin",
        "pos": "n.",
        "meaning": "边缘；利润"
      }
    ]
  },
  "maritime": {
    "syn": [
      "marine",
      "oceanic",
      "coastal"
    ],
    "note": "近海与深海海洋生态环境",
    "fam": []
  },
  "masterpiece": {
    "syn": [
      "magnum opus",
      "classic",
      "tour de force",
      "work of genius"
    ],
    "note": "达芬奇《蒙娜丽莎》等级的传世不朽艺术杰作",
    "fam": []
  },
  "maternal": {
    "syn": [
      "motherly",
      "matrilineal",
      "matriarchal"
    ],
    "note": "maternal mortality 产妇死亡率，maternity leave 产假",
    "fam": [
      {
        "text": "maternity",
        "pos": "n.",
        "meaning": "母亲身份；产科"
      }
    ]
  },
  "matriarchy": {
    "syn": [
      "female dominance",
      "matriarchal system"
    ],
    "note": "",
    "fam": [
      {
        "text": "matriarchal",
        "pos": "adj.",
        "meaning": "母系社会的"
      },
      {
        "text": "matriarch",
        "pos": "n.",
        "meaning": "女家长；女族长"
      }
    ]
  },
  "mechatronics": {
    "syn": [
      "electromechanical systems"
    ],
    "note": "机械电子控制跨学科机电一体化",
    "fam": []
  },
  "megacity": {
    "syn": [
      "metropolis",
      "supercity",
      "giant city"
    ],
    "note": "联合国定义常住人口超千万的超级特大城市（如东京、上海）",
    "fam": []
  },
  "megalopolis": {
    "syn": [
      "conurbation",
      "urban corridor",
      "city cluster"
    ],
    "note": "沿海或交通干线形成的巨型连绵城市群（如长三角城市群）",
    "fam": []
  },
  "megawatt": {
    "syn": [
      "MW",
      "power unit"
    ],
    "note": "发电机额定输出装机功率兆瓦",
    "fam": []
  },
  "melancholy": {
    "syn": [
      "sadness",
      "sorrow",
      "pensiveness",
      "dejection",
      "woe"
    ],
    "note": "带有一种诗意与深思忧郁气质的情绪：a mood of deep melancholy",
    "fam": [
      {
        "text": "melancholic",
        "pos": "adj.",
        "meaning": "忧郁伤感的"
      }
    ]
  },
  "memorialize": {
    "syn": [
      "commemorate",
      "honor",
      "immortalize",
      "pay tribute to"
    ],
    "note": "立碑或建馆以缅怀英雄历史：memorialize fallen heroes",
    "fam": [
      {
        "text": "memorial",
        "pos": "n./adj.",
        "meaning": "纪念碑；纪念的"
      },
      {
        "text": "memory",
        "pos": "n.",
        "meaning": "记忆"
      }
    ]
  },
  "mentor": {
    "syn": [
      "adviser",
      "guide",
      "counselor",
      "coach"
    ],
    "note": "指良师益友或经验丰富的传帮带指导者",
    "fam": [
      {
        "text": "mentorship",
        "pos": "n.",
        "meaning": "导师制，指导关系"
      }
    ]
  },
  "mentorship": {
    "syn": [
      "guidance",
      "tutelage",
      "advising",
      "coaching"
    ],
    "note": "职场老员工对年轻新人的良师益友带教制",
    "fam": [
      {
        "text": "mentor",
        "pos": "n./v.",
        "meaning": "导师；指导"
      }
    ]
  },
  "merchandise": {
    "syn": [
      "goods",
      "commodities",
      "wares",
      "stock"
    ],
    "note": "不可数名词，商店货架上的零售商品",
    "fam": []
  },
  "merchandising": {
    "syn": [
      "product sales",
      "promotion",
      "retailing"
    ],
    "note": "周边衍生商品售卖与货架陈列销售",
    "fam": [
      {
        "text": "merchandise",
        "pos": "n.",
        "meaning": "商品"
      }
    ]
  },
  "merger": {
    "syn": [
      "amalgamation",
      "combination",
      "consolidation"
    ],
    "note": "两家头部科技企业的世纪并购案",
    "fam": [
      {
        "text": "merge",
        "pos": "v.",
        "meaning": "合并兼并"
      }
    ]
  },
  "meritocracy": {
    "syn": [
      "ability-based system",
      "merit-based rule"
    ],
    "note": "凭真才实学公平竞争、不看家庭出身背景的唯才是举制度",
    "fam": [
      {
        "text": "meritocratic",
        "pos": "adj.",
        "meaning": "唯才是举的"
      }
    ]
  },
  "metabolism": {
    "syn": [
      "biochemical process",
      "metabolic rate"
    ],
    "note": "人体能量转化代谢过程：basal metabolism（基础代谢）",
    "fam": [
      {
        "text": "metabolic",
        "pos": "adj.",
        "meaning": "新陈代谢的"
      },
      {
        "text": "metabolize",
        "pos": "v.",
        "meaning": "代谢消耗"
      }
    ]
  },
  "metacognition": {
    "syn": [
      "self-reflection",
      "thinking about thinking"
    ],
    "note": "对自身思考过程、记忆策略进行监视与调整的‘元认知’能力",
    "fam": [
      {
        "text": "metacognitive",
        "pos": "adj.",
        "meaning": "元认知的"
      }
    ]
  },
  "metaphor": {
    "syn": [
      "allegory",
      "figure of speech",
      "analogy"
    ],
    "note": "不带 like 或 as 的暗喻比喻修辞",
    "fam": [
      {
        "text": "metaphorical",
        "pos": "adj.",
        "meaning": "隐喻性的"
      }
    ]
  },
  "metastasis": {
    "syn": [
      "spread",
      "proliferation",
      "dissemination"
    ],
    "note": "肿瘤细胞经血液或淋巴向身体远端的转移",
    "fam": [
      {
        "text": "metastasize",
        "pos": "v.",
        "meaning": "癌细胞转移扩散"
      },
      {
        "text": "metastatic",
        "pos": "adj.",
        "meaning": "转移性的"
      }
    ]
  },
  "meteorite": {
    "syn": [
      "aerolite",
      "shooting star fragment",
      "bolide"
    ],
    "note": "meteor（流星现象），meteoroid（流星体），meteorite（落到地表的陨石）",
    "fam": [
      {
        "text": "meteor",
        "pos": "n.",
        "meaning": "流星"
      }
    ]
  },
  "meteorological": {
    "syn": [
      "weather-related",
      "climatic",
      "atmospheric"
    ],
    "note": "气象观测预报",
    "fam": [
      {
        "text": "meteorology",
        "pos": "n.",
        "meaning": "气象学"
      },
      {
        "text": "meteorologist",
        "pos": "n.",
        "meaning": "气象学家"
      }
    ]
  },
  "methane": {
    "syn": [
      "CH4",
      "marsh gas"
    ],
    "note": "强效温室气体甲烷沼气",
    "fam": []
  },
  "methodology": {
    "syn": [
      "research methods",
      "approach",
      "framework"
    ],
    "note": "严密规范的科学研究方法论体系",
    "fam": [
      {
        "text": "methodological",
        "pos": "adj.",
        "meaning": "方法论的"
      }
    ]
  },
  "metropolis": {
    "syn": [
      "megacity",
      "major hub",
      "capital city"
    ],
    "note": "常住人口突破千万级的超级特大国际中心大都市",
    "fam": [
      {
        "text": "metropolitan",
        "pos": "adj.",
        "meaning": "大都市的"
      }
    ]
  },
  "metropolitan": {
    "syn": [
      "cosmopolitan",
      "civic",
      "urban",
      "major city"
    ],
    "note": "metropolitan area 指包含郊区卫星城在内的大都市圈",
    "fam": [
      {
        "text": "metropolis",
        "pos": "n.",
        "meaning": "大都会"
      }
    ]
  },
  "microchip": {
    "syn": [
      "semiconductor chip",
      "integrated circuit"
    ],
    "note": "指甲盖大小的高性能芯片集成电路",
    "fam": []
  },
  "microeconomics": {
    "syn": [
      "individual economics",
      "firm-level economics"
    ],
    "note": "研究单一消费者与微观企业决策的微观经济学",
    "fam": [
      {
        "text": "microeconomic",
        "pos": "adj.",
        "meaning": "微观经济的"
      }
    ]
  },
  "micromobility": {
    "syn": [
      "light urban transport",
      "first-last mile transit"
    ],
    "note": "解决地铁最后一公里的共享单车、电动滑板车微出行",
    "fam": []
  },
  "microplastic": {
    "syn": [
      "plastic debris",
      "synthetic particle"
    ],
    "note": "渗透进海洋鱼类与人体血液微循环的微塑料颗粒",
    "fam": []
  },
  "migration": {
    "syn": [
      "movement",
      "relocation",
      "trek"
    ],
    "note": "劳动力从欠发达农村向沿海城市群的大规模人口迁移流向",
    "fam": [
      {
        "text": "migrate",
        "pos": "v.",
        "meaning": "迁移"
      },
      {
        "text": "migrant",
        "pos": "n.",
        "meaning": "外来务工移民"
      }
    ]
  },
  "milestone": {
    "syn": [
      "breakthrough",
      "landmark",
      "turning point",
      "benchmark"
    ],
    "note": "人类科技史或个人事业上的重大里程碑：mark a significant milestone",
    "fam": []
  },
  "mindfulness": {
    "syn": [
      "awareness",
      "attention",
      "presence of mind",
      "attentiveness"
    ],
    "note": "起源于东方禅修的‘正念冥想’心理减压法：mindfulness meditation",
    "fam": [
      {
        "text": "mindful",
        "pos": "adj.",
        "meaning": "留心的；觉察的"
      }
    ]
  },
  "minimalism": {
    "syn": [
      "simplicity",
      "reductivism",
      "spare aesthetic"
    ],
    "note": "倡导‘少即是多（Less is more）’的极简主义设计美学",
    "fam": [
      {
        "text": "minimalist",
        "pos": "adj./n.",
        "meaning": "极简主义的；极简主义者"
      }
    ]
  },
  "minority": {
    "syn": [
      "lesser number",
      "underrepresented group"
    ],
    "note": "minority groups/languages（少数族裔群体/少数语种）",
    "fam": [
      {
        "text": "minor",
        "pos": "adj.",
        "meaning": "次要的；少数的"
      }
    ]
  },
  "misdemeanour": {
    "syn": [
      "minor offense",
      "petty crime",
      "infraction"
    ],
    "note": "轻微违法行为，如违章停车、轻微扰乱秩序",
    "fam": [
      {
        "text": "demeanor",
        "pos": "n.",
        "meaning": "举止风度"
      }
    ]
  },
  "misinformation": {
    "syn": [
      "falsehood",
      "misguidance",
      "error",
      "untrue report"
    ],
    "note": "非恶意但失实的错误信息",
    "fam": []
  },
  "misleading": {
    "syn": [
      "deceptive",
      "fallacious",
      "fraudulent",
      "inaccurate"
    ],
    "note": "虚假误导性广告宣传：misleading advertising",
    "fam": [
      {
        "text": "mislead",
        "pos": "v.",
        "meaning": "误导"
      }
    ]
  },
  "mitigate": {
    "syn": [
      "alleviate",
      "lessen",
      "reduce",
      "diminish",
      "relieve"
    ],
    "note": "写作高频搭配：mitigate climate change / risks",
    "fam": [
      {
        "text": "mitigation",
        "pos": "n.",
        "meaning": "缓解措施"
      },
      {
        "text": "mitigator",
        "pos": "n.",
        "meaning": "缓解物"
      }
    ]
  },
  "mnemonic": {
    "syn": [
      "memory aid",
      "memory trigger"
    ],
    "note": "帮助记忆的助记口诀或联想符号",
    "fam": [
      {
        "text": "mnemonics",
        "pos": "n.",
        "meaning": "记忆术"
      }
    ]
  },
  "modular": {
    "syn": [
      "unit-based",
      "component-based"
    ],
    "note": "将课程划分为独立选修学分模块的体系",
    "fam": [
      {
        "text": "module",
        "pos": "n.",
        "meaning": "单元模块"
      }
    ]
  },
  "modularity": {
    "syn": [
      "component-based design",
      "interchangeability",
      "flexibility"
    ],
    "note": "现代工程与软件设计中的模块化特性",
    "fam": [
      {
        "text": "modular",
        "pos": "adj.",
        "meaning": "模块化的"
      },
      {
        "text": "module",
        "pos": "n.",
        "meaning": "模块；组件"
      }
    ]
  },
  "monetary": {
    "syn": [
      "financial",
      "pecuniary",
      "cash-related"
    ],
    "note": "央行货币政策：monetary policy / monetary authority",
    "fam": [
      {
        "text": "money",
        "pos": "n.",
        "meaning": "金钱"
      }
    ]
  },
  "monetize": {
    "syn": [
      "commercialize",
      "cash in on",
      "capitalize on"
    ],
    "note": "将流量、软件或创意转化为真金白银的变现行为",
    "fam": [
      {
        "text": "monetization",
        "pos": "n.",
        "meaning": "变现模式"
      }
    ]
  },
  "monolingual": {
    "syn": [
      "single-language"
    ],
    "note": "仅能熟练使用单一种母语的人群",
    "fam": []
  },
  "monologue": {
    "syn": [
      "soliloquy",
      "speech",
      "unilateral address"
    ],
    "note": "舞台上演员吐露心声的长篇独白",
    "fam": [
      {
        "text": "dialogue",
        "pos": "n.",
        "meaning": "对话"
      }
    ]
  },
  "monopoly": {
    "syn": [
      "exclusive control",
      "market dominance"
    ],
    "note": "巨头滥用市场支配地位搞二选一的行业垄断",
    "fam": [
      {
        "text": "monopolize",
        "pos": "v.",
        "meaning": "垄断"
      },
      {
        "text": "monopolistic",
        "pos": "adj.",
        "meaning": "垄断性的"
      }
    ]
  },
  "monsoon": {
    "syn": [
      "rainy season wind",
      "seasonal breeze"
    ],
    "note": "带来充沛降水但易发洪灾的南亚夏季季风气候",
    "fam": []
  },
  "monument": {
    "syn": [
      "memorial",
      "shrine",
      "statue"
    ],
    "note": "高耸入云缅怀革命先烈丰功伟绩的人民英雄纪念碑历史遗迹",
    "fam": [
      {
        "text": "monumental",
        "pos": "adj.",
        "meaning": "丰碑式的，划时代的"
      }
    ]
  },
  "moonlighting": {
    "syn": [
      "holding a second job",
      "side hustling"
    ],
    "note": "白天全职工作之余下班兼职打第二份工",
    "fam": [
      {
        "text": "moonlight",
        "pos": "v.",
        "meaning": "兼职打零工"
      }
    ]
  },
  "moratorium": {
    "syn": [
      "suspension",
      "ban",
      "halt",
      "embargo",
      "pause"
    ],
    "note": "官方宣布的暂时冻结或中止令：a moratorium on AI development",
    "fam": [
      {
        "text": "moratory",
        "pos": "adj.",
        "meaning": "延期偿付的"
      }
    ]
  },
  "morbidity": {
    "syn": [
      "disease rate",
      "sickness level"
    ],
    "note": "特定人群某种心血管慢病的发病率统计",
    "fam": [
      {
        "text": "morbid",
        "pos": "adj.",
        "meaning": "病态的；疾病的"
      }
    ]
  },
  "mortality": {
    "syn": [
      "death rate",
      "fatality rate"
    ],
    "note": "重症监护救治大幅压减患者病死死亡率",
    "fam": [
      {
        "text": "mortal",
        "pos": "adj.",
        "meaning": "会死的，致命的"
      }
    ]
  },
  "mortgage": {
    "syn": [
      "home loan",
      "property lien"
    ],
    "note": "房贷按揭：pay off the mortgage",
    "fam": [
      {
        "text": "mortgagor",
        "pos": "n.",
        "meaning": "抵押人"
      }
    ]
  },
  "mosaic": {
    "syn": [
      "inlay",
      "tessellation"
    ],
    "note": "采用彩色琉璃碎片在大教堂拱顶精心拼贴镶嵌的拜占庭马赛克镶嵌画",
    "fam": []
  },
  "multiculturalism": {
    "syn": [
      "cultural diversity",
      "pluralistic society"
    ],
    "note": "承认并保护多民族文化平等尊重的多元文化主义国策",
    "fam": [
      {
        "text": "multicultural",
        "pos": "adj.",
        "meaning": "多元文化的"
      }
    ]
  },
  "multidisciplinary": {
    "syn": [
      "interdisciplinary",
      "cross-disciplinary",
      "integrative"
    ],
    "note": "集合计算机、生物学与医学等多学科交叉融合研究：a multidisciplinary team",
    "fam": []
  },
  "multilateral": {
    "syn": [
      "many-sided",
      "international",
      "collective"
    ],
    "note": "多国参与签署的世界贸易组织多边贸易协定",
    "fam": [
      {
        "text": "unilateral",
        "pos": "adj.",
        "meaning": "单边的"
      },
      {
        "text": "bilateral",
        "pos": "adj.",
        "meaning": "双边的"
      }
    ]
  },
  "multimedia": {
    "syn": [
      "audiovisual",
      "digital media"
    ],
    "note": "结合音频视频的多媒体辅助教学",
    "fam": []
  },
  "municipal": {
    "syn": [
      "civic",
      "city",
      "metropolitan",
      "urban government"
    ],
    "note": "市级公共市政管理：municipal services/waste",
    "fam": []
  },
  "municipality": {
    "syn": [
      "local government",
      "city administration",
      "borough",
      "council"
    ],
    "note": "拥有地方自治权的市镇行政当局",
    "fam": [
      {
        "text": "municipal",
        "pos": "adj.",
        "meaning": "市政的；市办的"
      }
    ]
  },
  "nanotechnology": {
    "syn": [
      "nanotech",
      "microscopic engineering"
    ],
    "note": "操纵纳米微观尺度的纳米黑科技",
    "fam": []
  },
  "narcissism": {
    "syn": [
      "vanity",
      "self-absorption",
      "conceit",
      "egotism"
    ],
    "note": "极度自负缺乏同理心的自恋型人格特质",
    "fam": [
      {
        "text": "narcissistic",
        "pos": "adj.",
        "meaning": "自恋的"
      },
      {
        "text": "narcissist",
        "pos": "n.",
        "meaning": "自恋者"
      }
    ]
  },
  "narrative": {
    "syn": [
      "storyline",
      "account",
      "chronicle",
      "framing"
    ],
    "note": "塑造社会舆论的话语叙事：shape the public narrative",
    "fam": [
      {
        "text": "narrate",
        "pos": "v.",
        "meaning": "讲述；叙述"
      },
      {
        "text": "narrator",
        "pos": "n.",
        "meaning": "讲述者"
      }
    ]
  },
  "nationalization": {
    "syn": [
      "state ownership",
      "expropriation"
    ],
    "note": "政府强行收归国有的国有化法令",
    "fam": [
      {
        "text": "nationalize",
        "pos": "v.",
        "meaning": "收归国有"
      }
    ]
  },
  "nationalize": {
    "syn": [
      "state-own",
      "bring under public ownership"
    ],
    "note": "收归国有，与 privatize 相对",
    "fam": [
      {
        "text": "nationalization",
        "pos": "n.",
        "meaning": "国有化"
      },
      {
        "text": "nation",
        "pos": "n.",
        "meaning": "国家"
      }
    ]
  },
  "nebula": {
    "syn": [
      "cosmic dust cloud",
      "interstellar cloud"
    ],
    "note": "",
    "fam": [
      {
        "text": "nebulous",
        "pos": "adj.",
        "meaning": "星云的；模糊朦胧的"
      }
    ]
  },
  "negligence": {
    "syn": [
      "dereliction",
      "carelessness",
      "inattention",
      "slackness"
    ],
    "note": "民事侵权法中的疏忽过失责任：medical/criminal negligence",
    "fam": [
      {
        "text": "negligent",
        "pos": "adj.",
        "meaning": "疏忽大意的"
      },
      {
        "text": "neglect",
        "pos": "v./n.",
        "meaning": "忽视；遗漏"
      }
    ]
  },
  "negligible": {
    "syn": [
      "insignificant",
      "minor",
      "trifling",
      "trivial",
      "inconsequential"
    ],
    "note": "相比大盘而言微不足道可以忽略不计的细微差距：The difference is negligible.",
    "fam": [
      {
        "text": "neglect",
        "pos": "v.",
        "meaning": "忽视"
      }
    ]
  },
  "neolithic": {
    "syn": [
      "New Stone Age",
      "agricultural revolution era"
    ],
    "note": "新石器时代：neolithic tools/settlements",
    "fam": []
  },
  "networking": {
    "syn": [
      "building contacts",
      "socializing",
      "professional connection"
    ],
    "note": "在行业会议或社交圈拓展优质职场人脉",
    "fam": []
  },
  "neural network": {
    "syn": [
      "neural net",
      "brain-modeled network"
    ],
    "note": "深度神经网络模型",
    "fam": []
  },
  "neurodegenerative": {
    "syn": [
      "brain-deteriorating",
      "neuropathic"
    ],
    "note": "老年阿尔茨海默病、帕金森等大脑神经退行性病变",
    "fam": []
  },
  "neuroplasticity": {
    "syn": [
      "brain plasticity",
      "neural malleability"
    ],
    "note": "大脑神经元终生可通过后天学习持续重新连线改造的可塑性",
    "fam": []
  },
  "neurosis": {
    "syn": [
      "nervous condition",
      "psychoneurosis",
      "anxiety disorder"
    ],
    "note": "非器质性心理障碍：obsessive neurosis",
    "fam": [
      {
        "text": "neurotic",
        "pos": "adj./n.",
        "meaning": "神经质的；神经质者"
      }
    ]
  },
  "neuroticism": {
    "syn": [
      "emotional instability",
      "nervousness",
      "vulnerability"
    ],
    "note": "大五人格核心维度之一：情绪不稳定性与易焦虑倾向",
    "fam": []
  },
  "niche": {
    "syn": [
      "specialized market",
      "corner",
      "specialty"
    ],
    "note": "针对高度专注细分客群的利基市场：niche market",
    "fam": [
      {
        "text": "niche product",
        "pos": "n.",
        "meaning": "特色细分产品"
      }
    ]
  },
  "nocebo": {
    "syn": [
      "negative expectation effect",
      "adverse placebo"
    ],
    "note": "因负面心理暗示引发恶心呕吐等真实不适症状的‘反安慰剂效应’",
    "fam": []
  },
  "nonetheless": {
    "syn": [
      "nevertheless",
      "still",
      "yet",
      "however",
      "even so"
    ],
    "note": "学术转折承接高频副词：The cost is high; nonetheless, it is necessary.",
    "fam": []
  },
  "notwithstanding": {
    "syn": [
      "despite",
      "in spite of",
      "regardless of"
    ],
    "note": "学术正式介词：Notwithstanding the difficulties, the project succeeded.",
    "fam": []
  },
  "nuance": {
    "syn": [
      "subtlety",
      "fine distinction",
      "shade of meaning"
    ],
    "note": "近义词之间极其微妙传神的细微语义差别",
    "fam": [
      {
        "text": "nuanced",
        "pos": "adj.",
        "meaning": "微妙细腻的"
      }
    ]
  },
  "nuclear": {
    "syn": [
      "atomic"
    ],
    "note": "第四代先进高温气冷堆核电站",
    "fam": []
  },
  "nuclear family": {
    "syn": [
      "two-generation family",
      "traditional family unit"
    ],
    "note": "仅由父母与子女构成的核心小家庭，与 extended family 相对",
    "fam": []
  },
  "nuisance": {
    "syn": [
      "irritation",
      "annoyance",
      "pest"
    ],
    "note": "工业低频轰鸣对沿线居民造成的声环境公害骚扰",
    "fam": []
  },
  "numeracy": {
    "syn": [
      "math skills",
      "arithmetical ability"
    ],
    "note": "基本计算算术素养",
    "fam": [
      {
        "text": "innumeracy",
        "pos": "n.",
        "meaning": "计算无能"
      }
    ]
  },
  "nursing home": {
    "syn": [
      "care home",
      "elderly care facility",
      "rest home"
    ],
    "note": "老龄化社会话题高频词汇",
    "fam": []
  },
  "nurture": {
    "syn": [
      "cultivate",
      "foster",
      "cherish"
    ],
    "note": "精心呵护并培养幼苗或天赋才能",
    "fam": []
  },
  "nutrient": {
    "syn": [
      "nourishment",
      "food component",
      "sustenance"
    ],
    "note": "",
    "fam": [
      {
        "text": "nutrition",
        "pos": "n.",
        "meaning": "营养学；营养"
      },
      {
        "text": "nutritious",
        "pos": "adj.",
        "meaning": "有营养的"
      }
    ]
  },
  "obesity": {
    "syn": [
      "excessive fatness",
      "overweight",
      "corpulence"
    ],
    "note": "高热量快餐与甜饮料推高的青少年严重肥胖症",
    "fam": [
      {
        "text": "obese",
        "pos": "adj.",
        "meaning": "肥胖过度超重的"
      }
    ]
  },
  "obsolescence": {
    "syn": [
      "datedness",
      "depreciation"
    ],
    "note": "摩尔定律下电子硬件极高的技术淘汰淘汰过时率",
    "fam": [
      {
        "text": "obsolete",
        "pos": "adj.",
        "meaning": "废弃过时的"
      }
    ]
  },
  "obsolete": {
    "syn": [
      "outdated",
      "archaic",
      "antiquated",
      "defunct",
      "superseded"
    ],
    "note": "雅思核心高频词，指由于科技进步被淘汰过时",
    "fam": [
      {
        "text": "obsolescence",
        "pos": "n.",
        "meaning": "报废；退化过时"
      }
    ]
  },
  "offshoring": {
    "syn": [
      "relocation overseas",
      "foreign manufacturing"
    ],
    "note": "将生产研发等职能迁移到海外低成本国家",
    "fam": [
      {
        "text": "offshore",
        "pos": "adj./v.",
        "meaning": "离岸的；转移海外"
      }
    ]
  },
  "oligopoly": {
    "syn": [
      "cartel",
      "market concentration"
    ],
    "note": "少数三五家行业巨头联合瓜分市场的寡头垄断",
    "fam": [
      {
        "text": "oligopolistic",
        "pos": "adj.",
        "meaning": "寡头垄断的"
      }
    ]
  },
  "omnivore": {
    "syn": [
      "all-eater"
    ],
    "note": "兼食荤素的杂食性动物",
    "fam": [
      {
        "text": "omnivorous",
        "pos": "adj.",
        "meaning": "杂食性的"
      }
    ]
  },
  "open-source": {
    "syn": [
      "public-code",
      "open-access",
      "freely-licensed"
    ],
    "note": "open-source 强调代码开源共享与协同改进",
    "fam": [
      {
        "text": "source code",
        "pos": "n.",
        "meaning": "源代码"
      }
    ]
  },
  "opponent": {
    "syn": [
      "critic",
      "adversary",
      "rival",
      "detractor"
    ],
    "note": "反对者与异议人士：opponents of the new tax policy",
    "fam": [
      {
        "text": "oppose",
        "pos": "v.",
        "meaning": "反对"
      },
      {
        "text": "opposite",
        "pos": "adj.",
        "meaning": "对立相反的"
      }
    ]
  },
  "oppression": {
    "syn": [
      "tyranny",
      "subjugation",
      "persecution",
      "suppression"
    ],
    "note": "统治阶层对弱者的残暴政治或经济压迫",
    "fam": [
      {
        "text": "oppress",
        "pos": "v.",
        "meaning": "压迫；使窒息"
      },
      {
        "text": "oppressive",
        "pos": "adj.",
        "meaning": "压迫性的；沉重的"
      }
    ]
  },
  "orbit": {
    "syn": [
      "revolve around",
      "circle",
      "trajectory",
      "path"
    ],
    "note": "作动词 orbit the Earth，作名词 in orbit",
    "fam": [
      {
        "text": "orbital",
        "pos": "adj.",
        "meaning": "轨道的"
      }
    ]
  },
  "organic": {
    "syn": [
      "natural",
      "chemical-free",
      "pesticide-free",
      "ecological"
    ],
    "note": "有机蔬菜/农副产品：organic produce/farming",
    "fam": [
      {
        "text": "organism",
        "pos": "n.",
        "meaning": "生物体"
      }
    ]
  },
  "orientation": {
    "syn": [
      "induction",
      "familiarization",
      "welcome week"
    ],
    "note": "新生开学迎新周培训活动",
    "fam": [
      {
        "text": "orient",
        "pos": "v.",
        "meaning": "使适应；确定方向"
      }
    ]
  },
  "ornamentation": {
    "syn": [
      "decoration",
      "embellishment",
      "adornment"
    ],
    "note": "巴洛克古典建筑外墙雕刻的繁琐装饰浮雕",
    "fam": [
      {
        "text": "ornament",
        "pos": "n./v.",
        "meaning": "装饰品；点缀"
      }
    ]
  },
  "ostracize": {
    "syn": [
      "boycott",
      "shun",
      "exclude",
      "banish",
      "exile"
    ],
    "note": "源自古希腊陶片放逐法，指全班或群体孤立排挤某人",
    "fam": [
      {
        "text": "ostracism",
        "pos": "n.",
        "meaning": "排斥孤立；放逐"
      }
    ]
  },
  "outbreak": {
    "syn": [
      "flare-up",
      "epidemic",
      "surge",
      "upsurge"
    ],
    "note": "指疾病、战争或骚乱突然爆发：disease outbreak",
    "fam": [
      {
        "text": "break out",
        "pos": "v.",
        "meaning": "突然爆发"
      }
    ]
  },
  "outsourcing": {
    "syn": [
      "contracting out",
      "subcontracting",
      "external procurement"
    ],
    "note": "将非核心业务外包给第三方专业机构",
    "fam": [
      {
        "text": "outsource",
        "pos": "v.",
        "meaning": "外包业务"
      }
    ]
  },
  "overarching": {
    "syn": [
      "all-embracing",
      "overriding",
      "fundamental",
      "supreme"
    ],
    "note": "统领全局、涵盖各分支的根本性宏观主题：an overarching framework/theme",
    "fam": []
  },
  "overcrowded": {
    "syn": [
      "congested",
      "jam-packed",
      "swarming",
      "teeming"
    ],
    "note": "居住或交通空间过度拥挤：overcrowded classrooms/trains",
    "fam": [
      {
        "text": "overcrowding",
        "pos": "n.",
        "meaning": "过度拥挤"
      }
    ]
  },
  "overgeneralization": {
    "syn": [
      "sweeping statement",
      "hasty generalization"
    ],
    "note": "从一两个偶然个案推导出绝对结论的以偏概全逻辑错误",
    "fam": [
      {
        "text": "generalize",
        "pos": "v.",
        "meaning": "概括归纳"
      }
    ]
  },
  "overhaul": {
    "syn": [
      "renovate",
      "revamp",
      "modernize",
      "service",
      "recondition"
    ],
    "note": "彻底检修维护设备，也可引申为政策制度的全面革新",
    "fam": [
      {
        "text": "haul",
        "pos": "v.",
        "meaning": "拉拽；拖移"
      }
    ]
  },
  "overhead": {
    "syn": [
      "operating expenses",
      "fixed costs",
      "running costs"
    ],
    "note": "企业房租水电等间接日常运营固定支出：low overhead costs",
    "fam": []
  },
  "overpass": {
    "syn": [
      "flyover",
      "elevated road",
      "bridge"
    ],
    "note": "缓解交叉路口车流的城市高架立交桥",
    "fam": []
  },
  "oversight": {
    "syn": [
      "supervision",
      "regulatory control"
    ],
    "note": "政府对人工智能算法滥用设立的法定伦理监管",
    "fam": [
      {
        "text": "oversee",
        "pos": "v.",
        "meaning": "监督"
      }
    ]
  },
  "overtime": {
    "syn": [
      "extra hours",
      "after-hours work"
    ],
    "note": "超时加班与加班费：work overtime / overtime pay",
    "fam": []
  },
  "overtourism": {
    "syn": [
      "tourist overcrowding",
      "hyper-tourism"
    ],
    "note": "大量游客涌入超出古城承载力造成的‘过度旅游灾难’（如威尼斯）",
    "fam": []
  },
  "overuse": {
    "syn": [
      "overstrain",
      "excessive wear",
      "exploitation"
    ],
    "note": "运动员常见的 overuse injuries（过度使用劳损性损伤）",
    "fam": [
      {
        "text": "use",
        "pos": "v./n.",
        "meaning": "使用"
      }
    ]
  },
  "ozone": {
    "syn": [
      "trioxygen"
    ],
    "note": "ozone layer 臭氧层；ozone depletion 臭氧损耗",
    "fam": []
  },
  "palaeolithic": {
    "syn": [
      "Old Stone Age",
      "ancient prehistoric"
    ],
    "note": "旧石器时代，与 neolithic（新石器时代）相对",
    "fam": []
  },
  "palliative": {
    "syn": [
      "soothing",
      "alleviating",
      "mitigating",
      "comfort-care"
    ],
    "note": "姑息缓和医疗：palliative care，重点在于减轻临终晚期痛苦",
    "fam": [
      {
        "text": "palliate",
        "pos": "v.",
        "meaning": "缓和；平息"
      }
    ]
  },
  "pandemic": {
    "syn": [
      "global outbreak",
      "worldwide contagion"
    ],
    "note": "跨国跨大洲大范围席卷全球的大流行病",
    "fam": []
  },
  "paparazzi": {
    "syn": [
      "press photographers",
      "celebrity stalkers",
      "freelance shooters"
    ],
    "note": "追逐偷拍明星隐私的狗仔队（原为意大利语复数）",
    "fam": []
  },
  "paradigm": {
    "syn": [
      "framework",
      "model",
      "archetype"
    ],
    "note": "科学革命带来的重大理论范式颠覆转变",
    "fam": [
      {
        "text": "paradigmatic",
        "pos": "adj.",
        "meaning": "范式的"
      }
    ]
  },
  "paradox": {
    "syn": [
      "contradiction",
      "anomaly",
      "enigma",
      "puzzle"
    ],
    "note": "表面自相矛盾但实则蕴含深刻真理的现象：the paradox of thrift",
    "fam": [
      {
        "text": "paradoxical",
        "pos": "adj.",
        "meaning": "自相矛盾的"
      },
      {
        "text": "paradoxically",
        "pos": "adv.",
        "meaning": "看似矛盾但实则"
      }
    ]
  },
  "parameter": {
    "syn": [
      "variable",
      "criterion",
      "boundary"
    ],
    "note": "超大规模模型训练参数量",
    "fam": []
  },
  "paramount": {
    "syn": [
      "supreme",
      "chief",
      "predominant",
      "utmost",
      "primary"
    ],
    "note": "至高无上重中之重的首要大事：Safety is of paramount importance.",
    "fam": []
  },
  "paraphrase": {
    "syn": [
      "rephrase",
      "reword",
      "restate"
    ],
    "note": "雅思阅读与听力解题核心技能：同义句式改写改述",
    "fam": []
  },
  "parity": {
    "syn": [
      "equality",
      "equivalence",
      "uniformity",
      "balance"
    ],
    "note": "达到平价均等比例：gender parity in pay",
    "fam": [
      {
        "text": "disparity",
        "pos": "n.",
        "meaning": "差距；不均"
      }
    ]
  },
  "parole": {
    "syn": [
      "early release",
      "conditional liberation"
    ],
    "note": "因狱中表现良好获得的假释出狱机会：released on parole",
    "fam": [
      {
        "text": "parolee",
        "pos": "n.",
        "meaning": "假释犯"
      }
    ]
  },
  "parsec": {
    "syn": [
      "astronomical distance unit"
    ],
    "note": "天文视差秒差距，约合 3.26 光年",
    "fam": [
      {
        "text": "parallax",
        "pos": "n.",
        "meaning": "视差"
      }
    ]
  },
  "particularism": {
    "syn": [
      "exceptionalism",
      "localism",
      "provincialism"
    ],
    "note": "过分强调自身特殊性与本土例外的特殊主义",
    "fam": [
      {
        "text": "particular",
        "pos": "adj.",
        "meaning": "特殊的"
      }
    ]
  },
  "particulate": {
    "syn": [
      "particle matter",
      "soot"
    ],
    "note": "漂浮在空气中直接吸入肺泡的微粒颗粒物",
    "fam": []
  },
  "partisanship": {
    "syn": [
      "bias",
      "party prejudice",
      "sectarianism"
    ],
    "note": "议会中狭隘盲目的党派偏见政争",
    "fam": [
      {
        "text": "partisan",
        "pos": "adj./n.",
        "meaning": "党派性强的；盲从者"
      },
      {
        "text": "bipartisan",
        "pos": "adj.",
        "meaning": "两党跨党派支持的"
      }
    ]
  },
  "patch": {
    "syn": [
      "software fix",
      "update fix"
    ],
    "note": "紧急推送修补操作系统安全漏洞的代码补丁",
    "fam": [
      {
        "text": "patch",
        "pos": "v.",
        "meaning": "打补丁"
      }
    ]
  },
  "patent": {
    "syn": [
      "exclusive right",
      "license",
      "copyright",
      "proprietary grant"
    ],
    "note": "保护技术发明的专利权：apply for a patent",
    "fam": [
      {
        "text": "patented",
        "pos": "adj.",
        "meaning": "拥有专利的"
      }
    ]
  },
  "paternal": {
    "syn": [
      "fatherly",
      "patrilineal",
      "patriarchal"
    ],
    "note": "paternal leave 指陪产假，paternal instincts 父亲本能",
    "fam": [
      {
        "text": "paternity",
        "pos": "n.",
        "meaning": "父权；父亲身份"
      }
    ]
  },
  "pathogen": {
    "syn": [
      "disease agent",
      "germ",
      "infectious organism"
    ],
    "note": "诱发器官严重衰竭的微观致病菌病原体",
    "fam": [
      {
        "text": "pathogenic",
        "pos": "adj.",
        "meaning": "致病的"
      }
    ]
  },
  "patriarchy": {
    "syn": [
      "male dominance",
      "patronage society"
    ],
    "note": "",
    "fam": [
      {
        "text": "patriarchal",
        "pos": "adj.",
        "meaning": "父权制的；男性主导的"
      },
      {
        "text": "patriarch",
        "pos": "n.",
        "meaning": "族长；元老"
      }
    ]
  },
  "patronage": {
    "syn": [
      "sponsorship",
      "financial backing",
      "favouritism"
    ],
    "note": "权贵阶层对艺术家的资助包庇；亦可指不正当任人唯亲裙带庇护",
    "fam": [
      {
        "text": "patron",
        "pos": "n.",
        "meaning": "赞助人，老主顾"
      }
    ]
  },
  "payload": {
    "syn": [
      "cargo",
      "freight",
      "capacity",
      "lading"
    ],
    "note": "火箭或运载工具所能携带的有效载荷重量",
    "fam": [
      {
        "text": "load",
        "pos": "n./v.",
        "meaning": "负荷；装载"
      }
    ]
  },
  "paywall": {
    "syn": [
      "subscription barrier",
      "access restriction"
    ],
    "note": "优质深度新闻网站向非付费读者设置的内容付费门槛",
    "fam": []
  },
  "pedagogical": {
    "syn": [
      "didactic",
      "instructional",
      "educational"
    ],
    "note": "涉及教学策略方法论的",
    "fam": [
      {
        "text": "pedagogy",
        "pos": "n.",
        "meaning": "教学法"
      }
    ]
  },
  "pedagogy": {
    "syn": [
      "teaching methods",
      "instructional theory",
      "didactics"
    ],
    "note": "教育学，教学法原理",
    "fam": [
      {
        "text": "pedagogical",
        "pos": "adj.",
        "meaning": "教学法上的"
      },
      {
        "text": "pedagogue",
        "pos": "n.",
        "meaning": "教师"
      }
    ]
  },
  "pedestrianize": {
    "syn": [
      "car-free transition",
      "pave for foot traffic"
    ],
    "note": "将原本车水马龙的街道改造为行人专用步行街",
    "fam": [
      {
        "text": "pedestrian",
        "pos": "n./adj.",
        "meaning": "行人；平淡的"
      }
    ]
  },
  "peer": {
    "syn": [
      "equal",
      "fellow",
      "colleague"
    ],
    "note": "peer review 指学术同行评审",
    "fam": [
      {
        "text": "peerless",
        "pos": "adj.",
        "meaning": "无双的"
      }
    ]
  },
  "peer-reviewed": {
    "syn": [
      "refereed",
      "scholarly-evaluated"
    ],
    "note": "经过国际同行专家盲审评议的权威论文",
    "fam": []
  },
  "penal": {
    "syn": [
      "punitive",
      "disciplinary",
      "corrective",
      "retributive"
    ],
    "note": "penal system 刑罚体系，penal code 刑法典",
    "fam": [
      {
        "text": "penalize",
        "pos": "v.",
        "meaning": "处罚；处以罚金"
      },
      {
        "text": "penalty",
        "pos": "n.",
        "meaning": "惩罚；刑罚"
      }
    ]
  },
  "penetration": {
    "syn": [
      "market infiltration",
      "entry",
      "permeation"
    ],
    "note": "market penetration（市场渗透率）",
    "fam": [
      {
        "text": "penetrate",
        "pos": "v.",
        "meaning": "刺入；打入市场"
      }
    ]
  },
  "peninsula": {
    "syn": [
      "headland",
      "cape",
      "promontory"
    ],
    "note": "三面环水一面连陆的辽东山东半岛",
    "fam": []
  },
  "pension": {
    "syn": [
      "retirement fund",
      "superannuation",
      "annuity"
    ],
    "note": "保障退休工人晚年温饱有尊严的基本养老金社保",
    "fam": [
      {
        "text": "pensioner",
        "pos": "n.",
        "meaning": "领养老金者"
      }
    ]
  },
  "pension plan": {
    "syn": [
      "retirement scheme",
      "superannuation fund"
    ],
    "note": "企业或政府退休年金储蓄计划",
    "fam": []
  },
  "penthouse": {
    "syn": [
      "luxury rooftop suite",
      "cloud mansion"
    ],
    "note": "摩天大楼顶楼俯瞰全城的顶层豪华独栋大平层",
    "fam": []
  },
  "perception": {
    "syn": [
      "awareness",
      "impression",
      "understanding",
      "view"
    ],
    "note": "消费者对产品的心理认知：brand perception",
    "fam": [
      {
        "text": "perceive",
        "pos": "v.",
        "meaning": "感知；察觉"
      },
      {
        "text": "perceptive",
        "pos": "adj.",
        "meaning": "洞察力敏锐的"
      }
    ]
  },
  "permafrost": {
    "syn": [
      "frozen subsoil",
      "tundra layer"
    ],
    "note": "极地与高山多年永久冻土层",
    "fam": []
  },
  "permeable": {
    "syn": [
      "porous",
      "penetrable",
      "absorbent"
    ],
    "note": "文化或边界通透易相互渗透：cultural boundaries are permeable",
    "fam": [
      {
        "text": "permeate",
        "pos": "v.",
        "meaning": "弥漫；渗透"
      }
    ]
  },
  "perseverance": {
    "syn": [
      "persistence",
      "tenacity",
      "grit"
    ],
    "note": "百折不挠咬牙死磕到底的钢铁毅力恒心",
    "fam": [
      {
        "text": "persevere",
        "pos": "v.",
        "meaning": "坚持不懈"
      }
    ]
  },
  "persuasion": {
    "syn": [
      "conviction",
      "influence",
      "inducement",
      "coaxing"
    ],
    "note": "运用逻辑与说服技巧打动听众的能力：the art of persuasion",
    "fam": [
      {
        "text": "persuade",
        "pos": "v.",
        "meaning": "说服；劝服"
      },
      {
        "text": "persuasive",
        "pos": "adj.",
        "meaning": "极具说服力的"
      }
    ]
  },
  "pervasive": {
    "syn": [
      "widespread",
      "ubiquitous",
      "omnipresent",
      "endemic"
    ],
    "note": "无孔不入渗透到生活方方面面的影响：the pervasive influence of social media",
    "fam": [
      {
        "text": "pervade",
        "pos": "v.",
        "meaning": "遍及；弥漫"
      }
    ]
  },
  "pesticide": {
    "syn": [
      "insecticide",
      "crop spray"
    ],
    "note": "农田喷洒用于消灭害虫的化学农药杀虫剂",
    "fam": []
  },
  "petroleum": {
    "syn": [
      "crude oil",
      "fossil oil"
    ],
    "note": "深井开采的工业血液原油石油",
    "fam": []
  },
  "pharmaceutical": {
    "syn": [
      "medicinal",
      "drug-related",
      "pharmacologic"
    ],
    "note": "搭配：pharmaceutical company/industry/products",
    "fam": [
      {
        "text": "pharmacy",
        "pos": "n.",
        "meaning": "药店；药房"
      },
      {
        "text": "pharmacist",
        "pos": "n.",
        "meaning": "药剂师"
      }
    ]
  },
  "philanthropy": {
    "syn": [
      "charity",
      "benevolence",
      "humanitarianism",
      "generosity"
    ],
    "note": "富豪或企业的公益慈善捐赠事业",
    "fam": [
      {
        "text": "philanthropist",
        "pos": "n.",
        "meaning": "慈善家"
      },
      {
        "text": "philanthropic",
        "pos": "adj.",
        "meaning": "慈善博爱的"
      }
    ]
  },
  "phishing": {
    "syn": [
      "social engineering scam",
      "identity fraud"
    ],
    "note": "伪造银行界面的钓鱼邮件欺诈骗局",
    "fam": []
  },
  "phobia": {
    "syn": [
      "irrational fear",
      "dread",
      "aversion",
      "horror"
    ],
    "note": "非理性的病态极度恐惧：social phobia（社交恐惧症）",
    "fam": [
      {
        "text": "phobic",
        "pos": "adj.",
        "meaning": "恐惧症的"
      }
    ]
  },
  "phonetics": {
    "syn": [
      "speech science",
      "pronunciation study"
    ],
    "note": "研究人类语音发音生理机制的语音学",
    "fam": [
      {
        "text": "phonetic",
        "pos": "adj.",
        "meaning": "语音的"
      }
    ]
  },
  "photovoltaic": {
    "syn": [
      "solar electric",
      "PV"
    ],
    "note": "太阳能光伏发电电池板组件",
    "fam": []
  },
  "physique": {
    "syn": [
      "build",
      "body shape",
      "figure",
      "musculature"
    ],
    "note": "强调人体的健美体魄体态：muscular physique",
    "fam": [
      {
        "text": "physical",
        "pos": "adj.",
        "meaning": "身体的；物理的"
      }
    ]
  },
  "piracy": {
    "syn": [
      "copyright infringement",
      "illegal copying",
      "bootlegging"
    ],
    "note": "由海盗衍生为盗版行为：software/digital piracy",
    "fam": [
      {
        "text": "pirate",
        "pos": "n./v.",
        "meaning": "海盗；盗版"
      },
      {
        "text": "pirated",
        "pos": "adj.",
        "meaning": "盗版的"
      }
    ]
  },
  "pivotal": {
    "syn": [
      "crucial",
      "decisive",
      "vital",
      "central",
      "momentous"
    ],
    "note": "起中枢轴心决定性转折作用的关键因素：play a pivotal role in",
    "fam": [
      {
        "text": "pivot",
        "pos": "n./v.",
        "meaning": "支点；随...旋转"
      }
    ]
  },
  "placebo": {
    "syn": [
      "dummy pill",
      "inactive substance",
      "sugar pill"
    ],
    "note": "医学试验常用概念：placebo effect（安慰剂效应）",
    "fam": [
      {
        "text": "placebo-controlled",
        "pos": "adj.",
        "meaning": "设有安慰剂对照的"
      }
    ]
  },
  "plagiarism": {
    "syn": [
      "academic theft",
      "copying",
      "infringement"
    ],
    "note": "学术大忌：未注明出处剽窃他人观点或文字",
    "fam": [
      {
        "text": "plagiarize",
        "pos": "v.",
        "meaning": "抄袭，剽窃"
      },
      {
        "text": "plagiarist",
        "pos": "n.",
        "meaning": "剽窃者"
      }
    ]
  },
  "plateau": {
    "syn": [
      "tableland",
      "highland",
      "mesa"
    ],
    "note": "耸立在世界屋脊一马平川的世界第一开阔高原",
    "fam": []
  },
  "plausible": {
    "syn": [
      "credible",
      "believable",
      "convincing",
      "reasonable"
    ],
    "note": "解释听起来入情入理站得住脚：a plausible explanation/hypothesis",
    "fam": [
      {
        "text": "plausibility",
        "pos": "n.",
        "meaning": "合理性；可信性"
      }
    ]
  },
  "plummet": {
    "syn": [
      "plunge",
      "tumble",
      "collapse",
      "nosedive",
      "sink"
    ],
    "note": "小作文极速断崖式暴跌首选动词：Sales plummeted to an all-time low.",
    "fam": []
  },
  "pluralism": {
    "syn": [
      "diversity",
      "multiculturalism",
      "variety",
      "coexistence"
    ],
    "note": "鼓励多元种族、文化和信仰并存包容的多元主义",
    "fam": [
      {
        "text": "pluralistic",
        "pos": "adj.",
        "meaning": "多元化的"
      },
      {
        "text": "plural",
        "pos": "adj.",
        "meaning": "复数的；多元的"
      }
    ]
  },
  "pneumatic": {
    "syn": [
      "air-driven",
      "compressed-air",
      "pressurized"
    ],
    "note": "气动机械装置，常与 hydraulic（液压的）对比",
    "fam": [
      {
        "text": "pneumatics",
        "pos": "n.",
        "meaning": "气动力学"
      }
    ]
  },
  "poaching": {
    "syn": [
      "illegal hunting",
      "game stealing"
    ],
    "note": "为获取象牙角料的非法盗猎",
    "fam": [
      {
        "text": "poach",
        "pos": "v.",
        "meaning": "偷猎"
      },
      {
        "text": "poacher",
        "pos": "n.",
        "meaning": "盗猎分子"
      }
    ]
  },
  "polarization": {
    "syn": [
      "division",
      "partisanship",
      "bifurcation",
      "cleavage"
    ],
    "note": "社会群体思想走向两极分化对立：political/social polarization",
    "fam": [
      {
        "text": "polarize",
        "pos": "v.",
        "meaning": "使两极分化"
      },
      {
        "text": "polar",
        "pos": "adj.",
        "meaning": "极地的；截然相反的"
      }
    ]
  },
  "polarize": {
    "syn": [
      "divide",
      "split",
      "cleave",
      "separate"
    ],
    "note": "使舆论两极分化尖锐对立：polarize public opinion",
    "fam": [
      {
        "text": "polarization",
        "pos": "n.",
        "meaning": "极化"
      }
    ]
  },
  "pollination": {
    "syn": [
      "pollen transfer",
      "cross-pollination"
    ],
    "note": "蜜蜂等昆虫协助植物授粉繁衍",
    "fam": [
      {
        "text": "pollinate",
        "pos": "v.",
        "meaning": "授粉"
      },
      {
        "text": "pollinator",
        "pos": "n.",
        "meaning": "传粉者"
      }
    ]
  },
  "pollutant": {
    "syn": [
      "contaminant",
      "waste",
      "toxin"
    ],
    "note": "偷排入大气与地下水网的工业污染物",
    "fam": [
      {
        "text": "pollute",
        "pos": "v.",
        "meaning": "污染"
      },
      {
        "text": "pollution",
        "pos": "n.",
        "meaning": "污染"
      }
    ]
  },
  "polycentric": {
    "syn": [
      "multi-centered",
      "decentralized"
    ],
    "note": "拥有多个核心 CBD 的多中心分散型城市空间布局",
    "fam": []
  },
  "polyglot": {
    "syn": [
      "multilingual",
      "linguist"
    ],
    "note": "能流利听说读写多种不同外语的通晓多语者",
    "fam": []
  },
  "portfolio": {
    "syn": [
      "collection",
      "assortment",
      "range of assets"
    ],
    "note": "分散风险的金融投资组合：investment portfolio",
    "fam": [
      {
        "text": "portfolio manager",
        "pos": "n.",
        "meaning": "基金经理"
      }
    ]
  },
  "portion": {
    "syn": [
      "serving",
      "helping",
      "share",
      "allocation"
    ],
    "note": "控制每餐饭量：portion control",
    "fam": [
      {
        "text": "apportion",
        "pos": "v.",
        "meaning": "分配；分摊"
      }
    ]
  },
  "postgraduate": {
    "syn": [
      "graduate student",
      "master's candidate"
    ],
    "note": "常简写为 postgrad",
    "fam": [
      {
        "text": "postgrad",
        "pos": "n.",
        "meaning": "研究生（非正式）"
      }
    ]
  },
  "postulate": {
    "syn": [
      "hypothesize",
      "posit",
      "propose",
      "presuppose"
    ],
    "note": "科学理论基于基本假设进行公理推演：Einstein postulated that...",
    "fam": [
      {
        "text": "postulation",
        "pos": "n.",
        "meaning": "假定；假说"
      }
    ]
  },
  "potential": {
    "syn": [
      "promise",
      "latent capacity",
      "capability"
    ],
    "note": "深藏在心底尚未完全开掘激活的巨大学术潜能",
    "fam": [
      {
        "text": "potentially",
        "pos": "adv.",
        "meaning": "潜在地"
      }
    ]
  },
  "poverty": {
    "syn": [
      "destitution",
      "indigence",
      "deprivation",
      "impoverishment"
    ],
    "note": "写作常用搭配：poverty line（贫困线），alleviate poverty",
    "fam": [
      {
        "text": "poor",
        "pos": "adj.",
        "meaning": "贫穷的"
      },
      {
        "text": "impoverish",
        "pos": "v.",
        "meaning": "使贫穷"
      }
    ]
  },
  "pragmatic": {
    "syn": [
      "practical",
      "down-to-earth",
      "realistic",
      "utilitarian"
    ],
    "note": "不搞空头说教、注重实操成效的务实解决方案：a pragmatic approach",
    "fam": [
      {
        "text": "pragmatism",
        "pos": "n.",
        "meaning": "实用主义"
      }
    ]
  },
  "precedent": {
    "syn": [
      "prior example",
      "standard case",
      "model",
      "tradition"
    ],
    "note": "判例法系（Common Law）核心概念：遵循先例原则",
    "fam": [
      {
        "text": "precede",
        "pos": "v.",
        "meaning": "先于；前行"
      },
      {
        "text": "unprecedented",
        "pos": "adj.",
        "meaning": "史无前例的"
      }
    ]
  },
  "precipitate": {
    "syn": [
      "trigger",
      "hasten",
      "accelerate",
      "instigate"
    ],
    "note": "骤然催化加速危机突发爆发：precipitate an economic crisis",
    "fam": [
      {
        "text": "precipitation",
        "pos": "n.",
        "meaning": "降水；沉淀"
      }
    ]
  },
  "precipitation": {
    "syn": [
      "rainfall",
      "rain",
      "snowfall"
    ],
    "note": "气象学专业术语：雨雪冰雹等大气降水总量",
    "fam": [
      {
        "text": "precipitate",
        "pos": "v.",
        "meaning": "沉淀；促成"
      }
    ]
  },
  "precipitous": {
    "syn": [
      "steep",
      "abrupt",
      "sharp",
      "sudden"
    ],
    "note": "陡峭如悬崖的垂直断崖式下跌：a precipitous decline in profits",
    "fam": [
      {
        "text": "precipitously",
        "pos": "adv.",
        "meaning": "断崖式急剧地"
      }
    ]
  },
  "precision": {
    "syn": [
      "accuracy",
      "exactness"
    ],
    "note": "高精尖机床纳米级加工超高精度",
    "fam": [
      {
        "text": "precise",
        "pos": "adj.",
        "meaning": "精确的"
      }
    ]
  },
  "predator": {
    "syn": [
      "hunter",
      "carnivore"
    ],
    "note": "食物链顶端的肉食捕食者",
    "fam": [
      {
        "text": "predatory",
        "pos": "adj.",
        "meaning": "捕食性的"
      }
    ]
  },
  "predominant": {
    "syn": [
      "dominant",
      "prevailing",
      "foremost",
      "main"
    ],
    "note": "在全局中占主导支配统治地位的：the predominant factor/theme",
    "fam": [
      {
        "text": "predominate",
        "pos": "v.",
        "meaning": "占优势"
      },
      {
        "text": "predominance",
        "pos": "n.",
        "meaning": "卓越优势"
      }
    ]
  },
  "prefabricated": {
    "syn": [
      "modular",
      "prefab",
      "factory-built"
    ],
    "note": "工厂提前生产构件并在工地拼装的装配式住宅：prefab buildings",
    "fam": []
  },
  "prejudice": {
    "syn": [
      "bias",
      "preconception",
      "prejudgment",
      "partiality"
    ],
    "note": "pre (前) + judge (裁判)，指未经事实检验的盲目成见",
    "fam": [
      {
        "text": "prejudiced",
        "pos": "adj.",
        "meaning": "怀有偏见的"
      }
    ]
  },
  "preliminary": {
    "syn": [
      "initial",
      "exploratory",
      "preparatory"
    ],
    "note": "初步阶段探索性实验发现，有待后续深入",
    "fam": []
  },
  "premise": {
    "syn": [
      "assumption",
      "hypothesis",
      "presupposition",
      "postulate"
    ],
    "note": "全篇推理赖以建立的前提假设依据：on the premise that...",
    "fam": []
  },
  "preparedness": {
    "syn": [
      "readiness",
      "anticipation"
    ],
    "note": "未雨绸缪防患于未然的基层社区防灾应急准备",
    "fam": [
      {
        "text": "prepare",
        "pos": "v.",
        "meaning": "准备"
      }
    ]
  },
  "prerequisite": {
    "syn": [
      "precondition",
      "requirement",
      "prerequisite course"
    ],
    "note": "选修高阶课程前必须先修读并通过的先决条件",
    "fam": [
      {
        "text": "requisite",
        "pos": "adj./n.",
        "meaning": "必需的；必备条件"
      }
    ]
  },
  "prescription": {
    "syn": [
      "recipe",
      "order",
      "instruction",
      "remedy"
    ],
    "note": "处方药；引申为解决社会问题的处方/对策方案",
    "fam": [
      {
        "text": "prescribe",
        "pos": "v.",
        "meaning": "开处方；规定"
      },
      {
        "text": "prescriptive",
        "pos": "adj.",
        "meaning": "规范性的"
      }
    ]
  },
  "preservation": {
    "syn": [
      "conservation",
      "protection",
      "safeguarding"
    ],
    "note": "运用高分子生化技术对饱水漆木器开展的脱水防腐保护",
    "fam": [
      {
        "text": "preserve",
        "pos": "v.",
        "meaning": "保存维护"
      }
    ]
  },
  "preservative": {
    "syn": [
      "conservation agent",
      "antimicrobial additive"
    ],
    "note": "",
    "fam": [
      {
        "text": "preserve",
        "pos": "v.",
        "meaning": "保存；保鲜"
      },
      {
        "text": "preservation",
        "pos": "n.",
        "meaning": "防腐；保护"
      }
    ]
  },
  "preventative": {
    "syn": [
      "prophylactic",
      "protective",
      "precautionary"
    ],
    "note": "防患于未然的三甲医院未病先防预防性体检医学",
    "fam": [
      {
        "text": "prevent",
        "pos": "v.",
        "meaning": "预防阻止"
      },
      {
        "text": "prevention",
        "pos": "n.",
        "meaning": "预防"
      }
    ]
  },
  "prey": {
    "syn": [
      "quarry",
      "victim"
    ],
    "note": "被猎食猛兽追捕的猎物",
    "fam": []
  },
  "pristine": {
    "syn": [
      "untouched",
      "unspoiled",
      "pure",
      "virgin"
    ],
    "note": "人迹罕至从未受污染的原始自然风貌",
    "fam": []
  },
  "privatization": {
    "syn": [
      "denationalization",
      "commercialization"
    ],
    "note": "将国有企业资产股权向民间资本开放的私有化改革",
    "fam": [
      {
        "text": "privatize",
        "pos": "v.",
        "meaning": "使私有化"
      }
    ]
  },
  "privatize": {
    "syn": [
      "denationalize",
      "commercialize",
      "deregulate"
    ],
    "note": "把国有企业转为私有民营，与 nationalize 相对",
    "fam": [
      {
        "text": "privatization",
        "pos": "n.",
        "meaning": "私有化"
      },
      {
        "text": "private",
        "pos": "adj.",
        "meaning": "私人的"
      }
    ]
  },
  "privilege": {
    "syn": [
      "prerogative",
      "advantage",
      "entitlement",
      "perk"
    ],
    "note": "出身带来的社会特权优势：white/male privilege",
    "fam": [
      {
        "text": "privileged",
        "pos": "adj.",
        "meaning": "享有特权的；优越的"
      }
    ]
  },
  "probation": {
    "syn": [
      "trial period",
      "suspended sentence",
      "conditional discharge"
    ],
    "note": "法律上指社区矫正观察期；职场上指新员工试用期",
    "fam": [
      {
        "text": "probationary",
        "pos": "adj.",
        "meaning": "缓刑的；试用期的"
      }
    ]
  },
  "probiotics": {
    "syn": [
      "beneficial bacteria",
      "gut-friendly flora"
    ],
    "note": "酸奶等富含的调节肠道菌群的益生菌",
    "fam": [
      {
        "text": "antibiotics",
        "pos": "n.",
        "meaning": "抗生素"
      }
    ]
  },
  "procedural": {
    "syn": [
      "methodological",
      "systematic",
      "operational"
    ],
    "note": "procedural memory 程序技能记忆（如游泳骑车、弹琴等运动自动化记忆）",
    "fam": [
      {
        "text": "procedure",
        "pos": "n.",
        "meaning": "程序；手续"
      }
    ]
  },
  "processed": {
    "syn": [
      "manufactured",
      "refined",
      "treated",
      "industrial"
    ],
    "note": "ultra-processed food (UPF) 超加工食品对健康有害",
    "fam": [
      {
        "text": "process",
        "pos": "v./n.",
        "meaning": "加工；程序"
      }
    ]
  },
  "processor": {
    "syn": [
      "CPU",
      "computing core",
      "logic unit"
    ],
    "note": "多核高并发中央处理器",
    "fam": [
      {
        "text": "process",
        "pos": "v./n.",
        "meaning": "处理；过程"
      }
    ]
  },
  "procrastination": {
    "syn": [
      "delaying",
      "deferral",
      "hesitation"
    ],
    "note": "因畏惧挫折而在潜意识里一拖再拖的拖延症恶习",
    "fam": [
      {
        "text": "procrastinate",
        "pos": "v.",
        "meaning": "拖延推迟"
      },
      {
        "text": "procrastinator",
        "pos": "n.",
        "meaning": "拖延者"
      }
    ]
  },
  "procreation": {
    "syn": [
      "reproduction",
      "breeding",
      "propagation"
    ],
    "note": "",
    "fam": [
      {
        "text": "procreate",
        "pos": "v.",
        "meaning": "繁衍；生育"
      },
      {
        "text": "procreative",
        "pos": "adj.",
        "meaning": "生育的"
      }
    ]
  },
  "procurement": {
    "syn": [
      "purchasing",
      "sourcing",
      "acquisition",
      "provision"
    ],
    "note": "企业或政府大宗设备与物资采购：public procurement",
    "fam": [
      {
        "text": "procure",
        "pos": "v.",
        "meaning": "采购；设法获得"
      }
    ]
  },
  "productivity": {
    "syn": [
      "efficiency",
      "yield",
      "output capacity"
    ],
    "note": "提高全要素生产率与劳动生产率",
    "fam": [
      {
        "text": "productive",
        "pos": "adj.",
        "meaning": "高产的"
      },
      {
        "text": "produce",
        "pos": "v.",
        "meaning": "生产"
      }
    ]
  },
  "proficiency": {
    "syn": [
      "competence",
      "fluency",
      "mastery"
    ],
    "note": "语言听说读写的熟练掌握度等级",
    "fam": [
      {
        "text": "proficient",
        "pos": "adj.",
        "meaning": "熟练精通的"
      }
    ]
  },
  "profound": {
    "syn": [
      "deep",
      "far-reaching",
      "immense",
      "momentous"
    ],
    "note": "写作金句词汇：带来深刻而深远的影响：exert a profound impact on",
    "fam": [
      {
        "text": "profoundly",
        "pos": "adv.",
        "meaning": "深刻深远地"
      }
    ]
  },
  "prognosis": {
    "syn": [
      "forecast",
      "outlook",
      "prediction",
      "expectation"
    ],
    "note": "对病情发展或治疗效果的预测；复数形式 prognoses",
    "fam": [
      {
        "text": "prognostic",
        "pos": "adj.",
        "meaning": "预后的；征兆的"
      }
    ]
  },
  "proliferate": {
    "syn": [
      "multiply",
      "mushroom",
      "burgeon",
      "spread rapidly"
    ],
    "note": "新兴技术或事物迅速激增扩散：Smartphones have proliferated across the globe.",
    "fam": [
      {
        "text": "proliferation",
        "pos": "n.",
        "meaning": "激增；扩散"
      }
    ]
  },
  "proliferation": {
    "syn": [
      "rapid spread",
      "surge",
      "expansion"
    ],
    "note": "杀伤性武器或未经审核人工智能算法的全球性泛滥扩散",
    "fam": [
      {
        "text": "proliferate",
        "pos": "v.",
        "meaning": "激增"
      }
    ]
  },
  "prolific": {
    "syn": [
      "productive",
      "fertile",
      "fruitful"
    ],
    "note": "繁衍极其迅速的大量繁殖高产物种",
    "fam": [
      {
        "text": "proliferate",
        "pos": "v.",
        "meaning": "激增"
      }
    ]
  },
  "prolong": {
    "syn": [
      "extend",
      "lengthen",
      "protract",
      "perpetuate"
    ],
    "note": "拉长工期或延长寿命：prolong human lifespan",
    "fam": [
      {
        "text": "prolongation",
        "pos": "n.",
        "meaning": "延长"
      }
    ]
  },
  "promotion": {
    "syn": [
      "advancement",
      "preferment",
      "upgrade",
      "marketing push"
    ],
    "note": "既可指职场升职晋升，也可指商场降价促销",
    "fam": [
      {
        "text": "promote",
        "pos": "v.",
        "meaning": "提拔；促进促销"
      }
    ]
  },
  "propaganda": {
    "syn": [
      "indoctrination",
      "publicity",
      "disinformation",
      "brainwashing"
    ],
    "note": "政治宣传，通常带有片面灌输或蛊惑人心的贬义色彩",
    "fam": [
      {
        "text": "propagandist",
        "pos": "n.",
        "meaning": "宣传鼓动者"
      }
    ]
  },
  "prophylaxis": {
    "syn": [
      "prevention",
      "preventative measure",
      "protection"
    ],
    "note": "医学上的预防性措施与预防性给药",
    "fam": [
      {
        "text": "prophylactic",
        "pos": "adj./n.",
        "meaning": "预防性的；预防剂"
      }
    ]
  },
  "proponent": {
    "syn": [
      "advocate",
      "supporter",
      "champion",
      "defender"
    ],
    "note": "某一政策或主张的积极拥护者：proponents of renewable energy",
    "fam": [
      {
        "text": "propose",
        "pos": "v.",
        "meaning": "提出；提议"
      }
    ]
  },
  "proprietary": {
    "syn": [
      "patented",
      "exclusive",
      "privately-owned",
      "copyrighted"
    ],
    "note": "proprietary software 指专有/闭源软件，与 open-source 相对",
    "fam": [
      {
        "text": "proprietor",
        "pos": "n.",
        "meaning": "所有者；业主"
      },
      {
        "text": "ownership",
        "pos": "n.",
        "meaning": "所有权"
      }
    ]
  },
  "propulsion": {
    "syn": [
      "thrust",
      "drive",
      "motive force",
      "impetus"
    ],
    "note": "火箭或航空器的动力推进系统：propulsion system",
    "fam": [
      {
        "text": "propel",
        "pos": "v.",
        "meaning": "推进；驱动"
      },
      {
        "text": "propellant",
        "pos": "n.",
        "meaning": "推进剂"
      }
    ]
  },
  "prose": {
    "syn": [
      "ordinary writing",
      "unrhymed text",
      "plain language"
    ],
    "note": "非诗歌体裁的普通散文小说文字，与 verse（诗体）相对",
    "fam": []
  },
  "prosecution": {
    "syn": [
      "indictment",
      "litigation",
      "legal proceedings"
    ],
    "note": "法庭公诉方或检察机关，与 defense（辩方）相对",
    "fam": [
      {
        "text": "prosecute",
        "pos": "v.",
        "meaning": "起诉；控告"
      },
      {
        "text": "prosecutor",
        "pos": "n.",
        "meaning": "检察官"
      }
    ]
  },
  "prospectus": {
    "syn": [
      "brochure",
      "catalog",
      "syllabus"
    ],
    "note": "学校面向未来申请者的招生专业简介宣传册",
    "fam": []
  },
  "protagonist": {
    "syn": [
      "main character",
      "hero",
      "lead",
      "central figure"
    ],
    "note": "文学戏剧中的核心主角，与反派 antagonist 相对",
    "fam": []
  },
  "protectionism": {
    "syn": [
      "trade barriers",
      "tariff isolationism"
    ],
    "note": "设置壁垒排斥外国商品倾销的贸易保护主义",
    "fam": [
      {
        "text": "protectionist",
        "pos": "adj./n.",
        "meaning": "保护主义的"
      }
    ]
  },
  "protein": {
    "syn": [
      "amino acid source",
      "bodybuilding substance"
    ],
    "note": "",
    "fam": [
      {
        "text": "proteinaceous",
        "pos": "adj.",
        "meaning": "含蛋白质的"
      }
    ]
  },
  "protocol": {
    "syn": [
      "communication standard",
      "handshake rule"
    ],
    "note": "互联网底层通信网络传输协议",
    "fam": []
  },
  "prototype": {
    "syn": [
      "mock-up",
      "pilot model",
      "test sample"
    ],
    "note": "工程验证初期工程试验样机",
    "fam": []
  },
  "provenance": {
    "syn": [
      "origin",
      "lineage",
      "ownership history"
    ],
    "note": "拍卖顶级传世油画前必须核验清楚的流传谱系出处记录",
    "fam": []
  },
  "proverb": {
    "syn": [
      "adage",
      "saying",
      "maxim"
    ],
    "note": "民间广为流传蕴含祖辈智慧的古训俗语谚语",
    "fam": [
      {
        "text": "proverbial",
        "pos": "adj.",
        "meaning": "谚语的；人尽皆知的"
      }
    ]
  },
  "psychotherapy": {
    "syn": [
      "counseling",
      "psychoanalysis",
      "talk therapy"
    ],
    "note": "通过对话交流进行的心理咨询与心理治疗",
    "fam": [
      {
        "text": "psychotherapist",
        "pos": "n.",
        "meaning": "心理治疗师"
      }
    ]
  },
  "qualification": {
    "syn": [
      "credential",
      "eligibility",
      "competency"
    ],
    "note": "考取执业医师资格证所必备的法定资质条件",
    "fam": [
      {
        "text": "qualify",
        "pos": "v.",
        "meaning": "取得资格"
      }
    ]
  },
  "qualitative": {
    "syn": [
      "descriptive",
      "narrative",
      "non-numerical"
    ],
    "note": "定性深度访谈口述史质性研究",
    "fam": [
      {
        "text": "qualitatively",
        "pos": "adv.",
        "meaning": "定性地"
      }
    ]
  },
  "quantify": {
    "syn": [
      "measure",
      "calculate",
      "compute",
      "gauge"
    ],
    "note": "将抽象感受转化为可精确测量的数值量化：quantify the economic impact",
    "fam": [
      {
        "text": "quantitative",
        "pos": "adj.",
        "meaning": "定量的"
      },
      {
        "text": "quantity",
        "pos": "n.",
        "meaning": "数量"
      }
    ]
  },
  "quantitative": {
    "syn": [
      "numerical",
      "statistical",
      "measurable"
    ],
    "note": "大样本问卷回归定量数值分析",
    "fam": [
      {
        "text": "quantitatively",
        "pos": "adv.",
        "meaning": "定量地"
      },
      {
        "text": "quantify",
        "pos": "v.",
        "meaning": "量化"
      }
    ]
  },
  "quantum": {
    "syn": [
      "subatomic discrete unit"
    ],
    "note": "quantum computing 超越经典极限的量子计算",
    "fam": [
      {
        "text": "quantize",
        "pos": "v.",
        "meaning": "使量子化"
      }
    ]
  },
  "quarantine": {
    "syn": [
      "isolation",
      "sanitary cordon"
    ],
    "note": "口岸对密切接触者实施的医学隔离观察",
    "fam": []
  },
  "quota": {
    "syn": [
      "allowance",
      "ration",
      "limit",
      "ceiling"
    ],
    "note": "对特定纺织品进口设立的年度刚性配额限制",
    "fam": []
  },
  "radiation": {
    "syn": [
      "radiotherapy",
      "emission",
      "irradiation"
    ],
    "note": "放疗通常称 radiation therapy 或 radiotherapy",
    "fam": [
      {
        "text": "radiate",
        "pos": "v.",
        "meaning": "散发；辐射"
      },
      {
        "text": "radioactive",
        "pos": "adj.",
        "meaning": "放射性的"
      }
    ]
  },
  "ransomware": {
    "syn": [
      "malware",
      "cyber-extortion software",
      "blackmail software"
    ],
    "note": "网络犯罪高频考点，指锁定文件索要赎金的恶意程序",
    "fam": [
      {
        "text": "ransom",
        "pos": "n./v.",
        "meaning": "赎金；赎出"
      }
    ]
  },
  "rapport": {
    "syn": [
      "affinity",
      "bond",
      "harmony",
      "connection",
      "empathy"
    ],
    "note": "彼此投缘产生高度信任与默契关系：build a good rapport with",
    "fam": []
  },
  "ratification": {
    "syn": [
      "approval",
      "endorsement",
      "confirmation",
      "validation"
    ],
    "note": "议会对国际公约条约的正式批准生效",
    "fam": [
      {
        "text": "ratify",
        "pos": "v.",
        "meaning": "批准签署条约"
      }
    ]
  },
  "rational": {
    "syn": [
      "logical",
      "sensible",
      "reasonable",
      "sound"
    ],
    "note": "经济学基本假设理性人：rational consumer",
    "fam": [
      {
        "text": "rationally",
        "pos": "adv.",
        "meaning": "理性地"
      },
      {
        "text": "rationalize",
        "pos": "v.",
        "meaning": "使合理化"
      }
    ]
  },
  "rationalize": {
    "syn": [
      "justify",
      "excuse",
      "explain away",
      "defend"
    ],
    "note": "心理防御机制：为自己的错误行为找借口自圆其说",
    "fam": [
      {
        "text": "rationalization",
        "pos": "n.",
        "meaning": "合理化借口"
      }
    ]
  },
  "re-entry": {
    "syn": [
      "return",
      "ingress",
      "re-entrance"
    ],
    "note": "航天中特指重返稠密大气层的高温关键阶段",
    "fam": [
      {
        "text": "re-enter",
        "pos": "v.",
        "meaning": "重返；重新进入"
      }
    ]
  },
  "rebalance": {
    "syn": [
      "realign",
      "adjust",
      "readjust allocations"
    ],
    "note": "定期调整股债资产配比以控制投资组合风险",
    "fam": [
      {
        "text": "balance",
        "pos": "v./n.",
        "meaning": "平衡"
      }
    ]
  },
  "rebound": {
    "syn": [
      "rally",
      "recover",
      "bounce back",
      "resurge"
    ],
    "note": "经历触底后强劲反弹复苏：The market rebounded swiftly.",
    "fam": []
  },
  "rebut": {
    "syn": [
      "refute",
      "counter",
      "disprove",
      "negate"
    ],
    "note": "在辩论或大作文中针对反方质疑进行反驳：rebut the criticism",
    "fam": [
      {
        "text": "rebuttal",
        "pos": "n.",
        "meaning": "反驳答辩"
      }
    ]
  },
  "recapitulate": {
    "syn": [
      "recap",
      "summarize",
      "reiterate",
      "review"
    ],
    "note": "在演讲或结语中扼要复述总结关键要点：recapitulate main points",
    "fam": [
      {
        "text": "recap",
        "pos": "v./n.",
        "meaning": "回顾简述"
      }
    ]
  },
  "recession": {
    "syn": [
      "economic downturn",
      "slump",
      "depression",
      "decline"
    ],
    "note": "连续两个季度GDP负增长的技术性经济衰退",
    "fam": [
      {
        "text": "recede",
        "pos": "v.",
        "meaning": "后退减弱"
      }
    ]
  },
  "recidivism": {
    "syn": [
      "reoffending",
      "relapse into crime",
      "habitual criminality"
    ],
    "note": "犯罪学核心词汇：出狱犯人重新犯罪的累犯率",
    "fam": [
      {
        "text": "recidivist",
        "pos": "n.",
        "meaning": "惯犯；累犯"
      }
    ]
  },
  "reciprocity": {
    "syn": [
      "mutual benefit",
      "give-and-take",
      "cooperation",
      "quid pro quo"
    ],
    "note": "人际交往与国际关系的礼尚往来互惠原则：principle of reciprocity",
    "fam": [
      {
        "text": "reciprocal",
        "pos": "adj.",
        "meaning": "相互的；互惠的"
      },
      {
        "text": "reciprocate",
        "pos": "v.",
        "meaning": "回报；酬答"
      }
    ]
  },
  "reconcile": {
    "syn": [
      "harmonize",
      "integrate",
      "settle",
      "accommodate"
    ],
    "note": "调和看似互不相容的矛盾两端：reconcile economic growth with environmental protection",
    "fam": [
      {
        "text": "reconciliation",
        "pos": "n.",
        "meaning": "和解；调和"
      }
    ]
  },
  "reconciliation": {
    "syn": [
      "settlement",
      "appeasement",
      "harmony",
      "peace-making"
    ],
    "note": "经历冲突后重归于好与民族和解：racial/political reconciliation",
    "fam": [
      {
        "text": "reconcile",
        "pos": "v.",
        "meaning": "调解；使和好"
      }
    ]
  },
  "recovery": {
    "syn": [
      "restoration",
      "recuperation",
      "healing",
      "rebound"
    ],
    "note": "运动健身中的超量恢复期：post-workout recovery",
    "fam": [
      {
        "text": "recover",
        "pos": "v.",
        "meaning": "康复；收回"
      }
    ]
  },
  "recreation": {
    "syn": [
      "entertainment",
      "diversion",
      "play",
      "amusement"
    ],
    "note": "强身健体的户外或室内康体活动：recreational facilities",
    "fam": [
      {
        "text": "recreational",
        "pos": "adj.",
        "meaning": "休闲娱乐的"
      }
    ]
  },
  "recruitment": {
    "syn": [
      "hiring",
      "headhunting",
      "enlistment",
      "staffing"
    ],
    "note": "企业人才招募引进体系：recruitment process",
    "fam": [
      {
        "text": "recruit",
        "pos": "v./n.",
        "meaning": "招聘；新兵"
      }
    ]
  },
  "recycle": {
    "syn": [
      "reprocess",
      "reclaim"
    ],
    "note": "垃圾分类资源化再生循环利用",
    "fam": [
      {
        "text": "recyclable",
        "pos": "adj.",
        "meaning": "可回收的"
      }
    ]
  },
  "redevelopment": {
    "syn": [
      "regeneration",
      "revitalization",
      "urban renewal",
      "renovation"
    ],
    "note": "老旧城区二次开发改造更新：urban redevelopment",
    "fam": [
      {
        "text": "redevelop",
        "pos": "v.",
        "meaning": "重新开发"
      }
    ]
  },
  "redundancy": {
    "syn": [
      "backup capacity",
      "duplication"
    ],
    "note": "高可用数据中心异地多活灾备冗余度",
    "fam": [
      {
        "text": "redundant",
        "pos": "adj.",
        "meaning": "多余冗余的"
      }
    ]
  },
  "referendum": {
    "syn": [
      "popular vote",
      "plebiscite",
      "ballot"
    ],
    "note": "针对重大宪法议题的全民公民投票：hold a referendum",
    "fam": [
      {
        "text": "refer",
        "pos": "v.",
        "meaning": "参考；涉及"
      }
    ]
  },
  "reforestation": {
    "syn": [
      "afforestation",
      "tree replanting"
    ],
    "note": "退耕还林、植树造林工程",
    "fam": [
      {
        "text": "reforest",
        "pos": "v.",
        "meaning": "重新造林"
      }
    ]
  },
  "refurbishment": {
    "syn": [
      "renovation",
      "makeover",
      "facelift",
      "restoration"
    ],
    "note": "商业或住宅物业的重装翻新修缮：undergo refurbishment",
    "fam": [
      {
        "text": "refurbish",
        "pos": "v.",
        "meaning": "翻新装潢"
      }
    ]
  },
  "refute": {
    "syn": [
      "disprove",
      "debunk",
      "confute",
      "rebut"
    ],
    "note": "大作文让步段彻底驳倒对方漏洞百出的观点：refute the opposing argument",
    "fam": [
      {
        "text": "refutation",
        "pos": "n.",
        "meaning": "驳斥论证"
      }
    ]
  },
  "regimen": {
    "syn": [
      "routine",
      "schedule",
      "program",
      "dietary plan"
    ],
    "note": "指有规律的科学锻炼计划或饮食养生规则：exercise regimen",
    "fam": [
      {
        "text": "regime",
        "pos": "n.",
        "meaning": "政权；管理体制"
      }
    ]
  },
  "regulation": {
    "syn": [
      "rule",
      "guideline",
      "ordinance",
      "directive"
    ],
    "note": "政府制定的规章监管条例：environmental/safety regulations",
    "fam": [
      {
        "text": "regulate",
        "pos": "v.",
        "meaning": "管制；规范"
      },
      {
        "text": "regulatory",
        "pos": "adj.",
        "meaning": "监管的"
      }
    ]
  },
  "rehabilitation": {
    "syn": [
      "recovery",
      "restoration",
      "rehab",
      "recuperation"
    ],
    "note": "康复理疗，口语常缩写为 rehab",
    "fam": [
      {
        "text": "rehabilitate",
        "pos": "v.",
        "meaning": "康复恢复；平反"
      },
      {
        "text": "rehabilitative",
        "pos": "adj.",
        "meaning": "复健的"
      }
    ]
  },
  "reintroduction": {
    "syn": [
      "restocking",
      "re-establishment"
    ],
    "note": "将濒危物种重新野化放归大自然",
    "fam": [
      {
        "text": "reintroduce",
        "pos": "v.",
        "meaning": "重新引入放归"
      }
    ]
  },
  "reiterate": {
    "syn": [
      "repeat",
      "restructure",
      "reaffirm",
      "restate"
    ],
    "note": "大作文结尾段再次重申升华中心思想：reiterate one's stance",
    "fam": [
      {
        "text": "reiteration",
        "pos": "n.",
        "meaning": "重申"
      }
    ]
  },
  "rejection": {
    "syn": [
      "dismissal",
      "refusal",
      "repudiation"
    ],
    "note": "器官移植术后的免疫排斥反应：immune rejection",
    "fam": [
      {
        "text": "reject",
        "pos": "v.",
        "meaning": "排斥；拒绝"
      }
    ]
  },
  "relapse": {
    "syn": [
      "recurrence",
      "reversion",
      "deterioration",
      "setback"
    ],
    "note": "指疾病缓解后的旧病复发，或恶习重犯",
    "fam": [
      {
        "text": "lapsed",
        "pos": "adj.",
        "meaning": "失效的；堕落的"
      }
    ]
  },
  "relativism": {
    "syn": [
      "subjectivism",
      "contextualism"
    ],
    "note": "主张不同文化各有其价值标准的文化相对主义：cultural relativism",
    "fam": [
      {
        "text": "relativist",
        "pos": "n./adj.",
        "meaning": "相对主义者"
      }
    ]
  },
  "reliability": {
    "syn": [
      "consistency",
      "dependability",
      "stability"
    ],
    "note": "多次重复测量结果的一致性信度",
    "fam": [
      {
        "text": "reliable",
        "pos": "adj.",
        "meaning": "可靠的"
      }
    ]
  },
  "relic": {
    "syn": [
      "vestige",
      "remnant",
      "antique"
    ],
    "note": "战争洗礼后幸存下来的珍稀历史古物遗迹遗物",
    "fam": []
  },
  "relief": {
    "syn": [
      "humanitarian aid",
      "rescue supplies"
    ],
    "note": "紧急空投帐篷棉被瓶装水的抗震救灾人道救援物资",
    "fam": [
      {
        "text": "relieve",
        "pos": "v.",
        "meaning": "缓解救助"
      }
    ]
  },
  "remedial": {
    "syn": [
      "corrective",
      "compensatory",
      "supplementary"
    ],
    "note": "remedial class 指面向后进生的课后补习班",
    "fam": [
      {
        "text": "remedy",
        "pos": "n./v.",
        "meaning": "补救方法；弥补"
      }
    ]
  },
  "remission": {
    "syn": [
      "abatement",
      "subsidence",
      "reprieve",
      "alleviation"
    ],
    "note": "医学指慢性病或癌症症状缓解减轻期：in complete remission",
    "fam": [
      {
        "text": "remit",
        "pos": "v.",
        "meaning": "免除；汇款；缓解"
      }
    ]
  },
  "remuneration": {
    "syn": [
      "pay",
      "wages",
      "emoluments",
      "stipend"
    ],
    "note": "正式商务用词：高管薪酬与报酬",
    "fam": [
      {
        "text": "remunerative",
        "pos": "adj.",
        "meaning": "有报酬的；赚钱的"
      }
    ]
  },
  "renaissance": {
    "syn": [
      "rebirth",
      "revival",
      "resurgence",
      "renewal"
    ],
    "note": "大写 Renaissance 指欧洲文艺复兴；小写指文化经济复兴",
    "fam": [
      {
        "text": "revive",
        "pos": "v.",
        "meaning": "使复苏"
      }
    ]
  },
  "renewable": {
    "syn": [
      "sustainable",
      "inexhaustible",
      "green"
    ],
    "note": "可再生清洁能源",
    "fam": [
      {
        "text": "renew",
        "pos": "v.",
        "meaning": "更新"
      }
    ]
  },
  "repatriation": {
    "syn": [
      "return",
      "restitution",
      "restoration"
    ],
    "note": "通过国际司法与外交渠道向掠夺国严正索回流失文物的文物追索返还",
    "fam": [
      {
        "text": "repatriate",
        "pos": "v.",
        "meaning": "遣返；归还文物"
      }
    ]
  },
  "repercussion": {
    "syn": [
      "consequence",
      "aftermath",
      "fallout",
      "backlash",
      "reverberation"
    ],
    "note": "某事件引发的广泛连锁负面影响（常用复数 repercussions）",
    "fam": []
  },
  "repetition": {
    "syn": [
      "iteration",
      "rep",
      "recurrence"
    ],
    "note": "健身组次中的每一次重复，口语常缩写为 rep",
    "fam": [
      {
        "text": "repeat",
        "pos": "v.",
        "meaning": "重复"
      },
      {
        "text": "repetitive",
        "pos": "adj.",
        "meaning": "重复单调的"
      }
    ]
  },
  "replicate": {
    "syn": [
      "reproduce",
      "duplicate",
      "repeat"
    ],
    "note": "科学实验必须经得起其他团队的可复现检验",
    "fam": [
      {
        "text": "replication",
        "pos": "n.",
        "meaning": "复现复制"
      }
    ]
  },
  "reshoring": {
    "syn": [
      "onshoring",
      "repatriation of manufacturing"
    ],
    "note": "与 offshoring（离岸外包）相对，指制造产能重返本国",
    "fam": [
      {
        "text": "offshore",
        "pos": "v./adj.",
        "meaning": "向境外外包；离岸的"
      }
    ]
  },
  "resignation": {
    "syn": [
      "departure",
      "stepping down",
      "vacating office",
      "relinquishment"
    ],
    "note": "主动提出辞职离职：tender one's resignation",
    "fam": [
      {
        "text": "resign",
        "pos": "v.",
        "meaning": "辞职；屈从"
      }
    ]
  },
  "resilience": {
    "syn": [
      "toughness",
      "rebounding capacity"
    ],
    "note": "城市生命线管网大灾过后的自我修复恢复弹性韧性",
    "fam": [
      {
        "text": "resilient",
        "pos": "adj.",
        "meaning": "有韧性的"
      }
    ]
  },
  "resilient": {
    "syn": [
      "tough",
      "hardy",
      "rebounding"
    ],
    "note": "重病康复后表现出的强大生理心理复原力",
    "fam": [
      {
        "text": "resilience",
        "pos": "n.",
        "meaning": "复原力"
      }
    ]
  },
  "resistance": {
    "syn": [
      "opposition",
      "defiance",
      "immunity",
      "tolerance"
    ],
    "note": "医学考点 antibiotic resistance（抗生素耐药性）",
    "fam": [
      {
        "text": "resist",
        "pos": "v.",
        "meaning": "抵制；抗击"
      },
      {
        "text": "resistant",
        "pos": "adj.",
        "meaning": "有耐药性的"
      }
    ]
  },
  "resonance": {
    "syn": [
      "reverberation",
      "empathy",
      "affinity",
      "echo"
    ],
    "note": "引发读者或听众强烈的情感共鸣与深远回响",
    "fam": [
      {
        "text": "resonate",
        "pos": "v.",
        "meaning": "共鸣；共振"
      }
    ]
  },
  "respiratory": {
    "syn": [
      "breathing-related"
    ],
    "note": "吸入粉尘烟尘诱发的慢性支气管哮喘呼吸系统疾病",
    "fam": [
      {
        "text": "respiration",
        "pos": "n.",
        "meaning": "呼吸"
      }
    ]
  },
  "restoration": {
    "syn": [
      "repair",
      "rehabilitation",
      "renovation"
    ],
    "note": "修旧如旧严守原真性修复古建筑壁画的文物修复工程",
    "fam": [
      {
        "text": "restore",
        "pos": "v.",
        "meaning": "修复恢复"
      }
    ]
  },
  "restructuring": {
    "syn": [
      "reorganization",
      "shakeup",
      "realignment"
    ],
    "note": "陷入资不抵债困局后的破产重整与业务重组",
    "fam": [
      {
        "text": "restructure",
        "pos": "v.",
        "meaning": "重构调整"
      }
    ]
  },
  "retain": {
    "syn": [
      "remember",
      "keep",
      "preserve",
      "hold"
    ],
    "note": "对所学知识的长期记忆保持",
    "fam": [
      {
        "text": "retention",
        "pos": "n.",
        "meaning": "保持力，留存率"
      },
      {
        "text": "retentive",
        "pos": "adj.",
        "meaning": "记性好的"
      }
    ]
  },
  "retention": {
    "syn": [
      "persistence rate",
      "stay-on rate"
    ],
    "note": "高校维持新生持续就读不辍学的学生保留率指标",
    "fam": [
      {
        "text": "retain",
        "pos": "v.",
        "meaning": "保留"
      }
    ]
  },
  "retraction": {
    "syn": [
      "withdrawal",
      "correction",
      "disavowal",
      "recantation"
    ],
    "note": "学术期刊或报社撤回造假或失实报道的官方撤稿声明",
    "fam": [
      {
        "text": "retract",
        "pos": "v.",
        "meaning": "撤回；缩回"
      }
    ]
  },
  "retrofit": {
    "syn": [
      "modify",
      "upgrade",
      "re-equip"
    ],
    "note": "为传统燃油机械加装电控混合动力装置翻新改造",
    "fam": []
  },
  "retrofitting": {
    "syn": [
      "upgrading",
      "modernizing",
      "modifying"
    ],
    "note": "对老旧建筑外墙开展高效节能保温改造",
    "fam": [
      {
        "text": "retrofit",
        "pos": "v./n.",
        "meaning": "翻新改装"
      }
    ]
  },
  "retrospective": {
    "syn": [
      "lookback",
      "review exhibition",
      "recollective"
    ],
    "note": "美术馆为著名大师举办的艺术生涯回顾展",
    "fam": [
      {
        "text": "retrospect",
        "pos": "n.",
        "meaning": "回顾；回想"
      }
    ]
  },
  "revenue": {
    "syn": [
      "income",
      "earnings",
      "turnover",
      "proceeds",
      "receipts"
    ],
    "note": "企业主营业务收入或政府税收：annual revenue",
    "fam": [
      {
        "text": "tax revenue",
        "pos": "n.",
        "meaning": "税收收入"
      }
    ]
  },
  "revert": {
    "syn": [
      "return",
      "retrogress",
      "regress",
      "relapse"
    ],
    "note": "回复到之前的旧习惯或原状：revert to old habits",
    "fam": [
      {
        "text": "reversion",
        "pos": "n.",
        "meaning": "恢复；回复"
      }
    ]
  },
  "revitalize": {
    "syn": [
      "rejuvenate",
      "renew",
      "invigorate",
      "resuscitate"
    ],
    "note": "让濒危传统语言或垂死老街区重新焕发生机：revitalize indigenous languages",
    "fam": [
      {
        "text": "revitalization",
        "pos": "n.",
        "meaning": "复兴；新生"
      }
    ]
  },
  "rhetoric": {
    "syn": [
      "oratory",
      "persuasive speaking",
      "discourse"
    ],
    "note": "古希腊传承至今的修辞说服艺术与修辞手法",
    "fam": [
      {
        "text": "rhetorical",
        "pos": "adj.",
        "meaning": "修辞的"
      }
    ]
  },
  "rigorous": {
    "syn": [
      "strict",
      "stringent",
      "meticulous",
      "exacting",
      "flawless"
    ],
    "note": "学术研究必备的治学严谨态度：rigorous scientific testing",
    "fam": [
      {
        "text": "rigor",
        "pos": "n.",
        "meaning": "严谨严密"
      }
    ]
  },
  "rigour": {
    "syn": [
      "strictness",
      "severity",
      "thoroughness"
    ],
    "note": "做学问一丝不苟滴水不漏的治学严谨性与严苛标准",
    "fam": [
      {
        "text": "rigorous",
        "pos": "adj.",
        "meaning": "严谨严密的"
      }
    ]
  },
  "ritual": {
    "syn": [
      "ceremony",
      "rite",
      "observance"
    ],
    "note": "遵循古制举行的泰山封禅登基祈福大典神圣祭祀仪式",
    "fam": [
      {
        "text": "ritualistic",
        "pos": "adj.",
        "meaning": "仪式性的"
      }
    ]
  },
  "robotics": {
    "syn": [
      "mechatronics",
      "automated systems"
    ],
    "note": "工业人形机器人学工程",
    "fam": []
  },
  "rote": {
    "syn": [
      "mechanical memorization",
      "memorizing"
    ],
    "note": "rote learning 指死记硬背的学习方法",
    "fam": []
  },
  "router": {
    "syn": [
      "network hub",
      "gateway switch"
    ],
    "note": "家庭与机房千兆网络无线路由器",
    "fam": []
  },
  "rubric": {
    "syn": [
      "scoring guide",
      "grading criteria"
    ],
    "note": "考官手握的详细细分评分量表与判分准则",
    "fam": []
  },
  "rumination": {
    "syn": [
      "brooding",
      "overthinking",
      "mulling over",
      "meditation"
    ],
    "note": "心理学指脑中不断反复纠结痛苦经历的负面反刍思维",
    "fam": [
      {
        "text": "ruminate",
        "pos": "v.",
        "meaning": "反刍；沉思"
      }
    ]
  },
  "sabbatical": {
    "syn": [
      "study leave",
      "extended break",
      "furlough"
    ],
    "note": "高校学者或高管每隔数年享受的带薪长学术休假",
    "fam": [
      {
        "text": "sabbath",
        "pos": "n.",
        "meaning": "安息日"
      }
    ]
  },
  "sacred": {
    "syn": [
      "holy",
      "divine",
      "hallowed",
      "blessed"
    ],
    "note": "香火缭绕令人肃然起敬的神圣古老殿堂宗教圣地",
    "fam": []
  },
  "safety net": {
    "syn": [
      "social protection",
      "welfare safeguard",
      "cushion"
    ],
    "note": "社会救助兜底保障制度",
    "fam": []
  },
  "sample": {
    "syn": [
      "specimen",
      "cross-section",
      "test group"
    ],
    "note": "从总体中抽取的统计学受试样本群",
    "fam": []
  },
  "sanction": {
    "syn": [
      "penalty",
      "embargo",
      "boycott",
      "authorization"
    ],
    "note": "国际政治中常用复数 sanctions 指经济制裁；作动词也可表官方认可批准",
    "fam": [
      {
        "text": "sanctioned",
        "pos": "adj.",
        "meaning": "受制裁的；获认可的"
      }
    ]
  },
  "sanctions": {
    "syn": [
      "punitive measures",
      "penalties",
      "restrictions"
    ],
    "note": "常用于 impose economic sanctions on",
    "fam": [
      {
        "text": "sanction",
        "pos": "v./n.",
        "meaning": "制裁；批准"
      }
    ]
  },
  "sanctuary": {
    "syn": [
      "reserve",
      "refuge",
      "haven"
    ],
    "note": "野生动物禁猎自然保护区",
    "fam": []
  },
  "sanitation": {
    "syn": [
      "hygiene",
      "public cleanliness",
      "drainage"
    ],
    "note": "改善贫民窟饮用水与公共环境卫生设施",
    "fam": [
      {
        "text": "sanitary",
        "pos": "adj.",
        "meaning": "卫生的"
      }
    ]
  },
  "satellite": {
    "syn": [
      "orbiter",
      "spacecraft"
    ],
    "note": "北斗导航组网人造高低轨卫星",
    "fam": []
  },
  "satire": {
    "syn": [
      "parody",
      "ridicule",
      "burlesque",
      "lampoon"
    ],
    "note": "运用幽默尖锐讽刺抨击社会丑恶现象的讽刺文学艺术",
    "fam": [
      {
        "text": "satirical",
        "pos": "adj.",
        "meaning": "讽刺的"
      },
      {
        "text": "satirist",
        "pos": "n.",
        "meaning": "讽刺作家"
      }
    ]
  },
  "saturated": {
    "syn": [
      "soaked",
      "steeped",
      "full",
      "dense"
    ],
    "note": "saturated fat 指饱和脂肪酸；日常也指浸透或市场饱和",
    "fam": [
      {
        "text": "saturate",
        "pos": "v.",
        "meaning": "使浸透；使饱和"
      },
      {
        "text": "saturation",
        "pos": "n.",
        "meaning": "饱和状态"
      }
    ]
  },
  "saturation": {
    "syn": [
      "surfeit",
      "glut",
      "overcrowding",
      "plenitude"
    ],
    "note": "市场供过于求饱和状态：market saturation",
    "fam": [
      {
        "text": "saturate",
        "pos": "v.",
        "meaning": "使充斥饱和"
      }
    ]
  },
  "scaffold": {
    "syn": [
      "support structure",
      "stepwise guidance"
    ],
    "note": "教育学理论中的支架式教学方法",
    "fam": [
      {
        "text": "scaffolding",
        "pos": "n.",
        "meaning": "脚手架支架"
      }
    ]
  },
  "scaffolding": {
    "syn": [
      "framework",
      "staging",
      "temporary support"
    ],
    "note": "建筑外墙工人施工踩踏的脚手架钢管系统",
    "fam": []
  },
  "scalability": {
    "syn": [
      "expandability",
      "growth capacity"
    ],
    "note": "高并发微服务弹性可伸缩可扩展性",
    "fam": [
      {
        "text": "scalable",
        "pos": "adj.",
        "meaning": "可扩展的"
      }
    ]
  },
  "scapegoat": {
    "syn": [
      "whipping boy",
      "fall guy",
      "patsy"
    ],
    "note": "被推出来替整个团队或社会过错顶罪背黑锅的替罪羊",
    "fam": [
      {
        "text": "scapegoating",
        "pos": "n.",
        "meaning": "嫁祸于人；找替罪羊"
      }
    ]
  },
  "scarcity": {
    "syn": [
      "shortage",
      "dearth",
      "deficiency",
      "paucity"
    ],
    "note": "极度缺水地区的淡水资源匮乏危机",
    "fam": [
      {
        "text": "scarce",
        "pos": "adj.",
        "meaning": "稀缺罕见的"
      }
    ]
  },
  "schema": {
    "syn": [
      "framework",
      "mental model",
      "cognitive blueprint"
    ],
    "note": "皮亚杰认知心理学：人脑中储存经验和理解世界的‘心理图式’",
    "fam": [
      {
        "text": "schematic",
        "pos": "adj.",
        "meaning": "图式的；简明的"
      }
    ]
  },
  "scholar": {
    "syn": [
      "academic",
      "researcher",
      "savant"
    ],
    "note": "耐得住寂寞终身潜心治学的真正饱学鸿儒学者",
    "fam": [
      {
        "text": "scholastic",
        "pos": "adj.",
        "meaning": "学业的；学术的"
      }
    ]
  },
  "scholarship": {
    "syn": [
      "fellowship",
      "grant",
      "bursary",
      "financial aid"
    ],
    "note": "scholarship 凭借学业优异取得，bursary 常按经济贫困程度资助",
    "fam": [
      {
        "text": "scholar",
        "pos": "n.",
        "meaning": "学者"
      },
      {
        "text": "scholarly",
        "pos": "adj.",
        "meaning": "学术的，博学的"
      }
    ]
  },
  "scoop": {
    "syn": [
      "exclusive",
      "inside story",
      "breakthrough report"
    ],
    "note": "抢在所有竞争同行之前率先爆料的独家劲爆新闻",
    "fam": []
  },
  "screen": {
    "syn": [
      "examine",
      "test",
      "evaluate",
      "filter",
      "scan"
    ],
    "note": "医学上指普查筛查潜在病症：screen for cancer/diabetes",
    "fam": [
      {
        "text": "screening",
        "pos": "n.",
        "meaning": "筛查体检"
      }
    ]
  },
  "scrutable": {
    "syn": [
      "comprehensible",
      "understandable",
      "transparent",
      "fathomable"
    ],
    "note": "容易被人读懂理解看透的，反义词为 inscrutable",
    "fam": []
  },
  "scrutinize": {
    "syn": [
      "examine",
      "inspect",
      "audit",
      "dissect",
      "probe"
    ],
    "note": "拿着放大镜用批判眼光严格细致审视：scrutinize every piece of evidence",
    "fam": [
      {
        "text": "scrutiny",
        "pos": "n.",
        "meaning": "严格审查监督"
      }
    ]
  },
  "scrutiny": {
    "syn": [
      "inspection",
      "examination",
      "audit"
    ],
    "note": "处于同行评议最严苛的放大镜审视之下",
    "fam": [
      {
        "text": "scrutinize",
        "pos": "v.",
        "meaning": "仔细审查"
      }
    ]
  },
  "sculpture": {
    "syn": [
      "statue",
      "carving",
      "effigy",
      "monument"
    ],
    "note": "",
    "fam": [
      {
        "text": "sculptor",
        "pos": "n.",
        "meaning": "雕刻家"
      },
      {
        "text": "sculpt",
        "pos": "v.",
        "meaning": "雕刻造型"
      }
    ]
  },
  "sedentary": {
    "syn": [
      "inactive",
      "deskbound",
      "sitting"
    ],
    "note": "整日案头久坐不动缺乏体育锻炼的静态久坐生活",
    "fam": [
      {
        "text": "sedentariness",
        "pos": "n.",
        "meaning": "久坐不动"
      }
    ]
  },
  "sediment": {
    "syn": [
      "silt",
      "alluvium",
      "deposit"
    ],
    "note": "黄河下游河道泥沙常年淤积形成的沉积泥沙",
    "fam": [
      {
        "text": "sedimentary",
        "pos": "adj.",
        "meaning": "沉积的"
      }
    ]
  },
  "segmentation": {
    "syn": [
      "division",
      "partitioning",
      "categorization"
    ],
    "note": "市场营销核心策略：market segmentation（市场细分）",
    "fam": [
      {
        "text": "segment",
        "pos": "n./v.",
        "meaning": "细分区块；分割"
      }
    ]
  },
  "segregation": {
    "syn": [
      "separation",
      "isolation",
      "partition",
      "apartheid"
    ],
    "note": "历史上制度化的种族隔离歧视",
    "fam": [
      {
        "text": "segregate",
        "pos": "v.",
        "meaning": "隔离；分离开"
      },
      {
        "text": "desegregation",
        "pos": "n.",
        "meaning": "取消种族隔离"
      }
    ]
  },
  "seismic": {
    "syn": [
      "earthquake-related"
    ],
    "note": "建筑结构抗击八级强震的高标准抗震烈度设防",
    "fam": [
      {
        "text": "seismology",
        "pos": "n.",
        "meaning": "地震学"
      },
      {
        "text": "seismologist",
        "pos": "n.",
        "meaning": "地震学家"
      }
    ]
  },
  "self-sufficient": {
    "syn": [
      "autonomous",
      "independent",
      "self-reliant"
    ],
    "note": "海岛微电网不依靠外界的能源自给自足状态",
    "fam": [
      {
        "text": "self-sufficiency",
        "pos": "n.",
        "meaning": "自给自足"
      }
    ]
  },
  "semantic": {
    "syn": [
      "meaning-related",
      "conceptual",
      "linguistic"
    ],
    "note": "semantic memory 语义知识记忆（词汇、百科概念等不依赖场景的记忆）",
    "fam": [
      {
        "text": "semantics",
        "pos": "n.",
        "meaning": "语义学"
      }
    ]
  },
  "semantics": {
    "syn": [
      "word meaning",
      "significance"
    ],
    "note": "探寻词汇与语句深层含义的语义学",
    "fam": [
      {
        "text": "semantic",
        "pos": "adj.",
        "meaning": "语义的"
      }
    ]
  },
  "semiconductor": {
    "syn": [
      "silicon chip",
      "microprocessor"
    ],
    "note": "现代工业粮食半导体芯片",
    "fam": []
  },
  "seminar": {
    "syn": [
      "workshop",
      "colloquium",
      "discussion group"
    ],
    "note": "侧重师生互动的专题研讨会或小班研讨课",
    "fam": []
  },
  "sensationalism": {
    "syn": [
      "tabloidization",
      "yellow journalism",
      "hype",
      "scandal-mongering"
    ],
    "note": "媒体为吸引眼球而进行的耸人听闻、夸大其词的低俗报道",
    "fam": [
      {
        "text": "sensational",
        "pos": "adj.",
        "meaning": "轰动的；耸人听闻的"
      }
    ]
  },
  "sensor": {
    "syn": [
      "detector",
      "measuring probe"
    ],
    "note": "车载毫米波雷达与温湿度传感器",
    "fam": [
      {
        "text": "sensory",
        "pos": "adj.",
        "meaning": "感官的"
      }
    ]
  },
  "sensory": {
    "syn": [
      "sensual",
      "perceptual",
      "tactile"
    ],
    "note": "五官感官体验：sensory input / sensory overload",
    "fam": [
      {
        "text": "sense",
        "pos": "n./v.",
        "meaning": "感官；感知"
      }
    ]
  },
  "severance": {
    "syn": [
      "termination pay",
      "compensation",
      "redundancy payment"
    ],
    "note": "员工解除劳动合同时获得的经济补偿遣散金：severance package",
    "fam": [
      {
        "text": "sever",
        "pos": "v.",
        "meaning": "切断；断绝"
      }
    ]
  },
  "severance pay": {
    "syn": [
      "redundancy package",
      "termination allowance"
    ],
    "note": "辞退或裁员时依法给予的离职补偿",
    "fam": []
  },
  "sewage": {
    "syn": [
      "wastewater",
      "drainage"
    ],
    "note": "城市市政管网收纳的生活污水废水",
    "fam": [
      {
        "text": "sewer",
        "pos": "n.",
        "meaning": "下水道"
      }
    ]
  },
  "shareholder": {
    "syn": [
      "stockholder",
      "investor",
      "equity holder"
    ],
    "note": "shareholder value（股东价值），与 stakeholder（利益相关者）对比",
    "fam": [
      {
        "text": "share",
        "pos": "n.",
        "meaning": "股份；股票"
      }
    ]
  },
  "sightseeing": {
    "syn": [
      "touring",
      "visiting landmarks",
      "excursion"
    ],
    "note": "走马观花的名胜古迹观光游览：go sightseeing",
    "fam": []
  },
  "sign language": {
    "syn": [
      "gestural communication",
      "hand signing"
    ],
    "note": "听障人士手语沟通媒介",
    "fam": []
  },
  "silver economy": {
    "syn": [
      "aging economy",
      "elderly market",
      "mature market"
    ],
    "note": "面向老年群体的消费、健康与养老产业经济",
    "fam": []
  },
  "simulation": {
    "syn": [
      "virtual model",
      "emulation",
      "mock-up"
    ],
    "note": "风洞与气象超级计算机数值模拟仿真",
    "fam": [
      {
        "text": "simulate",
        "pos": "v.",
        "meaning": "模拟仿真"
      }
    ]
  },
  "single-use": {
    "syn": [
      "disposable",
      "throwaway"
    ],
    "note": "外卖行业推行禁塑令禁止的一次性餐盒餐具",
    "fam": []
  },
  "skylight": {
    "syn": [
      "roof window",
      "cupola window"
    ],
    "note": "屋顶采光玻璃天窗",
    "fam": []
  },
  "skyline": {
    "syn": [
      "cityscape",
      "horizon",
      "urban silhouette"
    ],
    "note": "高楼大厦在天空映照出的城市壮观天际线",
    "fam": []
  },
  "skyrocket": {
    "syn": [
      "shoot up",
      "surge",
      "explode",
      "spike"
    ],
    "note": "生动刻画房价、油价坐火箭般狂飙暴涨：Housing prices have skyrocketed.",
    "fam": []
  },
  "skyscraper": {
    "syn": [
      "tower",
      "high-rise",
      "super-tall building"
    ],
    "note": "拔地而起刺破青天的超高层摩天大楼",
    "fam": []
  },
  "slander": {
    "syn": [
      "oral defamation",
      "verbal smearing",
      "backbiting"
    ],
    "note": "以口头言论形式构成的口头诽谤",
    "fam": [
      {
        "text": "slanderous",
        "pos": "adj.",
        "meaning": "口头诽谤的"
      }
    ]
  },
  "slang": {
    "syn": [
      "colloquialism",
      "informal jargon"
    ],
    "note": "流行在街头青年网络圈子里的非正式俚语",
    "fam": []
  },
  "slum": {
    "syn": [
      "shantytown",
      "favela",
      "ghetto"
    ],
    "note": "基础设施破烂恶臭扑鼻的非法违章搭建城市贫民窟破棚户区",
    "fam": []
  },
  "slum clearance": {
    "syn": [
      "urban gentrification",
      "shantytown demolition"
    ],
    "note": "拆除危旧棚户区和贫民窟的城市安居工程",
    "fam": []
  },
  "smart city": {
    "syn": [
      "digitized metropolis",
      "IoT urban center"
    ],
    "note": "利用物联网和大数据优化治理的现代智慧城市",
    "fam": []
  },
  "smog": {
    "syn": [
      "haze",
      "soot",
      "fog pollution"
    ],
    "note": "工业烟尘与汽车尾气光化学反应形成的雾霾烟雾",
    "fam": []
  },
  "soar": {
    "syn": [
      "rocket",
      "surge",
      "escalate",
      "climb dramatically"
    ],
    "note": "物价、股价扶摇直上高飞飞涨：Prices soared dramatically.",
    "fam": []
  },
  "sodium": {
    "syn": [
      "salt content",
      "chemical element Na"
    ],
    "note": "高血压与高盐摄入相关：high sodium diet",
    "fam": [
      {
        "text": "saline",
        "pos": "adj.",
        "meaning": "含盐的；盐水的"
      }
    ]
  },
  "solar": {
    "syn": [
      "sun-powered",
      "heliac"
    ],
    "note": "常考搭配：solar energy/panels/radiation/system",
    "fam": [
      {
        "text": "sun",
        "pos": "n.",
        "meaning": "太阳"
      }
    ]
  },
  "sole-parent": {
    "syn": [
      "single-parent",
      "uniparental"
    ],
    "note": "单亲家庭：sole-parent household",
    "fam": []
  },
  "solidarity": {
    "syn": [
      "unity",
      "cohesion",
      "mutual support",
      "harmony"
    ],
    "note": "社会群体或跨国间的团结互助：social solidarity",
    "fam": [
      {
        "text": "solid",
        "pos": "adj.",
        "meaning": "坚实的；稳固的"
      },
      {
        "text": "solidify",
        "pos": "v.",
        "meaning": "使团结巩固"
      }
    ]
  },
  "soliloquy": {
    "syn": [
      "monologue",
      "aside",
      "speech to oneself"
    ],
    "note": "戏剧舞台上角色独处时的内心真情自白独白",
    "fam": []
  },
  "solvency": {
    "syn": [
      "financial stability",
      "liquidity",
      "creditworthiness"
    ],
    "note": "企业按期偿还债务的能力",
    "fam": [
      {
        "text": "solvent",
        "pos": "adj.",
        "meaning": "有偿债能力的"
      },
      {
        "text": "insolvency",
        "pos": "n.",
        "meaning": "破产无偿还能力"
      }
    ]
  },
  "somatoform": {
    "syn": [
      "psychosomatic",
      "mind-body related"
    ],
    "note": "由心理焦虑投射表现出来的无器质性躯体化症状",
    "fam": []
  },
  "sonnet": {
    "syn": [
      "fourteen-line poem",
      "rhymed lyric"
    ],
    "note": "莎士比亚十四行诗体裁",
    "fam": []
  },
  "soundbite": {
    "syn": [
      "catchphrase",
      "clip",
      "quotation",
      "slogan"
    ],
    "note": "政客演讲中专门截取供电视播放的简短引语金句",
    "fam": []
  },
  "source": {
    "syn": [
      "origin",
      "informant",
      "root",
      "wellspring"
    ],
    "note": "匿名新闻线人或信息源头：reliable/anonymous sources",
    "fam": []
  },
  "sovereign": {
    "syn": [
      "supreme",
      "independent",
      "autonomous",
      "ruler"
    ],
    "note": "金融中常指 sovereign debt（主权国家国债）",
    "fam": [
      {
        "text": "sovereignty",
        "pos": "n.",
        "meaning": "主权"
      }
    ]
  },
  "sovereignty": {
    "syn": [
      "autonomy",
      "independence",
      "self-determination"
    ],
    "note": "国家不容侵犯的神圣主权：national sovereignty",
    "fam": [
      {
        "text": "sovereign",
        "pos": "adj./n.",
        "meaning": "主权的；元首"
      }
    ]
  },
  "spacecraft": {
    "syn": [
      "spaceship",
      "vessel",
      "shuttle",
      "probe"
    ],
    "note": "单复数同形：one spacecraft / two spacecraft",
    "fam": [
      {
        "text": "craft",
        "pos": "n.",
        "meaning": "飞船；工艺"
      }
    ]
  },
  "spacious": {
    "syn": [
      "roomy",
      "commodious",
      "expansive",
      "capacious"
    ],
    "note": "室内房间开阔宽敞：a spacious living room",
    "fam": [
      {
        "text": "space",
        "pos": "n.",
        "meaning": "空间"
      }
    ]
  },
  "spectroscopy": {
    "syn": [
      "spectral analysis",
      "spectrum study"
    ],
    "note": "",
    "fam": [
      {
        "text": "spectrum",
        "pos": "n.",
        "meaning": "光谱；范围"
      },
      {
        "text": "spectroscopic",
        "pos": "adj.",
        "meaning": "分光的"
      }
    ]
  },
  "speculation": {
    "syn": [
      "gambling",
      "conjecture",
      "high-risk trade"
    ],
    "note": "民间热钱脱实向虚参与暴涨暴跌的金融资产投机炒作",
    "fam": [
      {
        "text": "speculate",
        "pos": "v.",
        "meaning": "投机；推测"
      },
      {
        "text": "speculator",
        "pos": "n.",
        "meaning": "投机客"
      }
    ]
  },
  "speculative": {
    "syn": [
      "theoretical",
      "conjectural",
      "hypothetical",
      "risky"
    ],
    "note": "缺乏确凿真凭实据的理论揣测，或金融投机买卖：purely speculative claims",
    "fam": [
      {
        "text": "speculate",
        "pos": "v.",
        "meaning": "推测；投机"
      },
      {
        "text": "speculation",
        "pos": "n.",
        "meaning": "推测；投机"
      }
    ]
  },
  "spin": {
    "syn": [
      "slant",
      "twist",
      "bias",
      "favorable interpretation"
    ],
    "note": "政治公关人员对丑闻或事件进行的有利扭曲包装（spin doctor）",
    "fam": [
      {
        "text": "spin doctor",
        "pos": "n.",
        "meaning": "政治公关高手"
      }
    ]
  },
  "sponsorship": {
    "syn": [
      "financial backing",
      "patronage",
      "funding",
      "support"
    ],
    "note": "企业对体育赛事等的商业赞助：corporate sponsorship",
    "fam": [
      {
        "text": "sponsor",
        "pos": "n./v.",
        "meaning": "赞助商；赞助"
      }
    ]
  },
  "sprain": {
    "syn": [
      "twist",
      "wrench",
      "ligament damage"
    ],
    "note": "sprain 指韧带扭伤（如 ankle sprain），strain 指肌肉拉伤",
    "fam": [
      {
        "text": "sprained",
        "pos": "adj.",
        "meaning": "扭伤的"
      }
    ]
  },
  "sprawl": {
    "syn": [
      "uncontrolled expansion",
      "spreading",
      "rambling growth"
    ],
    "note": "urban sprawl 专指城市大饼式无序摊大饼蔓延扩张",
    "fam": [
      {
        "text": "sprawling",
        "pos": "adj.",
        "meaning": "蔓延扩展的"
      }
    ]
  },
  "stabilize": {
    "syn": [
      "level off",
      "plateau",
      "settle",
      "steady"
    ],
    "note": "小作文图表趋势‘在急剧波动后企稳持平’：stabilize at roughly 50%",
    "fam": [
      {
        "text": "stability",
        "pos": "n.",
        "meaning": "稳定性"
      },
      {
        "text": "stable",
        "pos": "adj.",
        "meaning": "稳定的"
      }
    ]
  },
  "stagnation": {
    "syn": [
      "sluggishness",
      "standstill",
      "inactivity"
    ],
    "note": "经济长期停滞不前陷入中等收入陷阱",
    "fam": [
      {
        "text": "stagnant",
        "pos": "adj.",
        "meaning": "停滞不前的"
      },
      {
        "text": "stagnate",
        "pos": "v.",
        "meaning": "停滞"
      }
    ]
  },
  "stakeholder": {
    "syn": [
      "interested party",
      "investor",
      "shareholder"
    ],
    "note": "包含股东员工客户社区在内的广泛利益相关方",
    "fam": []
  },
  "stamina": {
    "syn": [
      "endurance",
      "staying power",
      "energy",
      "vitality"
    ],
    "note": "强调长时间保持高体能与专注力的耐力",
    "fam": [
      {
        "text": "vigor",
        "pos": "n.",
        "meaning": "精力；生机"
      }
    ]
  },
  "standardization": {
    "syn": [
      "normalization",
      "uniformity",
      "homogenization"
    ],
    "note": "大规模现代工业量产的核心基础",
    "fam": [
      {
        "text": "standardize",
        "pos": "v.",
        "meaning": "使标准化"
      },
      {
        "text": "standard",
        "pos": "n./adj.",
        "meaning": "标准"
      }
    ]
  },
  "standardized": {
    "syn": [
      "uniform",
      "systematized",
      "normalized"
    ],
    "note": "具有统一评分尺度与答题卡的标准化考试测验",
    "fam": [
      {
        "text": "standardize",
        "pos": "v.",
        "meaning": "使标准化"
      }
    ]
  },
  "startup": {
    "syn": [
      "new venture",
      "emerging business",
      "nascent enterprise"
    ],
    "note": "具有高成长潜力的科技初创企业",
    "fam": [
      {
        "text": "start up",
        "pos": "v.",
        "meaning": "启动；创办"
      }
    ]
  },
  "statistical": {
    "syn": [
      "numerical",
      "data-driven",
      "probabilistic"
    ],
    "note": "统计学显著性 p 值检验",
    "fam": [
      {
        "text": "statistics",
        "pos": "n.",
        "meaning": "统计学"
      },
      {
        "text": "statistically",
        "pos": "adv.",
        "meaning": "统计上"
      }
    ]
  },
  "statute": {
    "syn": [
      "law",
      "legislation",
      "act",
      "ordinance"
    ],
    "note": "经全国人大常委会审议表决全票通过的具有普遍国家强制力的正式成文法律条文",
    "fam": [
      {
        "text": "statutory",
        "pos": "adj.",
        "meaning": "法定的，依法设立的"
      }
    ]
  },
  "stem cell": {
    "syn": [
      "pluripotent cell",
      "undifferentiated cell"
    ],
    "note": "具有多向分化潜能的未分化干细胞：stem cell therapy",
    "fam": [
      {
        "text": "stem",
        "pos": "n./v.",
        "meaning": "茎；源自；阻止"
      }
    ]
  },
  "stem from": {
    "syn": [
      "originate in",
      "arise from",
      "emanate from",
      "derive from"
    ],
    "note": "雅思论证因果关系的黄金高级短语：The problem stems from...",
    "fam": []
  },
  "stereotype": {
    "syn": [
      "cliché",
      "conventional idea",
      "fixed image"
    ],
    "note": "打破对某群体固有的刻板标签：break stereotypes",
    "fam": [
      {
        "text": "stereotypical",
        "pos": "adj.",
        "meaning": "典型刻板的"
      }
    ]
  },
  "stereotypical": {
    "syn": [
      "hackneyed",
      "conventional",
      "cookie-cutter",
      "clichéd"
    ],
    "note": "充满刻板标签印记的：stereotypical views",
    "fam": [
      {
        "text": "stereotype",
        "pos": "n./v.",
        "meaning": "刻板印象"
      }
    ]
  },
  "stewardship": {
    "syn": [
      "management",
      "custodianship",
      "caregiving"
    ],
    "note": "地球公民对大自然应负的守护职责管护责任",
    "fam": [
      {
        "text": "steward",
        "pos": "n.",
        "meaning": "管理员，管家"
      }
    ]
  },
  "stigma": {
    "syn": [
      "shame",
      "disgrace",
      "dishonor",
      "blemish",
      "brand"
    ],
    "note": "精神疾病等遭到的社会偏见污名：social stigma",
    "fam": [
      {
        "text": "stigmatize",
        "pos": "v.",
        "meaning": "给...贴上耻辱标签"
      }
    ]
  },
  "stimulate": {
    "syn": [
      "encourage",
      "inspire",
      "provoke",
      "motivate"
    ],
    "note": "激发学生潜能或兴趣",
    "fam": [
      {
        "text": "stimulus",
        "pos": "n.",
        "meaning": "刺激物"
      },
      {
        "text": "stimulation",
        "pos": "n.",
        "meaning": "激发"
      }
    ]
  },
  "storage": {
    "syn": [
      "retention",
      "containment"
    ],
    "note": "抽水蓄能与化学电池储能技术",
    "fam": [
      {
        "text": "store",
        "pos": "v./n.",
        "meaning": "储存；商店"
      }
    ]
  },
  "strain": {
    "syn": [
      "pull",
      "overexert",
      "tension",
      "burden"
    ],
    "note": "肌腱肌肉过度拉扯劳损；作名词也指心理沉重压力",
    "fam": [
      {
        "text": "strained",
        "pos": "adj.",
        "meaning": "紧张的；勉强的"
      }
    ]
  },
  "stressor": {
    "syn": [
      "stimulus",
      "pressure source",
      "adversity factor"
    ],
    "note": "引发身体或心理应激反应的外在压力源：environmental/workplace stressors",
    "fam": [
      {
        "text": "stress",
        "pos": "n./v.",
        "meaning": "压力；强调"
      },
      {
        "text": "stressful",
        "pos": "adj.",
        "meaning": "充满压力的"
      }
    ]
  },
  "subconscious": {
    "syn": [
      "unconscious",
      "latent",
      "subliminal",
      "dormant"
    ],
    "note": "弗洛伊德精神分析潜意识理论：subconscious mind",
    "fam": [
      {
        "text": "subconsciously",
        "pos": "adv.",
        "meaning": "下意识地"
      }
    ]
  },
  "subcontract": {
    "syn": [
      "outsource",
      "farm out",
      "contract out"
    ],
    "note": "将工程项目部分转包给下级分包商",
    "fam": [
      {
        "text": "subcontractor",
        "pos": "n.",
        "meaning": "转包商；分包商"
      },
      {
        "text": "contract",
        "pos": "n./v.",
        "meaning": "合同；承包"
      }
    ]
  },
  "subliminal": {
    "syn": [
      "subconscious",
      "hidden",
      "unconscious",
      "implicit"
    ],
    "note": "不易察觉的潜意识广告植入：subliminal advertising",
    "fam": [
      {
        "text": "subliminally",
        "pos": "adv.",
        "meaning": "下意识地"
      }
    ]
  },
  "submissive": {
    "syn": [
      "obedient",
      "compliant",
      "yielding",
      "passive",
      "docile"
    ],
    "note": "懦弱畏缩听任他人摆布欺负的顺从屈从态度",
    "fam": [
      {
        "text": "submit",
        "pos": "v.",
        "meaning": "屈服；提交"
      },
      {
        "text": "submission",
        "pos": "n.",
        "meaning": "屈服；呈递"
      }
    ]
  },
  "subservient": {
    "syn": [
      "subordinate",
      "servile",
      "obsequious",
      "deferential"
    ],
    "note": "甘居下风、百依百顺的卑微附庸态度",
    "fam": [
      {
        "text": "subservience",
        "pos": "n.",
        "meaning": "谄媚逢迎；从属性"
      }
    ]
  },
  "subsidized": {
    "syn": [
      "government-funded",
      "assisted",
      "low-cost"
    ],
    "note": "享受国家财政补贴的经济适用房：subsidized housing",
    "fam": [
      {
        "text": "subsidy",
        "pos": "n.",
        "meaning": "财政补贴"
      },
      {
        "text": "subsidize",
        "pos": "v.",
        "meaning": "资助补贴"
      }
    ]
  },
  "subsidy": {
    "syn": [
      "financial grant",
      "government allowance",
      "aid"
    ],
    "note": "财政给高新技术企业发放的研发补贴",
    "fam": [
      {
        "text": "subsidize",
        "pos": "v.",
        "meaning": "补贴资助"
      }
    ]
  },
  "substantiate": {
    "syn": [
      "corroborate",
      "verify",
      "back up"
    ],
    "note": "拿出过硬的物证与事实证据来证实学术假说",
    "fam": [
      {
        "text": "substantial",
        "pos": "adj.",
        "meaning": "实质的，大量的"
      }
    ]
  },
  "subterranean": {
    "syn": [
      "underground",
      "subsurface"
    ],
    "note": "暗无天日阴冷潮湿的地下暗河溶洞深处",
    "fam": []
  },
  "subtle": {
    "syn": [
      "delicate",
      "nuanced",
      "understated",
      "fine",
      "elusive"
    ],
    "note": "细微精妙难以明说的微小差异：subtle differences/nuances",
    "fam": [
      {
        "text": "subtlety",
        "pos": "n.",
        "meaning": "微妙之处"
      }
    ]
  },
  "suburb": {
    "syn": [
      "outskirts",
      "outer edge",
      "suburbia"
    ],
    "note": "围绕中心市区通勤轨道周边营建的优美宁静卫星城郊区",
    "fam": [
      {
        "text": "suburban",
        "pos": "adj.",
        "meaning": "郊区的"
      }
    ]
  },
  "summative": {
    "syn": [
      "final",
      "concluding",
      "culminating"
    ],
    "note": "学期末决定能否毕业升学的终结性考试评定",
    "fam": [
      {
        "text": "summary",
        "pos": "n.",
        "meaning": "总结"
      }
    ]
  },
  "summit": {
    "syn": [
      "conference",
      "top-level meeting",
      "peak"
    ],
    "note": "联合国气候变化国际首脑峰会",
    "fam": []
  },
  "supernova": {
    "syn": [
      "exploding star",
      "stellar explosion"
    ],
    "note": "",
    "fam": [
      {
        "text": "nova",
        "pos": "n.",
        "meaning": "新星"
      }
    ]
  },
  "supervisor": {
    "syn": [
      "advisor",
      "mentor",
      "director"
    ],
    "note": "在研究生阶段专指学术导师",
    "fam": [
      {
        "text": "supervise",
        "pos": "v.",
        "meaning": "指导，监督"
      },
      {
        "text": "supervision",
        "pos": "n.",
        "meaning": "监督指导"
      }
    ]
  },
  "supplements": {
    "syn": [
      "additions",
      "vitamins",
      "nutritional aids",
      "enhancements"
    ],
    "note": "dietary supplements 指膳食保健品/维生素片",
    "fam": [
      {
        "text": "supplement",
        "pos": "v.",
        "meaning": "补充；增补"
      },
      {
        "text": "supplementary",
        "pos": "adj.",
        "meaning": "补充的"
      }
    ]
  },
  "surge": {
    "syn": [
      "soar",
      "spike",
      "skyrocket",
      "leap",
      "upsurge"
    ],
    "note": "数据猛增激增，作动词或名词均极高频：a surge in demand",
    "fam": [
      {
        "text": "surging",
        "pos": "adj.",
        "meaning": "汹涌激增的"
      }
    ]
  },
  "surgeon": {
    "syn": [
      "operating doctor",
      "surgical specialist"
    ],
    "note": "",
    "fam": [
      {
        "text": "surgery",
        "pos": "n.",
        "meaning": "外科手术"
      }
    ]
  },
  "surgery": {
    "syn": [
      "operation",
      "surgical procedure",
      "clinic"
    ],
    "note": "",
    "fam": [
      {
        "text": "surgeon",
        "pos": "n.",
        "meaning": "外科医生"
      },
      {
        "text": "surgical",
        "pos": "adj.",
        "meaning": "外科的；精准的"
      }
    ]
  },
  "surplus": {
    "syn": [
      "excess",
      "abundance",
      "glut"
    ],
    "note": "经常账户大额贸易顺差与预算盈余",
    "fam": []
  },
  "surrealism": {
    "syn": [
      "dreamlike art",
      "subconscious expressionism"
    ],
    "note": "达利等艺术家探索潜意识与梦境的超现实主义流派",
    "fam": [
      {
        "text": "surreal",
        "pos": "adj.",
        "meaning": "离奇荒诞如梦境的"
      }
    ]
  },
  "surveillance": {
    "syn": [
      "monitoring",
      "observation",
      "watch"
    ],
    "note": "城市全覆盖高清数字监控天网系统",
    "fam": []
  },
  "sustainable": {
    "syn": [
      "viable",
      "maintainable",
      "eco-friendly"
    ],
    "note": "符合长远利益的可持续发展模式",
    "fam": [
      {
        "text": "sustainability",
        "pos": "n.",
        "meaning": "可持续性"
      }
    ]
  },
  "syllabus": {
    "syn": [
      "course outline",
      "curriculum",
      "agenda"
    ],
    "note": "通常指学期初教授发放的单门课程提纲",
    "fam": []
  },
  "symbiosis": {
    "syn": [
      "mutualism",
      "interdependence"
    ],
    "note": "自然界互利互惠的共生关系",
    "fam": [
      {
        "text": "symbiotic",
        "pos": "adj.",
        "meaning": "共生的"
      }
    ]
  },
  "symbolism": {
    "syn": [
      "metaphorical meaning",
      "allegory",
      "representation"
    ],
    "note": "文学艺术中使用象征手法赋予深层寓意",
    "fam": [
      {
        "text": "symbolize",
        "pos": "v.",
        "meaning": "象征"
      },
      {
        "text": "symbolic",
        "pos": "adj.",
        "meaning": "象征性的"
      }
    ]
  },
  "symposium": {
    "syn": [
      "colloquium",
      "conference",
      "convention"
    ],
    "note": "围绕特定学术主题的高级别专题研讨会",
    "fam": []
  },
  "symptom": {
    "syn": [
      "manifestation",
      "indication",
      "clinical sign"
    ],
    "note": "发热干咳嗅觉减退等典型临床病理症状",
    "fam": [
      {
        "text": "symptomatic",
        "pos": "adj.",
        "meaning": "有症状的"
      }
    ]
  },
  "synapse": {
    "syn": [
      "neural junction",
      "connection"
    ],
    "note": "神经元与神经元之间传递神经递质信号的突触",
    "fam": [
      {
        "text": "synaptic",
        "pos": "adj.",
        "meaning": "突触的"
      }
    ]
  },
  "syndication": {
    "syn": [
      "distribution",
      "consortium dissemination",
      "licensing"
    ],
    "note": "新闻稿件或电视专栏通过辛迪加组织向多家媒体联合分发",
    "fam": [
      {
        "text": "syndicate",
        "pos": "n./v.",
        "meaning": "辛迪加；联合出版"
      }
    ]
  },
  "syndrome": {
    "syn": [
      "complex",
      "symptom cluster",
      "condition"
    ],
    "note": "由多种典型症状构成的综合症候群",
    "fam": [
      {
        "text": "symptom",
        "pos": "n.",
        "meaning": "症状"
      }
    ]
  },
  "synergy": {
    "syn": [
      "teamwork",
      "collaboration",
      "cooperation",
      "symbiosis"
    ],
    "note": "1+1>2 的商业并购或团队协同增效效应",
    "fam": [
      {
        "text": "synergistic",
        "pos": "adj.",
        "meaning": "协同的"
      }
    ]
  },
  "syntax": {
    "syn": [
      "sentence structure",
      "grammatical order"
    ],
    "note": "支配词语组合成句的严密句法规则",
    "fam": [
      {
        "text": "syntactic",
        "pos": "adj.",
        "meaning": "句法的"
      }
    ]
  },
  "synthesize": {
    "syn": [
      "integrate",
      "amalgamate",
      "unify"
    ],
    "note": "文献综述中对不同学派观点进行综合归纳",
    "fam": [
      {
        "text": "synthesis",
        "pos": "n.",
        "meaning": "综合，整合"
      },
      {
        "text": "synthetic",
        "pos": "adj.",
        "meaning": "合成的"
      }
    ]
  },
  "synthetic": {
    "syn": [
      "artificial",
      "man-made",
      "fabricated",
      "simulated"
    ],
    "note": "合成的人工产物，与 natural / organic 相对",
    "fam": [
      {
        "text": "synthesize",
        "pos": "v.",
        "meaning": "合成；综合"
      },
      {
        "text": "synthesis",
        "pos": "n.",
        "meaning": "综合体；合成"
      }
    ]
  },
  "tabloid": {
    "syn": [
      "sensational rag",
      "gossip paper",
      "popular press"
    ],
    "note": "注重八卦花边新闻的小报，与 broadsheet（大报/严肃报纸）相对",
    "fam": []
  },
  "tailor": {
    "syn": [
      "customize",
      "adapt",
      "personalize"
    ],
    "note": "根据不同学生的特长量身定制教学方案",
    "fam": []
  },
  "tamper": {
    "syn": [
      "interfere",
      "meddle",
      "manipulate",
      "alter unlawfully"
    ],
    "note": "搭配 tamper with evidence（篡改销毁物证）",
    "fam": [
      {
        "text": "tamper-proof",
        "pos": "adj.",
        "meaning": "防篡改的"
      }
    ]
  },
  "tamper-proof": {
    "syn": [
      "manipulation-proof",
      "unalterable",
      "secure",
      "foolproof"
    ],
    "note": "指具有防篡改特性的硬件或加密防伪标识",
    "fam": [
      {
        "text": "tamper",
        "pos": "v.",
        "meaning": "篡改；瞎搞"
      }
    ]
  },
  "taper": {
    "syn": [
      "narrow",
      "peter out",
      "phase down",
      "recede"
    ],
    "note": "逐渐收窄递减，央行缩减购债：taper off",
    "fam": []
  },
  "tariff": {
    "syn": [
      "customs duty",
      "import tax",
      "levy"
    ],
    "note": "对进口商品加征的高额保护性关税壁垒",
    "fam": []
  },
  "tectonic": {
    "syn": [
      "crustal",
      "geological"
    ],
    "note": "喜马拉雅山脉处于亚欧印度板块碰撞交界处",
    "fam": [
      {
        "text": "tectonics",
        "pos": "n.",
        "meaning": "构造学"
      }
    ]
  },
  "telecommunication": {
    "syn": [
      "telecom",
      "remote transmission"
    ],
    "note": "海底光缆跨洋现代电信通信",
    "fam": [
      {
        "text": "telecom",
        "pos": "n.",
        "meaning": "电信"
      }
    ]
  },
  "telecommuting": {
    "syn": [
      "remote work",
      "telework",
      "working from home"
    ],
    "note": "利用互联网实现远程办公居家办公",
    "fam": [
      {
        "text": "telecommute",
        "pos": "v.",
        "meaning": "远程办公"
      }
    ]
  },
  "telematics": {
    "syn": [
      "vehicular telecommunication",
      "fleet GPS tracking"
    ],
    "note": "结合卫星定位和无线通信的车载车联网技术",
    "fam": []
  },
  "telescope": {
    "syn": [
      "spyglass",
      "observatory instrument"
    ],
    "note": "",
    "fam": [
      {
        "text": "telescopic",
        "pos": "adj.",
        "meaning": "望远镜的；可伸缩的"
      }
    ]
  },
  "temperament": {
    "syn": [
      "disposition",
      "nature",
      "personality",
      "constitution"
    ],
    "note": "先天与生俱来的气质脾性：an artistic/nervous temperament",
    "fam": [
      {
        "text": "temperamental",
        "pos": "adj.",
        "meaning": "喜怒无常的；气质上的"
      }
    ]
  },
  "tenable": {
    "syn": [
      "defensible",
      "sustainable",
      "plausible",
      "justifiable"
    ],
    "note": "在逻辑审查下守得住经得起考验的论点：a tenable hypothesis",
    "fam": [
      {
        "text": "untenable",
        "pos": "adj.",
        "meaning": "站不住脚的"
      }
    ]
  },
  "tendon": {
    "syn": [
      "sinew",
      "fibrous cord"
    ],
    "note": "连接肌肉与骨骼的肌腱（如 Achilles tendon 跟腱）",
    "fam": [
      {
        "text": "sinew",
        "pos": "n.",
        "meaning": "腱；力量"
      }
    ]
  },
  "tenement": {
    "syn": [
      "substandard flat",
      "cramped apartment block"
    ],
    "note": "欧美城市贫民区狭小通风差的老旧连排公寓旧楼",
    "fam": []
  },
  "terminal": {
    "syn": [
      "concourse",
      "depot",
      "station hub"
    ],
    "note": "机场航站楼或长途客运枢纽总站：airport passenger terminal",
    "fam": []
  },
  "terrain": {
    "syn": [
      "ground",
      "topography",
      "landscape"
    ],
    "note": "装甲车辆难以通行的崎岖险峻山地地形",
    "fam": []
  },
  "tertiary": {
    "syn": [
      "higher",
      "post-secondary",
      "advanced"
    ],
    "note": "tertiary education 特指大学及以上的高等教育",
    "fam": []
  },
  "therapy": {
    "syn": [
      "treatment",
      "remedy",
      "cure",
      "healing"
    ],
    "note": "各类心理与生理治疗手段，如 physical/cognitive therapy",
    "fam": [
      {
        "text": "therapist",
        "pos": "n.",
        "meaning": "治疗师"
      },
      {
        "text": "therapeutic",
        "pos": "adj.",
        "meaning": "有疗效的"
      }
    ]
  },
  "thesis": {
    "syn": [
      "dissertation",
      "hypothesis",
      "proposition"
    ],
    "note": "既可指学术毕业论文，也可指论点/命题",
    "fam": []
  },
  "throughput": {
    "syn": [
      "output",
      "productivity",
      "capacity",
      "processing rate"
    ],
    "note": "工厂或系统在单位时间内处理的产品或数据总量",
    "fam": [
      {
        "text": "output",
        "pos": "n.",
        "meaning": "产出量"
      }
    ]
  },
  "timber": {
    "syn": [
      "lumber",
      "wood",
      "logs"
    ],
    "note": "可用于大跨度现代木结构建筑的木料结构梁",
    "fam": []
  },
  "tolerance": {
    "syn": [
      "allowance",
      "permissible error",
      "margin",
      "forbearance"
    ],
    "note": "工程制造中指尺寸允许的‘公差’；社会学指‘宽容容忍度’",
    "fam": [
      {
        "text": "tolerate",
        "pos": "v.",
        "meaning": "容忍；承受"
      },
      {
        "text": "tolerant",
        "pos": "adj.",
        "meaning": "宽容的；耐受的"
      }
    ]
  },
  "topography": {
    "syn": [
      "landscape",
      "terrain",
      "geography"
    ],
    "note": "高山平原丘陵纵横交错的地貌地形学特征",
    "fam": [
      {
        "text": "topographical",
        "pos": "adj.",
        "meaning": "地形的"
      }
    ]
  },
  "tourism": {
    "syn": [
      "travel industry",
      "sightseeing business"
    ],
    "note": "",
    "fam": [
      {
        "text": "tourist",
        "pos": "n.",
        "meaning": "游客"
      },
      {
        "text": "tour",
        "pos": "n./v.",
        "meaning": "旅行；巡回"
      }
    ]
  },
  "toxic": {
    "syn": [
      "poisonous",
      "noxious",
      "hazardous",
      "deadly"
    ],
    "note": "剧毒废渣与致命化学药剂",
    "fam": [
      {
        "text": "toxicity",
        "pos": "n.",
        "meaning": "毒性"
      },
      {
        "text": "toxin",
        "pos": "n.",
        "meaning": "毒素"
      }
    ]
  },
  "toxin": {
    "syn": [
      "poison",
      "venom",
      "pollutant",
      "contaminant"
    ],
    "note": "",
    "fam": [
      {
        "text": "toxic",
        "pos": "adj.",
        "meaning": "有毒的"
      },
      {
        "text": "toxicity",
        "pos": "n.",
        "meaning": "毒性"
      }
    ]
  },
  "trademark": {
    "syn": [
      "brand name",
      "logo",
      "hallmark",
      "registered badge"
    ],
    "note": "企业识别标志与合法注册商标",
    "fam": []
  },
  "trajectory": {
    "syn": [
      "flight path",
      "course",
      "route",
      "orbit"
    ],
    "note": "弹道或飞行轨迹，引申为职业/人生发展轨迹 career trajectory",
    "fam": [
      {
        "text": "project",
        "pos": "v.",
        "meaning": "投射；规划"
      }
    ]
  },
  "transcend": {
    "syn": [
      "surpass",
      "exceed",
      "outdo",
      "rise above"
    ],
    "note": "跨越民族与时空的界限：transcend cultural boundaries",
    "fam": [
      {
        "text": "transcendent",
        "pos": "adj.",
        "meaning": "卓越的；超凡脱俗的"
      },
      {
        "text": "transcendence",
        "pos": "n.",
        "meaning": "超越"
      }
    ]
  },
  "transgenic": {
    "syn": [
      "genetically modified",
      "bioengineered"
    ],
    "note": "将外源基因导入生物体，如 transgenic crops（转基因农作物）",
    "fam": [
      {
        "text": "gene",
        "pos": "n.",
        "meaning": "基因"
      },
      {
        "text": "genetics",
        "pos": "n.",
        "meaning": "遗传学"
      }
    ]
  },
  "transit-oriented": {
    "syn": [
      "TOD model",
      "metro-centered"
    ],
    "note": "以地铁站或公交枢纽为中心的紧凑城市综合体开发（TOD模式）",
    "fam": []
  },
  "transition": {
    "syn": [
      "shift",
      "conversion",
      "transformation"
    ],
    "note": "全球能源结构绿色转型跨越",
    "fam": [
      {
        "text": "transitional",
        "pos": "adj.",
        "meaning": "过渡性的"
      }
    ]
  },
  "transmission": {
    "syn": [
      "spread",
      "contagion",
      "dissemination"
    ],
    "note": "阻断呼吸道飞沫与气溶胶病毒人际传播途径",
    "fam": [
      {
        "text": "transmit",
        "pos": "v.",
        "meaning": "传播传输"
      }
    ]
  },
  "transparency": {
    "syn": [
      "openness",
      "clarity",
      "candor",
      "clearness"
    ],
    "note": "反义词为 opacity（晦暗不透明）",
    "fam": [
      {
        "text": "transparent",
        "pos": "adj.",
        "meaning": "透明的；坦率开放的"
      }
    ]
  },
  "transplant": {
    "syn": [
      "graft",
      "implantation",
      "transfer"
    ],
    "note": "器官移植：organ transplant surgery",
    "fam": [
      {
        "text": "transplantation",
        "pos": "n.",
        "meaning": "移植手术"
      }
    ]
  },
  "trauma": {
    "syn": [
      "injury",
      "emotional shock",
      "ordeal",
      "wound"
    ],
    "note": "重大精神创伤：post-traumatic stress disorder (PTSD)",
    "fam": [
      {
        "text": "traumatic",
        "pos": "adj.",
        "meaning": "令人痛苦创伤的"
      },
      {
        "text": "traumatize",
        "pos": "v.",
        "meaning": "使受心理创伤"
      }
    ]
  },
  "treadmill": {
    "syn": [
      "running machine",
      "exercise belt",
      "monotonous routine"
    ],
    "note": "健身房跑步机，亦比喻枯燥重复的工作模式",
    "fam": [
      {
        "text": "mill",
        "pos": "n.",
        "meaning": "磨坊；工厂"
      }
    ]
  },
  "treaty": {
    "syn": [
      "pact",
      "accord",
      "convention",
      "agreement"
    ],
    "note": "正式签署的国际气候条约公约",
    "fam": []
  },
  "triage": {
    "syn": [
      "prioritization",
      "sorting",
      "classification"
    ],
    "note": "急诊科根据危重程度对伤患进行分类分诊排序",
    "fam": [
      {
        "text": "prioritize",
        "pos": "v.",
        "meaning": "按轻重缓急排序"
      }
    ]
  },
  "trial": {
    "syn": [
      "experiment",
      "clinical test",
      "pilot"
    ],
    "note": "新药研发人体临床试验三期攻关",
    "fam": []
  },
  "tribunal": {
    "syn": [
      "arbitration panel",
      "special court",
      "inquiry committee"
    ],
    "note": "针对特定争议设立的专门裁判所法庭（如劳动仲裁庭）",
    "fam": []
  },
  "trigger": {
    "syn": [
      "spark",
      "provoke",
      "instigate",
      "set off",
      "precipitate"
    ],
    "note": "引发一系列连锁反应的起因导火索：trigger a chain reaction",
    "fam": []
  },
  "truancy": {
    "syn": [
      "absenteeism",
      "cutting class",
      "skipping school"
    ],
    "note": "未经请假的恶意逃学旷课行为",
    "fam": [
      {
        "text": "truant",
        "pos": "n.",
        "meaning": "逃学者"
      }
    ]
  },
  "tsunami": {
    "syn": [
      "tidal wave",
      "harbor wave"
    ],
    "note": "海床骤然沉降引发的排山倒海跨洋巨大海啸",
    "fam": []
  },
  "tuition": {
    "syn": [
      "school fees",
      "instruction fee",
      "teaching fee"
    ],
    "note": "tuition fees 指学费；tuition 亦可指个别小班辅导",
    "fam": [
      {
        "text": "tutor",
        "pos": "n./v.",
        "meaning": "家庭教师；辅导"
      }
    ]
  },
  "turbine": {
    "syn": [
      "generator",
      "rotor",
      "windmill"
    ],
    "note": "海陆大型风力涡轮发电机风机",
    "fam": []
  },
  "turnaround": {
    "syn": [
      "reversal",
      "cycle time",
      "processing period"
    ],
    "note": "turnaround time 常指完成订单或航班地勤处理的周转时长",
    "fam": [
      {
        "text": "turn around",
        "pos": "v.",
        "meaning": "扭转局势；周转"
      }
    ]
  },
  "turnover": {
    "syn": [
      "revenue",
      "sales volume",
      "cash flow"
    ],
    "note": "企业年度不含税营业额；亦可指员工离职流动率 staff turnover",
    "fam": [
      {
        "text": "turn over",
        "pos": "v. phr.",
        "meaning": "营业周转"
      }
    ]
  },
  "tutorial": {
    "syn": [
      "individual instruction",
      "coaching",
      "guide"
    ],
    "note": "英国大学特色的一对一或小组导师答疑辅导课",
    "fam": [
      {
        "text": "tutor",
        "pos": "n.",
        "meaning": "指导教师"
      }
    ]
  },
  "typhoon": {
    "syn": [
      "tropical storm",
      "cyclone",
      "hurricane"
    ],
    "note": "盛夏秋季在东南沿海登陆的超强强台风",
    "fam": []
  },
  "ubiquitous": {
    "syn": [
      "omnipresent",
      "ever-present",
      "universal",
      "pervasive"
    ],
    "note": "雅思高分学术大词：智能手机到处可见：Smartphones have become ubiquitous.",
    "fam": [
      {
        "text": "ubiquity",
        "pos": "n.",
        "meaning": "无处不在"
      }
    ]
  },
  "unambiguous": {
    "syn": [
      "clear-cut",
      "explicit",
      "unequivocal",
      "plain"
    ],
    "note": "毫无歧义毫不含糊的直接结论：an unambiguous statement",
    "fam": [
      {
        "text": "ambiguous",
        "pos": "adj.",
        "meaning": "模棱两可的"
      }
    ]
  },
  "underachieve": {
    "syn": [
      "fall short",
      "underperform"
    ],
    "note": "明明智商极高却因缺乏自律导致学业表现未达预期",
    "fam": [
      {
        "text": "underachiever",
        "pos": "n.",
        "meaning": "学业未达期望者"
      }
    ]
  },
  "underemployment": {
    "syn": [
      "disguised unemployment",
      "skill-job mismatch"
    ],
    "note": "大材小用或高学历低就兼职等隐性失业现象",
    "fam": [
      {
        "text": "underemployed",
        "pos": "adj.",
        "meaning": "未充分就业的"
      }
    ]
  },
  "undergraduate": {
    "syn": [
      "bachelor's student",
      "college student"
    ],
    "note": "常简称为 undergrad",
    "fam": [
      {
        "text": "undergrad",
        "pos": "n.",
        "meaning": "本科生（非正式）"
      }
    ]
  },
  "underpass": {
    "syn": [
      "subway",
      "tunnel",
      "subterranean walkway"
    ],
    "note": "供行人穿过大马路的地下下穿通道",
    "fam": []
  },
  "underprivileged": {
    "syn": [
      "disadvantaged",
      "deprived",
      "needy",
      "marginalized"
    ],
    "note": "社会底层贫困弱势群体：underprivileged youth/children",
    "fam": [
      {
        "text": "privilege",
        "pos": "n.",
        "meaning": "特权"
      }
    ]
  },
  "underrepresented": {
    "syn": [
      "insufficiently represented",
      "marginal"
    ],
    "note": "在议会、高管层中代表席位不足的群体",
    "fam": [
      {
        "text": "represent",
        "pos": "v.",
        "meaning": "代表；体现"
      }
    ]
  },
  "underwrite": {
    "syn": [
      "guarantee",
      "insure",
      "finance",
      "sponsor"
    ],
    "note": "投行承销新股发行，或保险公司审核承保保单",
    "fam": [
      {
        "text": "underwriter",
        "pos": "n.",
        "meaning": "承销商；核保员"
      }
    ]
  },
  "universal": {
    "syn": [
      "omnipresent",
      "all-inclusive",
      "general",
      "common"
    ],
    "note": "全人类普遍认可的普世价值：universal human rights",
    "fam": [
      {
        "text": "universality",
        "pos": "n.",
        "meaning": "普遍性；普世性"
      }
    ]
  },
  "unprecedented": {
    "syn": [
      "unequaled",
      "extraordinary",
      "unmatched"
    ],
    "note": "史无前例的极端高温纪录",
    "fam": []
  },
  "unsaturated": {
    "syn": [
      "healthy fat",
      "polyunsaturated"
    ],
    "note": "unsaturated fat 指相对健康的不饱和脂肪（如橄榄油）",
    "fam": [
      {
        "text": "saturated",
        "pos": "adj.",
        "meaning": "饱和的"
      }
    ]
  },
  "unsubstantiated": {
    "syn": [
      "unproven",
      "baseless",
      "unfounded",
      "unconfirmed"
    ],
    "note": "未经求证、缺乏实据支持的无端猜测：unsubstantiated rumors/claims",
    "fam": [
      {
        "text": "substantiate",
        "pos": "v.",
        "meaning": "用事实证实"
      }
    ]
  },
  "untenable": {
    "syn": [
      "indefensible",
      "unsustainable",
      "flawed",
      "weak"
    ],
    "note": "观点在事实面前根本立不住脚：This position is intellectually untenable.",
    "fam": [
      {
        "text": "tenable",
        "pos": "adj.",
        "meaning": "站得住脚的"
      }
    ]
  },
  "upcycle": {
    "syn": [
      "creative reuse",
      "upgrade"
    ],
    "note": "将废弃航海帆布改造成时尚高档挎包的升级改造创意",
    "fam": []
  },
  "urbanization": {
    "syn": [
      "city expansion",
      "urban drift"
    ],
    "note": "农村人口转变为城镇居民的轰轰烈烈城市化进程",
    "fam": [
      {
        "text": "urbanize",
        "pos": "v.",
        "meaning": "使城市化"
      }
    ]
  },
  "utility": {
    "syn": [
      "usefulness",
      "practicality",
      "benefit",
      "service"
    ],
    "note": "经济学边际效用（marginal utility），或自来水燃气公共事业（public utilities）",
    "fam": [
      {
        "text": "utilize",
        "pos": "v.",
        "meaning": "利用；运用"
      }
    ]
  },
  "vaccine": {
    "syn": [
      "inoculation",
      "immunization jab"
    ],
    "note": "激活抗体记忆的预防性接种疫苗",
    "fam": [
      {
        "text": "vaccinate",
        "pos": "v.",
        "meaning": "接种疫苗"
      },
      {
        "text": "vaccination",
        "pos": "n.",
        "meaning": "接种"
      }
    ]
  },
  "validate": {
    "syn": [
      "confirm",
      "authenticate",
      "corroborate",
      "substantiate"
    ],
    "note": "用严谨实验数据核实确认假说的真伪：validate the hypothesis",
    "fam": [
      {
        "text": "validation",
        "pos": "n.",
        "meaning": "证实生效"
      },
      {
        "text": "valid",
        "pos": "adj.",
        "meaning": "正当合理的"
      }
    ]
  },
  "validity": {
    "syn": [
      "soundness",
      "authenticity",
      "legitimacy"
    ],
    "note": "实验设计与测量工具的有效性效度",
    "fam": [
      {
        "text": "valid",
        "pos": "adj.",
        "meaning": "有效的，站得住脚的"
      }
    ]
  },
  "vandalism": {
    "syn": [
      "malicious damage",
      "defacement",
      "desecration",
      "destruction"
    ],
    "note": "故意毁坏名胜古迹或公共设施：acts of vandalism",
    "fam": [
      {
        "text": "vandal",
        "pos": "n.",
        "meaning": "破坏公物者"
      },
      {
        "text": "vandalize",
        "pos": "v.",
        "meaning": "故意破坏破坏"
      }
    ]
  },
  "variable": {
    "syn": [
      "factor",
      "parameter",
      "element"
    ],
    "note": "独立变量 independent variable 与因变量 dependent variable",
    "fam": [
      {
        "text": "vary",
        "pos": "v.",
        "meaning": "变化"
      },
      {
        "text": "variability",
        "pos": "n.",
        "meaning": "变异性"
      }
    ]
  },
  "vector": {
    "syn": [
      "carrier",
      "transmitter",
      "agent",
      "conduit"
    ],
    "note": "流行病学指传播病原体的昆虫媒介，如蚊子是疟疾的 vector",
    "fam": [
      {
        "text": "borne",
        "pos": "adj.",
        "meaning": "携带传播的"
      }
    ]
  },
  "vegan": {
    "syn": [
      "strict vegetarian",
      "plant-based eater"
    ],
    "note": "",
    "fam": [
      {
        "text": "veganism",
        "pos": "n.",
        "meaning": "纯素食主义"
      }
    ]
  },
  "vegetarian": {
    "syn": [
      "plant-eater",
      "herbivore-style diner"
    ],
    "note": "vegetarian 可吃蛋奶，vegan 则是严禁任何动物制品的纯素食",
    "fam": [
      {
        "text": "vegetable",
        "pos": "n.",
        "meaning": "蔬菜"
      }
    ]
  },
  "vegetation": {
    "syn": [
      "plant cover",
      "greenery",
      "flora"
    ],
    "note": "沙漠边缘营造的防风固沙地表植被",
    "fam": [
      {
        "text": "vegetative",
        "pos": "adj.",
        "meaning": "植物人状态的；生长的"
      }
    ]
  },
  "ventilation": {
    "syn": [
      "air circulation",
      "aeration",
      "airflow"
    ],
    "note": "室内空气流通换气系统：natural/mechanical ventilation",
    "fam": [
      {
        "text": "ventilate",
        "pos": "v.",
        "meaning": "使通风"
      },
      {
        "text": "ventilator",
        "pos": "n.",
        "meaning": "换气扇；呼吸机"
      }
    ]
  },
  "venture capital": {
    "syn": [
      "risk capital",
      "VC funding",
      "early-stage investment"
    ],
    "note": "针对初创成长型企业的高风险高回报风险投资",
    "fam": [
      {
        "text": "venture capitalist",
        "pos": "n.",
        "meaning": "风投投资人"
      }
    ]
  },
  "verdict": {
    "syn": [
      "judgment",
      "ruling",
      "decision",
      "adjudication"
    ],
    "note": "陪审团或法官作出的最终裁判结果：reach a verdict",
    "fam": [
      {
        "text": "adjudicate",
        "pos": "v.",
        "meaning": "判决；裁决"
      }
    ]
  },
  "vernacular": {
    "syn": [
      "indigenous speech",
      "dialect",
      "local tongue"
    ],
    "note": "脱离文言文书面体、接地气的白话方言土语",
    "fam": []
  },
  "viability": {
    "syn": [
      "feasibility",
      "practicability",
      "workability"
    ],
    "note": "项目离开政府补贴后的商业自负盈亏存活力",
    "fam": [
      {
        "text": "viable",
        "pos": "adj.",
        "meaning": "切实可行的"
      }
    ]
  },
  "virtual reality": {
    "syn": [
      "VR",
      "synthetic environment"
    ],
    "note": "头显全沉浸虚拟现实",
    "fam": []
  },
  "virtuoso": {
    "syn": [
      "maestro",
      "master",
      "genius",
      "prodigy"
    ],
    "note": "在乐器演奏或艺术技巧上炉火纯青的巨匠大师",
    "fam": [
      {
        "text": "virtuosity",
        "pos": "n.",
        "meaning": "精湛超绝的技艺"
      }
    ]
  },
  "vocational": {
    "syn": [
      "technical",
      "career-oriented",
      "occupational"
    ],
    "note": "vocational training 指职业技术培训",
    "fam": [
      {
        "text": "vocation",
        "pos": "n.",
        "meaning": "职业，天职"
      }
    ]
  },
  "volatility": {
    "syn": [
      "instability",
      "turbulence",
      "unpredictability",
      "fluctuation"
    ],
    "note": "金融市场价格暴涨暴跌的剧烈波动性",
    "fam": [
      {
        "text": "volatile",
        "pos": "adj.",
        "meaning": "波动剧烈的；易变的"
      }
    ]
  },
  "volcano": {
    "syn": [
      "fire-mountain",
      "caldera"
    ],
    "note": "环太平洋火山地震带活跃的活火山",
    "fam": [
      {
        "text": "volcanic",
        "pos": "adj.",
        "meaning": "火山的"
      }
    ]
  },
  "volunteerism": {
    "syn": [
      "unpaid service",
      "community involvement",
      "charity work"
    ],
    "note": "鼓励公民参与的志愿服务理念",
    "fam": [
      {
        "text": "volunteer",
        "pos": "n./v.",
        "meaning": "志愿者；自愿"
      },
      {
        "text": "voluntary",
        "pos": "adj.",
        "meaning": "自愿的"
      }
    ]
  },
  "vulnerability": {
    "syn": [
      "weakness",
      "security loophole"
    ],
    "note": "系统内核未修补的严重零日安全漏洞",
    "fam": [
      {
        "text": "vulnerable",
        "pos": "adj.",
        "meaning": "易受攻击的"
      }
    ]
  },
  "vulnerable": {
    "syn": [
      "susceptible",
      "fragile",
      "defenseless"
    ],
    "note": "沿海低洼脆弱岛礁地区",
    "fam": [
      {
        "text": "vulnerability",
        "pos": "n.",
        "meaning": "脆弱性"
      }
    ]
  },
  "walkability": {
    "syn": [
      "pedestrian-friendliness",
      "foot travel viability"
    ],
    "note": "衡量城市街道对行人安全舒适友好的适步性指标",
    "fam": [
      {
        "text": "walkable",
        "pos": "adj.",
        "meaning": "适宜步行的"
      }
    ]
  },
  "warm-up": {
    "syn": [
      "prep exercise",
      "limbering up",
      "loosening up"
    ],
    "note": "运动前预防受伤的必要热身环节",
    "fam": [
      {
        "text": "warm up",
        "pos": "v.",
        "meaning": "热身；预热"
      }
    ]
  },
  "warrant": {
    "syn": [
      "justify",
      "authorize",
      "validate",
      "guarantee"
    ],
    "note": "作动词表使得...有必要正当；名词表凭证或许可证",
    "fam": [
      {
        "text": "warranty",
        "pos": "n.",
        "meaning": "保修合同"
      },
      {
        "text": "warranted",
        "pos": "adj.",
        "meaning": "事出有因合情理的"
      }
    ]
  },
  "watchdog": {
    "syn": [
      "guardian",
      "monitor",
      "oversight body",
      "protector"
    ],
    "note": "监督政府公权力的媒体‘看门狗’（第四权力）角色",
    "fam": []
  },
  "wear and tear": {
    "syn": [
      "depreciation",
      "deterioration",
      "attrition",
      "damage"
    ],
    "note": "固定习语，指长期正常使用带来的自然磨损老化",
    "fam": [
      {
        "text": "worn",
        "pos": "adj.",
        "meaning": "磨损破旧的"
      }
    ]
  },
  "wearable": {
    "syn": [
      "portable",
      "attachable",
      "body-worn"
    ],
    "note": "wearable常指可穿戴智能设备（如智能手表、手环）",
    "fam": [
      {
        "text": "wear",
        "pos": "v.",
        "meaning": "穿戴；磨损"
      },
      {
        "text": "wearer",
        "pos": "n.",
        "meaning": "佩戴者"
      }
    ]
  },
  "weightlessness": {
    "syn": [
      "zero gravity",
      "microgravity"
    ],
    "note": "太空轨道舱失重微重力漂浮体验",
    "fam": []
  },
  "welfare": {
    "syn": [
      "well-being",
      "social assistance",
      "social security",
      "benefits"
    ],
    "note": "welfare system/state（福利体制/国家）",
    "fam": [
      {
        "text": "fare",
        "pos": "v.",
        "meaning": "进展；过活"
      }
    ]
  },
  "well-being": {
    "syn": [
      "welfare",
      "health",
      "happiness",
      "prosperity",
      "flourishing"
    ],
    "note": "雅思核心高频论证词：physical and mental well-being",
    "fam": [
      {
        "text": "being",
        "pos": "n.",
        "meaning": "存在；生存"
      }
    ]
  },
  "well-rounded": {
    "syn": [
      "all-around",
      "versatile",
      "balanced"
    ],
    "note": "德智体全面发展的复合型优秀全面人才",
    "fam": []
  },
  "whereas": {
    "syn": [
      "while",
      "on the contrary",
      "in spite of the fact that"
    ],
    "note": "句中对比强烈差异的高级连词：A thrives, whereas B declines.",
    "fam": []
  },
  "whistleblower": {
    "syn": [
      "informer",
      "tip-off source",
      "leaker"
    ],
    "note": "冒着打击报复风险向监察媒体公开揭露企业违法排污黑幕的吹哨人内部举报者",
    "fam": []
  },
  "work-life balance": {
    "syn": [
      "occupational harmony",
      "lifestyle equilibrium"
    ],
    "note": "雅思大作文关于加班与幸福感讨论的黄金短语",
    "fam": []
  },
  "working memory": {
    "syn": [
      "short-term memory",
      "mental scratchpad"
    ],
    "note": "处理复杂计算推理时大脑瞬时维持信息的工作记忆",
    "fam": []
  },
  "xenophobia": {
    "syn": [
      "nativism",
      "intolerance",
      "fear of foreigners",
      "jingoism"
    ],
    "note": "对外国人和外来移民盲目的排斥恐惧心理",
    "fam": [
      {
        "text": "xenophobic",
        "pos": "adj.",
        "meaning": "排外的"
      }
    ]
  },
  "yield": {
    "syn": [
      "produce",
      "output",
      "harvest",
      "surrender",
      "concede"
    ],
    "note": "工科指成品良品率；经济学指投资收益率；动词也可表让步屈服",
    "fam": [
      {
        "text": "yielding",
        "pos": "adj.",
        "meaning": "柔顺的；屈服的"
      },
      {
        "text": "unyielding",
        "pos": "adj.",
        "meaning": "坚韧不屈的"
      }
    ]
  },
  "zenith": {
    "syn": [
      "peak",
      "pinnacle",
      "apex",
      "culmination",
      "acme"
    ],
    "note": "天顶，引申为事业或威望的顶峰，反义词为 nadir（最低点）",
    "fam": [
      {
        "text": "nadir",
        "pos": "n.",
        "meaning": "最低谷；最低点"
      }
    ]
  },
  "zero-waste": {
    "syn": [
      "waste-free",
      "circular"
    ],
    "note": "践行极简环保生活零垃圾零废弃理念",
    "fam": []
  },
  "zoning": {
    "syn": [
      "land-use planning",
      "partitioning",
      "city division"
    ],
    "note": "城市规划中的工业区、居住区分区管制制度：zoning laws",
    "fam": []
  }
};
