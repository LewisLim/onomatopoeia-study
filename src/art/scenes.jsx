// One flat-SVG scene per word, composed from the shared primitives.
// Similar situations intentionally reuse similar compositions — the
// JP/EN caption carries the primary meaning; the art supports it.

import {
  INK, Person, Baby, Dog, Cat, Cow, Rabbit, Turtle, Bug,
  Spark, Sparkles, RainHeavy, RainLight, MotionLines, SweatDrop, WobbleLines,
  FxText, Heart, AngerMark, Steam, SoundWaves, Spiral, SpeechBubble, ThoughtCloud,
  WindLines, Lightning, DustPuff, Ripples, ShiverLines,
  Ground, Sun, CloudShape, StormCloud, Door, Cup, Pot, Pan, WallClock,
  DoorbellPanel, BookStack, Bookshelf, Plate, TrainSide, TrainInterior, Sofa,
  Plant, Bag, Shoe, Bread, Bowl, DeskMessy, Suitcase, Umbrella, Tree, Key, TV,
  Petal, BusStop, Phone, Star, Moon, NightSky, Table, Stove, Hand,
  Bird, Sheep, Horse, Bear, Frog, Fish, Bee, Flower, Box, Onigiri,
  FireworkBurst, Glass, PaperBall, Shirt,
} from './primitives.jsx'

const SCENES = {
  // ── Gijougo — emotions ─────────────────────────────────────────────
  wakuwaku: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="stand" face="bigsmile" color="#e8756d" />
      <Sparkles x={105} y={45} />
      <Sparkles x={45} y={60} />
      <Suitcase x={135} y={118} color="#5b8dd9" />
      <Moon x={172} y={22} s={0.9} />
    </g>
  ),
  dokidoki: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="worried" color="#5b8dd9" />
      <Heart x={104} y={44} s={2.4} />
      <Heart x={118} y={62} s={1.3} />
      <SweatDrop x={62} y={52} s={0.9} />
      <FxText x={104} y={30} size={11}>！</FxText>
    </g>
  ),
  iraira: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="stand" face="angry" color="#7aa864" />
      <AngerMark x={94} y={46} s={1.2} />
      <BusStop x={150} y={118} />
      <FxText x={45} y={45} size={12}>…！</FxText>
    </g>
  ),
  ukiuki: () => (
    <g>
      <Ground />
      <Sun />
      <Person x={80} y={118} pose="walk" face="bigsmile" color="#f0b45c" />
      <FxText x={108} y={48} size={14} color="#e8756d">♪</FxText>
      <FxText x={52} y={38} size={11} color="#5b8dd9">♪</FxText>
    </g>
  ),
  harahara: () => (
    <g>
      <Ground />
      <Tree x={143} y={118} s={1.15} />
      <Baby x={143} y={72} face="happy" color="#e8756d" />
      <Person x={55} y={118} pose="stand" face="worried" color="#5b8dd9" flip />
      <SweatDrop x={72} y={50} s={1} />
      <FxText x={45} y={42} size={12}>！</FxText>
    </g>
  ),
  sowasowa: () => (
    <g>
      <Ground />
      <Person x={65} y={118} pose="stand" face="worried" color="#8d8da8" />
      <MotionLines x={45} y={70} len={10} />
      <MotionLines x={100} y={75} len={10} />
      <Table x={145} y={118} w={54} />
      <Phone x={145} y={92} s={1.1} />
      <FxText x={65} y={38} size={12}>…</FxText>
    </g>
  ),
  bikubiku: () => (
    <g>
      <NightSky>
        <Moon x={168} y={24} s={1.1} />
        <Star x={40} y={26} s={0.8} />
        <Star x={90} y={16} s={0.6} />
        <Star x={130} y={34} s={0.7} />
      </NightSky>
      <Ground color="#2e3450" />
      <Person x={85} y={118} pose="stand" face="worried" color="#e8756d" />
      <ShiverLines x={60} y={70} />
      <ShiverLines x={110} y={70} />
      <FxText x={120} y={44} size={13} color="#f2e07a">！？</FxText>
    </g>
  ),
  kuyokuyo: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="sit" face="sad" color="#5b8dd9" />
      <ThoughtCloud x={122} y={42} s={1} />
      <FxText x={122} y={41} size={11}>×</FxText>
      <FxText x={135} y={30} size={9}>…</FxText>
    </g>
  ),
  unzari: () => (
    <g>
      <Ground />
      <Person x={55} y={118} pose="stand" face="sad" color="#7aa864" />
      <SweatDrop x={38} y={52} s={0.9} />
      <Person x={148} y={118} pose="stand" face="happy" color="#f0b45c" flip />
      <SpeechBubble x={120} y={35} w={30} h={16} text="…" tail="right" />
      <SpeechBubble x={104} y={58} w={24} h={13} text="…" tail="right" />
      <FxText x={55} y={38} size={11}>ハァ…</FxText>
    </g>
  ),
  gakkari: () => (
    <g>
      <Ground />
      <Door x={143} y={118} />
      <rect x={128} y={78} width={30} height={15} rx={2} fill="#fff" stroke={INK} strokeWidth="1.6" />
      <FxText x={143} y={89} size={9}>休み</FxText>
      <Person x={65} y={118} pose="stand" face="sad" color="#e8756d" />
      <FxText x={45} y={45} size={12}>…</FxText>
      <SweatDrop x={85} y={55} s={0.8} />
    </g>
  ),
  uttori: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="relaxed" color="#c98ab8" />
      <FxText x={112} y={44} size={15} color="#c98ab8">♪</FxText>
      <FxText x={50} y={36} size={11} color="#5b8dd9">♫</FxText>
      <Heart x={118} y={64} s={1.1} />
      <Sparkles x={45} y={62} color="#c9d7f2" />
    </g>
  ),
  hotto: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="stand" face="relaxed" color="#7aa864" />
      <SweatDrop x={96} y={48} s={1.1} />
      <Key x={130} y={70} s={1.6} />
      <Spark x={142} y={58} s={0.8} />
      <FxText x={50} y={40} size={11}>ふぅ…</FxText>
    </g>
  ),
  mukamuka: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="angry" color="#d9534f" />
      <AngerMark x={104} y={42} s={1.3} />
      <AngerMark x={54} y={52} s={0.9} />
      <Steam x={76} y={38} color="#c9c9c9" />
    </g>
  ),
  zokuzoku: () => (
    <g>
      <Ground />
      <TV x={140} y={118} />
      <Person x={60} y={118} pose="stand" face="bigsmile" color="#5b8dd9" flip />
      <ShiverLines x={38} y={70} />
      <ShiverLines x={82} y={70} />
      <Sparkles x={60} y={38} />
    </g>
  ),
  moyamoya: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="stand" face="sad" color="#8d8da8" />
      <CloudShape x={78} y={38} s={0.9} color="#c5ccd6" />
      <CloudShape x={120} y={58} s={0.6} color="#d3d9df" />
      <FxText x={78} y={41} size={10} opacity={0.7}>？</FxText>
    </g>
  ),
  kyun: () => (
    <g>
      <Ground />
      <Person x={65} y={118} pose="stand" face="happy" color="#e8a0b4" />
      <Heart x={92} y={40} s={2.2} />
      <Heart x={106} y={58} s={1} />
      <Dog x={142} y={118} flip mouthOpen />
    </g>
  ),

  gaan: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="stand" face="shock" color="#8d8da8" />
      <path d="M62,38 L62,28 M75,34 L75,24 M88,38 L88,28" stroke={INK} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <rect x={120} y={70} width={34} height={24} rx={2} fill="#fff" stroke={INK} strokeWidth="1.8" transform="rotate(6 137 82)" />
      <FxText x={137} y={86} size={12} color="#d9534f">40</FxText>
    </g>
  ),
  hiyahiya: () => (
    <g>
      <Ground />
      <Table x={130} y={118} w={70} />
      <Cup x={99} y={80} s={1.2} color="#e8756d" />
      <FxText x={99} y={58} size={13}>！</FxText>
      <Person x={45} y={118} pose="stand" face="worried" color="#5b8dd9" />
      <SweatDrop x={64} y={50} s={1} />
    </g>
  ),
  uzuuzu: () => (
    <g>
      <Ground />
      <Sun x={170} y={24} />
      <Person x={65} y={118} pose="stand" face="bigsmile" color="#e8756d" />
      <ShiverLines x={44} y={70} />
      <ShiverLines x={88} y={70} />
      <circle cx={140} cy={110} r={9} fill="#fff" stroke={INK} strokeWidth="1.8" />
      <path d="M134,104 L146,116 M146,104 L134,116" stroke={INK} strokeWidth="1.2" opacity="0.4" />
      <FxText x={100} y={42} size={12}>！</FxText>
    </g>
  ),
  dokii: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="shock" color="#f0b45c" />
      <Heart x={106} y={44} s={2.6} />
      <path d="M96,30 l-4,-5 M118,30 l4,-5 M107,24 l0,-7" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <SpeechBubble x={38} y={35} w={30} h={15} text="ねえ！" size={8} tail="right" />
    </g>
  ),
  honobono: () => (
    <g>
      <Ground />
      <Sun x={170} y={24} />
      <Person x={55} y={118} pose="sit" face="relaxed" color="#c98ab8" />
      <Baby x={120} y={118} face="happy" />
      <Cup x={88} y={104} s={1} color="#7aa864" />
      <Steam x={84} y={92} color="#d3d9df" />
      <Heart x={90} y={45} s={1.2} color="#f3b8c8" />
    </g>
  ),
  shimijimi: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="sit" face="relaxed" color="#8d8da8" />
      <rect x={92} y={80} width={26} height={20} rx={2} fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx={100} cy={87} r={3} fill="#f2c234" stroke="none" />
      <path d="M94,96 l6,-5 l5,3 l7,-6" fill="none" stroke="#7aa864" strokeWidth="1.6" />
      <ThoughtCloud x={120} y={38} s={0.9} />
      <FxText x={120} y={41} size={9} opacity={0.7}>…</FxText>
    </g>
  ),
  wanawana: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="worried" color="#c9b8a0" />
      <ShiverLines x={54} y={62} />
      <ShiverLines x={106} y={62} />
      <ShiverLines x={58} y={92} />
      <ShiverLines x={102} y={92} />
      <WobbleLines x={80} y={28} />
    </g>
  ),
  hiyari: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="stand" face="shock" color="#7aa864" />
      <circle cx={122} cy={48} r={8} fill="#fff" stroke={INK} strokeWidth="1.8" />
      <MotionLines x={172} y={44} len={28} />
      <SweatDrop x={50} y={48} s={1.1} />
      <FxText x={100} y={30} size={13}>！</FxText>
    </g>
  ),
  gutto: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="sad" color="#5b8dd9" />
      <path d="M73,55 q-1.4,3 0,4 q1.4,-1 0,-4" fill="#7db8e8" stroke="none" />
      <Hand x={96} y={74} s={1} rotate={-10} />
      <FxText x={112} y={48} size={11}>…！</FxText>
    </g>
  ),
  zotto: () => (
    <g>
      <NightSky>
        <Moon x={170} y={22} s={1} />
        <Star x={40} y={20} s={0.7} />
      </NightSky>
      <Ground color="#2e3450" />
      <Person x={65} y={118} pose="stand" face="shock" color="#8d8da8" />
      <path d="M128,100 Q126,72 142,72 Q158,72 156,100 L150,94 L145,101 L139,94 L133,101 Z" fill="#eef2f6" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" opacity="0.9" />
      <circle cx={138} cy={82} r={1.6} fill={INK} />
      <circle cx={147} cy={82} r={1.6} fill={INK} />
      <ShiverLines x={44} y={68} />
      <ShiverLines x={86} y={68} />
    </g>
  ),

  // ── Gitaigo — states/textures ──────────────────────────────────────
  kirakira: () => (
    <g>
      <NightSky>
        <Star x={45} y={25} s={1.2} />
        <Star x={95} y={15} s={0.9} />
        <Star x={140} y={30} s={1.3} />
        <Star x={170} y={12} s={0.8} />
        <Star x={70} y={45} s={0.7} />
        <Star x={165} y={52} s={0.9} />
        <Spark x={120} y={48} s={0.9} color="#f2e07a" />
        <Spark x={30} y={55} s={0.7} color="#f2e07a" />
      </NightSky>
      <Ground color="#2e3450" />
      <Person x={80} y={118} pose="stand" face="happy" color="#e8756d" />
    </g>
  ),
  pikapika: () => (
    <g>
      <Ground />
      <Shoe x={100} y={102} s={2.2} />
      <Sparkles x={70} y={72} />
      <Sparkles x={132} y={80} />
      <Spark x={100} y={62} s={1.2} />
    </g>
  ),
  fuwafuwa: () => (
    <g>
      <Ground />
      <Table x={100} y={118} w={90} />
      <Bread x={100} y={78} s={1.8} />
      <path d="M62,64 q4,-6 10,-3 M132,60 q5,-5 10,-1" fill="none" stroke="#c9c9c9" strokeWidth="2" strokeLinecap="round" />
      <Person x={30} y={118} pose="stand" face="relaxed" color="#f0b45c" />
    </g>
  ),
  tsurutsuru: () => (
    <g>
      <Ground color="#cfe3f2" />
      <path d="M20,124 L50,124 M70,130 L105,130 M130,125 L165,125" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <Person x={85} y={116} pose="run" face="shock" color="#5b8dd9" />
      <WobbleLines x={50} y={90} />
      <SweatDrop x={110} y={55} s={1} />
      <MotionLines x={55} y={70} len={14} />
    </g>
  ),
  zarazara: () => (
    <g>
      <Ground />
      <rect x={118} y={20} width={62} height={98} fill="#c9b18a" stroke={INK} strokeWidth="2" />
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <circle key={r + '-' + c} cx={128 + c * 14 + (r % 2) * 6} cy={32 + r * 14} r={1.6} fill="#8a6a42" />
        ))
      )}
      <Person x={68} y={118} pose="stand" face="neutral" color="#7aa864" />
      <Hand x={112} y={62} s={1.3} rotate={-90} />
      <FxText x={90} y={38} size={11}>…！</FxText>
    </g>
  ),
  betabeta: () => (
    <g>
      <Ground />
      <Hand x={85} y={62} s={2.2} />
      <circle cx={128} cy={98} r={9} fill="#e8756d" stroke={INK} strokeWidth="1.8" />
      <path d="M96,80 Q110,86 124,92 M92,84 Q106,94 118,100 M100,78 Q116,80 128,88" fill="none" stroke="#e8a0b4" strokeWidth="2" strokeLinecap="round" />
      <SweatDrop x={60} y={45} s={0.9} />
      <FxText x={60} y={90} size={12}>！</FxText>
    </g>
  ),
  nebaneba: () => (
    <g>
      <Ground />
      <Table x={100} y={118} w={100} />
      <Bowl x={100} y={84} s={1.8} contents="#b09a62" />
      <path d="M112,40 L134,20 M116,42 L140,26" stroke="#c9762a" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx={112} cy={46} rx={7} ry={4} fill="#b09a62" stroke={INK} strokeWidth="1.4" />
      <path d="M96,74 Q100,58 110,50 M104,76 Q110,62 114,50 M92,72 Q94,60 106,48" fill="none" stroke="#d9c78a" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  ),
  karakara: () => (
    <g>
      <Ground color="#e8d5a8" />
      <Sun />
      <path d="M30,126 l10,6 M55,132 l8,-5 M120,128 l9,5 M155,133 l8,-6" stroke="#c9a961" strokeWidth="1.8" strokeLinecap="round" />
      <Person x={75} y={118} pose="stand" face="sad" color="#e8756d" />
      <Cup x={118} y={80} s={1.3} color="#5b8dd9" empty />
      <SweatDrop x={55} y={50} s={0.9} />
      <FxText x={98} y={40} size={11}>…</FxText>
    </g>
  ),
  bishobisho: () => (
    <g>
      <Ground color="#c5d5e3" />
      <RainHeavy />
      <StormCloud x={50} y={16} s={0.9} />
      <StormCloud x={150} y={12} s={0.8} />
      <Person x={85} y={118} pose="stand" face="sad" color="#5b8dd9" />
      <SweatDrop x={64} y={78} s={0.8} />
      <SweatDrop x={106} y={82} s={0.8} />
      <Ripples x={85} y={126} />
    </g>
  ),
  guchagucha: () => (
    <g>
      <Ground />
      <DeskMessy x={112} y={118} />
      <Person x={35} y={118} pose="stand" face="worried" color="#f0b45c" />
      <SweatDrop x={52} y={50} s={0.9} />
    </g>
  ),
  guruguru: () => (
    <g>
      <Ground />
      <Person x={85} y={118} pose="stand" face="shock" color="#c98ab8" />
      <Spiral x={112} y={42} s={1.4} />
      <Spiral x={56} y={52} s={1} />
      <WobbleLines x={85} y={30} />
      <path d="M45,95 q40,18 85,0" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
    </g>
  ),
  pittari: () => (
    <g>
      <Ground />
      <Person x={65} y={118} pose="stand" face="bigsmile" color="#7aa864" />
      <Shoe x={125} y={112} s={1.6} />
      <Spark x={145} y={90} s={1} />
      <Spark x={110} y={85} s={0.7} />
      <FxText x={128} y={72} size={12}>◎</FxText>
    </g>
  ),
  garagara: () => (
    <g>
      <TrainInterior x={100} y={100} />
      <FxText x={100} y={30} size={12}>…</FxText>
    </g>
  ),
  girigiri: () => (
    <g>
      <Ground />
      <TrainSide x={138} y={112} />
      <Person x={42} y={118} pose="run" face="worried" color="#e8756d" />
      <MotionLines x={20} y={70} len={14} />
      <SweatDrop x={62} y={48} s={1} />
      <WallClock x={26} y={26} s={1.1} hour={7} minute={59} />
    </g>
  ),
  boroboro: () => (
    <g>
      <Ground />
      <Bag x={118} y={118} tattered />
      <Person x={55} y={118} pose="stand" face="sad" color="#8d8da8" />
      <FxText x={78} y={42} size={11}>…</FxText>
    </g>
  ),
  subesube: () => (
    <g>
      <Ground />
      <Steam x={130} y={70} />
      <Steam x={45} y={65} />
      <Person x={85} y={118} pose="stand" face="relaxed" color="#f3b8c8" />
      <Sparkles x={112} y={52} color="#c9e3f2" />
      <Spark x={58} y={48} s={0.7} color="#c9e3f2" />
    </g>
  ),
  mokomoko: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Sun x={30} y={22} />
      <CloudShape x={95} y={35} s={1.3} />
      <CloudShape x={155} y={55} s={0.9} />
      <CloudShape x={55} y={62} s={0.7} />
      <Person x={95} y={118} pose="stand" face="happy" color="#5b8dd9" />
    </g>
  ),
  tekateka: () => (
    <g>
      <Ground />
      <Table x={135} y={118} w={70} />
      <Plate x={135} y={82} />
      <path d="M128,78 q7,-6 14,0" fill="none" stroke="#c9762a" strokeWidth="3.5" strokeLinecap="round" />
      <Person x={60} y={118} pose="stand" face="bigsmile" color="#f0b45c" />
      <Spark x={70} y={58} s={0.8} />
      <Spark x={50} y={62} s={0.6} />
    </g>
  ),

  hinyari: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Sun x={170} y={24} />
      <Tree x={130} y={118} s={1.3} />
      <ellipse cx={118} cy={124} rx={40} ry={8} fill="#a8bf96" stroke="none" />
      <Person x={105} y={118} pose="sit" face="relaxed" color="#5b8dd9" flip />
      <FxText x={55} y={50} size={11} color="#5b8dd9">〜</FxText>
    </g>
  ),
  sarasara: () => (
    <g>
      <Ground color="#cfe0c0" />
      <path d="M0,88 Q50,80 100,88 Q150,96 200,88 L200,112 Q150,120 100,112 Q50,104 0,112 Z" fill="#8fc0dc" stroke={INK} strokeWidth="1.8" />
      <path d="M20,96 q12,-3 24,0 M80,102 q12,-3 24,0 M140,96 q12,-3 24,0" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <Spark x={60} y={92} s={0.6} color="#dceef8" />
      <Spark x={130} y={104} s={0.5} color="#dceef8" />
      <Flower x={30} y={130} s={1} />
      <Flower x={172} y={132} s={0.9} color="#f2c234" />
    </g>
  ),
  betobeto: () => (
    <g>
      <Ground color="#e8d5a8" />
      <Sun x={168} y={24} />
      <Person x={75} y={118} pose="stand" face="sad" color="#8fc0dc" />
      <SweatDrop x={54} y={50} s={0.9} />
      <SweatDrop x={98} y={56} s={0.8} />
      <SweatDrop x={60} y={76} s={0.7} />
      <path d="M68,86 q3,4 0,8 M84,86 q3,4 0,8" fill="none" stroke="#6ba3d6" strokeWidth="1.4" opacity="0.7" />
    </g>
  ),
  gussuri: () => (
    <g>
      <NightSky>
        <Moon x={168} y={22} s={1.1} />
        <Star x={40} y={26} s={0.8} />
        <Star x={100} y={16} s={0.6} />
      </NightSky>
      <Ground color="#2e3450" />
      <rect x={30} y={104} width={110} height={14} rx={6} fill="#c9d7f2" stroke={INK} strokeWidth="1.8" />
      <rect x={110} y={92} width={30} height={12} rx={5} fill="#fff" stroke={INK} strokeWidth="1.6" />
      <Person x={95} y={104} pose="lie" face="sleep" color="#c98ab8" />
      <FxText x={150} y={60} size={12} color="#f2e07a" rotate={-10}>z z</FxText>
    </g>
  ),
  dorodoro: () => (
    <g>
      <Ground color="#c9a87a" />
      <ellipse cx={60} cy={126} rx={26} ry={6} fill="#8a6a42" stroke={INK} strokeWidth="1.4" />
      <ellipse cx={135} cy={130} rx={32} ry={7} fill="#8a6a42" stroke={INK} strokeWidth="1.4" />
      <Person x={95} y={118} pose="walk" face="worried" color="#f0b45c" />
      <DustPuff x={72} y={116} s={0.8} />
      <path d="M70,110 q-4,-6 -8,-3 M116,112 q4,-6 8,-3" fill="none" stroke="#8a6a42" strokeWidth="2" strokeLinecap="round" />
      <SweatDrop x={116} y={52} s={0.8} />
    </g>
  ),
  sukasuka: () => (
    <g>
      <Ground />
      <Box x={115} y={118} />
      <rect x={106} y={106} width={10} height={8} rx={1} fill="#e8756d" stroke={INK} strokeWidth="1.3" />
      <Person x={45} y={118} pose="stand" face="worried" color="#7aa864" />
      <FxText x={115} y={70} size={12}>…？</FxText>
    </g>
  ),
  gushagusha: () => (
    <g>
      <Ground />
      <Table x={120} y={118} w={80} />
      <PaperBall x={120} y={78} s={1.5} />
      <path d="M92,86 l4,-3 M148,84 l-4,-3" stroke={INK} strokeWidth="1.4" opacity="0.5" />
      <Person x={45} y={118} pose="stand" face="sad" color="#8d8da8" />
      <FxText x={62} y={44} size={11}>…</FxText>
    </g>
  ),
  pasapasa: () => (
    <g>
      <Ground />
      <Table x={110} y={118} w={90} />
      <Bread x={110} y={78} s={1.6} />
      <path d="M100,68 L106,76 M116,66 L114,74" stroke={INK} strokeWidth="1.3" opacity="0.5" />
      <circle cx={88} cy={86} r={1.2} fill="#c9a961" />
      <circle cx={132} cy={84} r={1.2} fill="#c9a961" />
      <circle cx={124} cy={90} r={1} fill="#c9a961" />
      <FxText x={55} y={50} size={12}>…</FxText>
    </g>
  ),
  tsuyatsuya: () => (
    <g>
      <Ground />
      <Person x={85} y={118} pose="stand" face="happy" color="#e8a0b4" />
      <Spark x={70} y={42} s={0.9} color="#f2e07a" />
      <Spark x={99} y={38} s={0.7} color="#f2e07a" />
      <path d="M70,50 q4,-4 8,-1 M94,48 q4,-4 8,-1" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
    </g>
  ),
  shiwashiwa: () => (
    <g>
      <Ground />
      <Shirt x={120} y={80} s={2.2} color="#8fc0dc" />
      <path d="M104,66 q6,4 12,0 q6,-4 12,0 M106,84 q6,4 12,0 q6,-4 12,0 M110,100 q5,3 10,0" fill="none" stroke={INK} strokeWidth="1.3" opacity="0.55" />
      <Person x={45} y={118} pose="stand" face="worried" color="#c98ab8" />
      <SweatDrop x={62} y={50} s={0.8} />
    </g>
  ),
  dekoboko: () => (
    <g>
      <path d="M0,118 L25,118 Q32,108 40,118 L60,118 Q70,128 80,118 L105,118 Q112,108 120,118 L145,118 Q155,128 165,118 L200,118 L200,140 L0,140 Z" fill="#c9b18a" stroke={INK} strokeWidth="1.8" />
      <Person x={70} y={114} pose="walk" face="worried" color="#5b8dd9" />
      <WobbleLines x={70} y={30} />
      <SweatDrop x={92} y={50} s={0.8} />
    </g>
  ),
  panpan: () => (
    <g>
      <Ground />
      <Bag x={110} y={118} color="#e8756d" />
      <rect x={98} y={82} width={12} height={14} rx={1.5} fill="#5b8dd9" stroke={INK} strokeWidth="1.4" transform="rotate(-14 104 89)" />
      <rect x={112} y={80} width={10} height={16} rx={1.5} fill="#7aa864" stroke={INK} strokeWidth="1.4" transform="rotate(10 117 88)" />
      <path d="M88,104 l-5,-2 M132,104 l5,-2 M90,114 l-5,2 M130,114 l5,2" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <Person x={45} y={118} pose="stand" face="worried" color="#f0b45c" />
      <FxText x={110} y={64} size={12}>！</FxText>
    </g>
  ),
  kachinkochin: () => (
    <g>
      <Ground color="#eef2f6" />
      <ellipse cx={115} cy={120} rx={55} ry={12} fill="#cfe3f2" stroke={INK} strokeWidth="1.8" />
      <path d="M85,118 L105,122 M110,114 L130,124 M135,118 L152,120" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <Spark x={90} y={112} s={0.6} color="#fff" />
      <Spark x={140} y={114} s={0.5} color="#fff" />
      <Person x={35} y={118} pose="stand" face="neutral" color="#e8756d" />
      <ShiverLines x={35} y={62} />
    </g>
  ),
  bukabuka: () => (
    <g>
      <Ground />
      <Baby x={95} y={112} face="happy" color="#5b8dd9" />
      <Shoe x={84} y={118} s={1.5} color="#c9762a" />
      <Shoe x={108} y={118} s={1.5} color="#c9762a" />
      <Person x={35} y={118} pose="stand" face="happy" color="#7aa864" />
      <FxText x={135} y={70} size={12}>！</FxText>
    </g>
  ),
  kutakuta: () => (
    <g>
      <Ground />
      <Person x={85} y={118} pose="sit" face="sleep" color="#8d8da8" />
      <Bag x={135} y={118} color="#b98a5c" />
      <SweatDrop x={105} y={58} s={0.9} />
      <FxText x={60} y={45} size={12}>ふぅ…</FxText>
    </g>
  ),

  // ── Giongo — object/nature sounds ──────────────────────────────────
  zaazaa: () => (
    <g>
      <Ground color="#c5d5e3" />
      <StormCloud x={45} y={14} s={1} />
      <StormCloud x={130} y={10} s={1.1} />
      <RainHeavy />
      <Person x={80} y={118} pose="walk" face="neutral" color="#f0b45c" />
      <Umbrella x={82} y={48} s={1.4} />
      <Ripples x={140} y={128} />
    </g>
  ),
  parapara: () => (
    <g>
      <Ground />
      <CloudShape x={60} y={18} s={0.9} color="#d3d9df" />
      <CloudShape x={150} y={24} s={0.7} color="#d3d9df" />
      <RainLight />
      <Person x={85} y={118} pose="stand" face="neutral" color="#7aa864" />
      <Hand x={112} y={72} s={1.1} rotate={20} />
      <FxText x={122} y={52} size={11}>？</FxText>
    </g>
  ),
  gorogoro: () => (
    <g>
      <Ground color="#c9cfd9" />
      <StormCloud x={60} y={20} s={1.2} />
      <StormCloud x={145} y={14} s={1} />
      <Lightning x={150} y={48} s={1.2} />
      <SoundWaves x={30} y={40} s={0.8} />
      <Person x={85} y={118} pose="stand" face="worried" color="#e8756d" />
    </g>
  ),
  dondon: () => (
    <g>
      <Ground />
      <Door x={125} y={118} />
      <Hand x={90} y={70} s={1.5} rotate={90} />
      <path d="M104,58 l6,-4 M106,68 l7,0 M104,78 l6,4" stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
      <FxText x={70} y={40} size={13}>！！</FxText>
    </g>
  ),
  gashan: () => (
    <g>
      <Ground />
      <Plate x={110} y={112} broken />
      <path d="M96,100 l-5,-7 M110,97 l0,-8 M124,100 l5,-7" stroke={INK} strokeWidth="1.8" strokeLinecap="round" />
      <Person x={45} y={118} pose="stand" face="shock" color="#5b8dd9" />
      <FxText x={140} y={70} size={14}>！</FxText>
    </g>
  ),
  konkon: () => (
    <g>
      <Ground />
      <Door x={125} y={118} />
      <Hand x={92} y={64} s={1.2} rotate={90} />
      <SoundWaves x={104} y={52} s={0.7} />
      <Person x={40} y={118} pose="stand" face="neutral" color="#7aa864" />
    </g>
  ),
  batan: () => (
    <g>
      <Ground />
      <Door x={120} y={118} />
      <MotionLines x={90} y={60} len={16} />
      <MotionLines x={90} y={85} len={12} />
      <WindLines x={20} y={30} />
      <FxText x={160} y={42} size={14}>！</FxText>
    </g>
  ),
  pinpon: () => (
    <g>
      <Ground />
      <Door x={130} y={118} />
      <DoorbellPanel x={92} y={62} />
      <Hand x={78} y={72} s={1.1} rotate={45} />
      <SoundWaves x={102} y={48} s={0.8} />
      <FxText x={62} y={36} size={11}>♪</FxText>
    </g>
  ),
  kachikachi: () => (
    <g>
      <Ground />
      <WallClock x={100} y={48} s={2.2} hour={3} minute={40} />
      <path d="M64,26 l-5,-4 M136,26 l5,-4 M64,72 l-5,4 M136,72 l5,4" stroke={INK} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <Person x={55} y={118} pose="sit" face="neutral" color="#8d8da8" />
      <FxText x={150} y={100} size={11}>…</FxText>
    </g>
  ),
  shiin: () => (
    <g>
      <Ground />
      <Bookshelf x={150} y={118} />
      <BookStack x={35} y={118} s={1} />
      <Person x={85} y={118} pose="sit" face="neutral" color="#5b8dd9" />
      <FxText x={60} y={32} size={12} opacity={0.6}>・・・</FxText>
    </g>
  ),
  zawazawa: () => (
    <g>
      <Ground />
      <Person x={45} y={118} pose="stand" face="happy" color="#e8756d" />
      <Person x={100} y={118} pose="stand" face="happy" color="#7aa864" flip />
      <Person x={155} y={118} pose="stand" face="neutral" color="#f0b45c" />
      <SpeechBubble x={40} y={35} w={26} h={14} text="…" />
      <SpeechBubble x={95} y={28} w={26} h={14} text="…" tail="right" />
      <SpeechBubble x={152} y={38} w={26} h={14} text="…" />
    </g>
  ),
  pachipachi: () => (
    <g>
      <Ground />
      <Person x={55} y={118} pose="armsup" face="bigsmile" color="#e8756d" />
      <Person x={125} y={118} pose="armsup" face="happy" color="#5b8dd9" />
      <Spark x={55} y={48} s={0.8} color="#f2b834" />
      <Spark x={125} y={48} s={0.8} color="#f2b834" />
      <Spark x={90} y={36} s={0.6} color="#f2b834" />
      <FxText x={165} y={40} size={12}>！</FxText>
    </g>
  ),
  gotogoto: () => (
    <g>
      <Ground />
      <TrainSide x={100} y={112} />
      <MotionLines x={35} y={88} len={16} />
      <MotionLines x={38} y={100} len={12} />
      <CloudShape x={40} y={24} s={0.7} />
    </g>
  ),
  byuubyuu: () => (
    <g>
      <Ground />
      <WindLines x={15} y={30} />
      <WindLines x={95} y={65} />
      <Tree x={160} y={118} s={0.9} lean={-12} />
      <Person x={60} y={118} pose="walk" face="worried" color="#e8756d" flip />
      <SweatDrop x={45} y={50} s={0.8} />
    </g>
  ),
  gutsugutsu: () => (
    <g>
      <Ground />
      <Stove x={100} y={118} />
      <Pot x={100} y={88} />
      <Steam x={92} y={58} />
      <circle cx={88} cy={64} r={2.5} fill="#fff" stroke={INK} strokeWidth="1" opacity="0.8" />
      <circle cx={110} cy={60} r={2} fill="#fff" stroke={INK} strokeWidth="1" opacity="0.8" />
    </g>
  ),
  juujuu: () => (
    <g>
      <Ground />
      <Stove x={100} y={118} />
      <Pan x={96} y={88} />
      <Steam x={88} y={62} />
      <Steam x={106} y={66} />
      <Spark x={120} y={74} s={0.5} color="#f2c234" />
    </g>
  ),

  gatagata: () => (
    <g>
      <Ground />
      <g transform="translate(100,62)">
        <rect x={-37} y={-33} width={74} height={66} rx={4} fill="#c9b18a" stroke={INK} strokeWidth="2" />
        <rect x={-30} y={-26} width={60} height={52} fill="#cfe3f2" stroke={INK} strokeWidth="1.6" />
        <path d="M0,-26 L0,26 M-30,0 L30,0" stroke={INK} strokeWidth="1.6" />
      </g>
      <MotionLines x={52} y={45} len={10} />
      <MotionLines x={160} y={52} len={-10} />
      <WindLines x={8} y={16} />
      <FxText x={168} y={100} size={11}>！</FxText>
    </g>
  ),
  gyaagyaa: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Bird x={60} y={70} />
      <Bird x={110} y={45} color="#c98d5a" />
      <Bird x={150} y={80} color="#8d8da8" />
      <SoundWaves x={75} y={62} s={0.7} />
      <SoundWaves x={125} y={38} s={0.7} />
      <FxText x={40} y={35} size={13}>！！</FxText>
    </g>
  ),
  dokan: () => (
    <g>
      <NightSky>
        <FireworkBurst x={100} y={45} s={1.5} />
        <Star x={30} y={30} s={0.7} />
        <Star x={170} y={20} s={0.8} />
      </NightSky>
      <Ground color="#2e3450" />
      <Person x={60} y={118} pose="armsup" face="bigsmile" color="#e8756d" />
      <Person x={130} y={118} pose="stand" face="happy" color="#f0b45c" />
    </g>
  ),
  piripiri: () => (
    <g>
      <Ground />
      <Table x={135} y={118} w={70} />
      <Plate x={135} y={82} />
      <path d="M124,78 q11,-8 22,0" fill="none" stroke="#b06a45" strokeWidth="4" strokeLinecap="round" />
      <circle cx={130} cy={74} r={1.3} fill="#d9534f" />
      <circle cx={140} cy={73} r={1.3} fill="#d9534f" />
      <Person x={55} y={118} pose="stand" face="shock" color="#e8756d" />
      <Spark x={74} y={52} s={0.7} color="#d9534f" />
      <Spark x={38} y={48} s={0.6} color="#d9534f" />
      <SweatDrop x={78} y={68} s={0.8} />
    </g>
  ),
  kankan: () => (
    <g>
      <Ground />
      <path d="M130,118 L130,40" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M112,52 L148,72 M148,52 L112,72" stroke="#f2c234" strokeWidth="7" strokeLinecap="round" />
      <path d="M112,52 L148,72 M148,52 L112,72" stroke={INK} strokeWidth="1.2" opacity="0.5" />
      <circle cx={121} cy={40} r={5.5} fill="#d9534f" stroke={INK} strokeWidth="1.6" />
      <circle cx={139} cy={40} r={5.5} fill="#f5f0e6" stroke={INK} strokeWidth="1.6" />
      <SoundWaves x={156} y={44} s={0.9} />
      <Person x={50} y={118} pose="stand" face="neutral" color="#5b8dd9" />
    </g>
  ),
  bunbun: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Sun x={30} y={24} />
      <Flower x={80} y={130} s={1.3} />
      <Flower x={125} y={132} s={1.1} color="#f2c234" />
      <Flower x={160} y={130} s={1.2} color="#c9d7f2" />
      <Bee x={105} y={70} s={1.3} />
      <path d="M60,80 q20,-24 45,-12 q25,12 45,-6" fill="none" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
    </g>
  ),
  tonton: () => (
    <g>
      <Ground />
      <Table x={110} y={118} w={100} />
      <rect x={78} y={78} width={64} height={7} rx={2} fill="#e0d0b0" stroke={INK} strokeWidth="1.6" />
      <circle cx={92} cy={74} r={3.5} fill="#7db35a" stroke={INK} strokeWidth="1.3" />
      <circle cx={101} cy={74} r={3.5} fill="#7db35a" stroke={INK} strokeWidth="1.3" />
      <path d="M118,58 L138,58 L138,66 L122,70 Z" fill="#dde4ec" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <rect x={138} y={55} width={14} height={6} rx={2} fill="#8a5a33" stroke={INK} strokeWidth="1.4" />
      <path d="M112,50 l-3,-5 M122,48 l0,-6 M132,50 l3,-5" stroke={INK} strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </g>
  ),
  gangan: () => (
    <g>
      <Ground />
      <rect x={120} y={70} width={50} height={48} fill="#dde4ec" stroke={INK} strokeWidth="2" />
      <path d="M120,86 L170,86 M120,102 L170,102 M145,70 L145,118" stroke={INK} strokeWidth="1.3" opacity="0.4" />
      <g transform="rotate(-30 95 62)">
        <path d="M95,62 L95,84" stroke="#8a5a33" strokeWidth="4" strokeLinecap="round" />
        <rect x={86} y={50} width={18} height={12} rx={2} fill="#7a8896" stroke={INK} strokeWidth="1.8" />
      </g>
      <Spark x={116} y={70} s={0.9} color="#f2c234" />
      <FxText x={60} y={40} size={14}>！！</FxText>
      <Person x={45} y={118} pose="stand" face="angry" color="#e8756d" />
      <AngerMark x={28} y={52} s={0.9} />
    </g>
  ),
  hyuuhyuu: () => (
    <g>
      <NightSky>
        <Moon x={40} y={24} s={1} />
      </NightSky>
      <Ground color="#2e3450" />
      <g transform="translate(115,64)">
        <rect x={-32} y={-30} width={64} height={60} rx={4} fill="#c9b18a" stroke={INK} strokeWidth="2" />
        <rect x={-26} y={-24} width={52} height={48} fill="#3d4566" stroke={INK} strokeWidth="1.6" />
        <path d="M0,-24 L0,24 M-26,0 L26,0" stroke={INK} strokeWidth="1.6" />
      </g>
      <path d="M14,26 q22,-6 40,0 q10,3 16,-2 M8,44 q20,-5 36,0" fill="none" stroke="#8db8de" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <FxText x={38} y={68} size={10} color="#8db8de">〜</FxText>
    </g>
  ),
  bokoboko: () => (
    <g>
      <Ground color="#c9b18a" />
      <ellipse cx={100} cy={108} rx={58} ry={16} fill="#8fc0dc" stroke={INK} strokeWidth="2" />
      <circle cx={80} cy={104} r={6} fill="#dceef8" stroke={INK} strokeWidth="1.5" />
      <circle cx={104} cy={100} r={8} fill="#dceef8" stroke={INK} strokeWidth="1.5" />
      <circle cx={126} cy={106} r={5} fill="#dceef8" stroke={INK} strokeWidth="1.5" />
      <Steam x={70} y={72} />
      <Steam x={120} y={68} />
      <ellipse cx={38} cy={122} rx={12} ry={6} fill="#7a8896" stroke={INK} strokeWidth="1.6" />
      <ellipse cx={165} cy={124} rx={14} ry={7} fill="#7a8896" stroke={INK} strokeWidth="1.6" />
    </g>
  ),
  jirijiri: () => (
    <g>
      <Ground color="#e8d5a8" />
      <Sun x={100} y={30} color="#f0954c" />
      <path d="M60,52 q3,8 0,16 M100,56 q3,8 0,16 M140,52 q3,8 0,16" fill="none" stroke="#f0954c" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <Person x={80} y={118} pose="stand" face="sad" color="#e8756d" />
      <SweatDrop x={60} y={54} s={0.9} />
      <SweatDrop x={100} y={60} s={0.8} />
    </g>
  ),
  gobogobo: () => (
    <g>
      <Ground />
      <path d="M40,80 L40,112 Q40,118 46,118 L154,118 Q160,118 160,112 L160,80" fill="#eef2f6" stroke={INK} strokeWidth="2" />
      <path d="M46,88 L154,88" stroke="#8fc0dc" strokeWidth="3" />
      <Spiral x={100} y={104} s={1.1} color="#4a76b8" />
      <circle cx={86} cy={98} r={2.5} fill="#dceef8" stroke={INK} strokeWidth="1" />
      <circle cx={114} cy={100} r={2} fill="#dceef8" stroke={INK} strokeWidth="1" />
      <SoundWaves x={130} y={70} s={0.6} />
    </g>
  ),
  karan: () => (
    <g>
      <Ground />
      <Table x={110} y={118} w={90} />
      <Glass x={110} y={78} s={1.6} />
      <SoundWaves x={128} y={62} s={0.6} />
      <FxText x={88} y={52} size={11}>♪</FxText>
    </g>
  ),

  // ── Giseigo — human/animal sounds ──────────────────────────────────
  wanwan: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Dog x={80} y={118} mouthOpen />
      <SoundWaves x={108} y={92} s={1.1} />
      <FxText x={140} y={60} size={13}>！</FxText>
      <Sun x={30} y={24} />
    </g>
  ),
  nyaanyaa: () => (
    <g>
      <Ground />
      <Cat x={85} y={118} />
      <Bowl x={130} y={118} s={1.1} contents="#e0d6c5" />
      <SoundWaves x={108} y={90} s={0.8} />
      <FxText x={70} y={70} size={11}>…！</FxText>
    </g>
  ),
  moomoo: () => (
    <g>
      <Ground color="#cfe0c0" />
      <path d="M10,96 L60,96 M18,96 L18,118 M52,96 L52,118 M150,96 L195,96 M158,96 L158,118 M188,96 L188,118" stroke="#8a5a33" strokeWidth="3" strokeLinecap="round" />
      <Cow x={100} y={118} />
      <SoundWaves x={132} y={100} s={0.9} />
      <Sun x={172} y={24} />
    </g>
  ),
  perapera: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="stand" face="bigsmile" color="#5b8dd9" />
      <SpeechBubble x={115} y={32} w={44} h={20} text="ABC!" size={10} tail="left" />
      <SpeechBubble x={148} y={62} w={36} h={16} text="Hello" size={8} tail="left" />
      <Spark x={45} y={45} s={0.7} />
    </g>
  ),
  butsubutsu: () => (
    <g>
      <Ground />
      <Person x={90} y={118} pose="walk" face="sad" color="#8d8da8" flip />
      <SpeechBubble x={55} y={45} w={26} h={13} text="…" tail="right" />
      <SpeechBubble x={40} y={68} w={20} h={11} text="…" tail="right" />
    </g>
  ),
  gayagaya: () => (
    <g>
      <Ground />
      <path d="M20,14 L180,14" stroke="#e8756d" strokeWidth="2" />
      <path d="M35,14 l0,8 M65,14 l0,8 M95,14 l0,8 M125,14 l0,8 M155,14 l0,8" stroke="#e8756d" strokeWidth="6" strokeLinecap="round" />
      <Person x={35} y={118} pose="stand" face="bigsmile" color="#e8756d" />
      <Person x={85} y={118} pose="stand" face="happy" color="#f0b45c" flip />
      <Person x={130} y={118} pose="stand" face="bigsmile" color="#7aa864" />
      <Person x={172} y={118} pose="stand" face="happy" color="#5b8dd9" flip />
      <SpeechBubble x={40} y={38} w={24} h={13} text="…" />
      <SpeechBubble x={98} y={30} w={24} h={13} text="…" tail="right" />
      <SpeechBubble x={148} y={38} w={24} h={13} text="…" />
    </g>
  ),
  kusukusu: () => (
    <g>
      <Ground />
      <Table x={135} y={118} w={60} />
      <BookStack x={135} y={84} s={0.7} />
      <Person x={70} y={118} pose="sit" face="relaxed" color="#f3b8c8" />
      <Hand x={72} y={62} s={0.9} rotate={-15} />
      <FxText x={98} y={48} size={9} opacity={0.75}>ふふ…</FxText>
    </g>
  ),
  geragera: () => (
    <g>
      <Ground />
      <TV x={145} y={118} />
      <Person x={60} y={118} pose="sit" face="bigsmile" color="#f0b45c" flip />
      <FxText x={45} y={40} size={13}>ハハハ！</FxText>
      <Spark x={92} y={55} s={0.7} />
    </g>
  ),
  shikushiku: () => (
    <g>
      <Ground />
      <TV x={145} y={118} />
      <Person x={60} y={118} pose="sit" face="cry" color="#8d8da8" flip />
      <SweatDrop x={42} y={62} s={0.7} />
      <FxText x={45} y={40} size={11} opacity={0.7}>…</FxText>
    </g>
  ),
  guuguu: () => (
    <g>
      <Ground />
      <rect x={30} y={104} width={110} height={14} rx={6} fill="#c9d7f2" stroke={INK} strokeWidth="1.8" />
      <rect x={110} y={92} width={30} height={12} rx={5} fill="#fff" stroke={INK} strokeWidth="1.6" />
      <Person x={95} y={104} pose="lie" face="sleep" color="#7aa864" />
      <FxText x={150} y={50} size={16} rotate={-10}>Z</FxText>
      <FxText x={138} y={65} size={12} rotate={-10}>z</FxText>
      <FxText x={129} y={76} size={9} rotate={-10}>z</FxText>
      <SoundWaves x={148} y={92} s={0.6} />
    </g>
  ),
  gokugoku: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="relaxed" color="#5b8dd9" />
      <Cup x={100} y={62} s={1.4} color="#7aa864" />
      <path d="M104,44 l2,-6 M110,48 l4,-5" stroke="#7db8e8" strokeWidth="2" strokeLinecap="round" />
      <Sun x={170} y={26} />
      <SweatDrop x={56} y={50} s={0.8} />
    </g>
  ),
  pekopeko: () => (
    <g>
      <Ground />
      <Table x={140} y={118} w={60} />
      <Plate x={140} y={82} />
      <Person x={65} y={118} pose="stand" face="sad" color="#f0b45c" />
      <Spiral x={65} y={88} s={0.9} />
      <SweatDrop x={45} y={52} s={0.8} />
      <FxText x={92} y={40} size={11}>…</FxText>
    </g>
  ),
  guu: () => (
    <g>
      <Ground />
      <Table x={135} y={118} w={64} />
      <BookStack x={135} y={84} s={0.7} />
      <Person x={65} y={118} pose="sit" face="worried" color="#e8756d" />
      <SoundWaves x={82} y={92} s={0.8} />
      <FxText x={102} y={72} size={12}>！</FxText>
      <circle cx={48} cy={62} r={2} fill="#f3a8a0" opacity="0.8" />
    </g>
  ),
  kyaa: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="armsup" face="shock" color="#c98ab8" />
      <Bug x={140} y={126} />
      <path d="M50,40 l-6,-6 M90,40 l6,-6 M70,32 l0,-8" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <FxText x={118} y={50} size={15}>！！</FxText>
    </g>
  ),

  suyasuya: () => (
    <g>
      <Ground />
      <rect x={55} y={100} width={90} height={18} rx={7} fill="#f3d8e0" stroke={INK} strokeWidth="1.8" />
      <Baby x={100} y={104} face="sleep" color="#c98ab8" />
      <Moon x={170} y={24} s={1} />
      <Heart x={130} y={58} s={0.9} color="#f3b8c8" />
      <FxText x={70} y={55} size={9} opacity={0.6} rotate={-10}>z z</FxText>
    </g>
  ),
  utouto: () => (
    <g>
      <Ground />
      <Table x={120} y={118} w={80} />
      <BookStack x={135} y={84} s={0.7} />
      <g transform="rotate(12 70 90)">
        <Person x={70} y={118} pose="sit" face="sleep" color="#5b8dd9" />
      </g>
      <FxText x={100} y={45} size={11} rotate={-8}>z</FxText>
      <FxText x={92} y={56} size={8} rotate={-8}>z</FxText>
    </g>
  ),
  mushamusha: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="stand" face="bigsmile" color="#f0b45c" />
      <Onigiri x={95} y={72} s={1.2} />
      <Table x={145} y={118} w={50} />
      <Plate x={145} y={82} />
      <Onigiri x={145} y={76} s={0.8} />
      <circle cx={82} cy={80} r={1.2} fill="#fdfbf5" stroke={INK} strokeWidth="0.8" />
      <circle cx={104} cy={84} r={1} fill="#fdfbf5" stroke={INK} strokeWidth="0.8" />
    </g>
  ),
  chibichibi: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="sit" face="relaxed" color="#7aa864" />
      <Cup x={96} y={98} s={0.9} color="#c98ab8" />
      <Steam x={92} y={86} color="#d3d9df" />
      <FxText x={120} y={50} size={11} opacity={0.6}>…</FxText>
    </g>
  ),
  gatsugatsu: () => (
    <g>
      <Ground />
      <Table x={115} y={118} w={80} />
      <Bowl x={115} y={82} s={1.4} contents="#f5f0e6" />
      <Person x={55} y={118} pose="stand" face="bigsmile" color="#e8756d" />
      <MotionLines x={92} y={62} len={12} gap={5} />
      <circle cx={84} cy={70} r={1.4} fill="#f5f0e6" stroke={INK} strokeWidth="0.8" />
      <circle cx={94} cy={78} r={1.2} fill="#f5f0e6" stroke={INK} strokeWidth="0.8" />
      <FxText x={150} y={54} size={12}>！</FxText>
    </g>
  ),
  zuruzuru: () => (
    <g>
      <Ground />
      <Table x={115} y={118} w={90} />
      <Bowl x={120} y={84} s={1.7} color="#e8756d" contents="#f2e0b8" />
      <path d="M108,70 Q92,60 78,58 M114,68 Q98,56 84,52 M120,68 Q106,52 92,46" fill="none" stroke="#f2e0b8" strokeWidth="2.2" strokeLinecap="round" />
      <Person x={60} y={118} pose="stand" face="happy" color="#5b8dd9" />
      <SoundWaves x={96} y={42} s={0.6} />
    </g>
  ),
  gamigami: () => (
    <g>
      <Ground />
      <Person x={60} y={118} pose="stand" face="angry" color="#c98ab8" />
      <SpeechBubble x={102} y={34} w={44} h={20} text="！！" size={11} tail="left" />
      <AngerMark x={38} y={48} s={1} />
      <Baby x={145} y={118} face="sad" />
      <SweatDrop x={160} y={78} s={0.7} />
    </g>
  ),
  mogumogu: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="stand" face="neutral" color="#7aa864" />
      <circle cx={70} cy={64} r={4.5} fill={'#f6c9a0'} stroke={INK} strokeWidth="1.2" />
      <circle cx={90} cy={64} r={4.5} fill={'#f6c9a0'} stroke={INK} strokeWidth="1.2" />
      <Table x={145} y={118} w={54} />
      <Plate x={145} y={82} />
      <FxText x={118} y={48} size={11} opacity={0.7}>…</FxText>
    </g>
  ),
  hakihaki: () => (
    <g>
      <Ground />
      <Sun x={170} y={24} />
      <Person x={70} y={118} pose="stand" face="bigsmile" color="#5b8dd9" />
      <SpeechBubble x={110} y={34} w={36} h={18} text="！" size={11} tail="left" />
      <Spark x={44} y={48} s={0.8} />
    </g>
  ),
  kurakura: () => (
    <g>
      <Ground color="#e8d5a8" />
      <Sun x={100} y={26} color="#f0954c" />
      <Person x={85} y={118} pose="stand" face="worried" color="#e8756d" />
      <Spiral x={85} y={38} s={1.2} />
      <WobbleLines x={55} y={80} />
      <SweatDrop x={108} y={56} s={0.9} />
    </g>
  ),
  pakupaku: () => (
    <g>
      <Ground />
      <Table x={100} y={118} w={90} />
      <circle cx={100} cy={68} r={26} fill="#dceef8" stroke={INK} strokeWidth="2" opacity="0.95" />
      <path d="M84,50 Q100,42 116,50" fill="none" stroke={INK} strokeWidth="1.6" />
      <Fish x={98} y={70} s={1.3} color="#f0955c" />
      <circle cx={112} cy={58} r={1.8} fill="#fff" stroke={INK} strokeWidth="0.8" />
      <circle cx={108} cy={50} r={1.3} fill="#fff" stroke={INK} strokeWidth="0.8" />
    </g>
  ),
  meemee: () => (
    <g>
      <Ground color="#cfe0c0" />
      <path d="M10,96 L58,96 M18,96 L18,118 M50,96 L50,118 M148,96 L192,96 M156,96 L156,118 M184,96 L184,118" stroke="#8a5a33" strokeWidth="3" strokeLinecap="round" />
      <Sheep x={100} y={118} />
      <SoundWaves x={126} y={96} s={0.8} />
      <Sun x={172} y={24} />
    </g>
  ),
  chunchun: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Sun x={30} y={24} />
      <path d="M60,70 L150,64" stroke="#8a5a33" strokeWidth="3.5" strokeLinecap="round" />
      <Bird x={85} y={66} />
      <Bird x={125} y={62} color="#c98d5a" />
      <FxText x={70} y={40} size={11} color="#e8756d">♪</FxText>
      <FxText x={142} y={36} size={11} color="#5b8dd9">♪</FxText>
    </g>
  ),
  buun: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="stand" face="worried" color="#f0b45c" />
      <Bee x={112} y={48} s={1.2} />
      <path d="M160,70 Q135,40 116,46" fill="none" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.5" />
      <SweatDrop x={52} y={50} s={0.9} />
      <FxText x={94} y={32} size={11}>！</FxText>
    </g>
  ),
  kerokero: () => (
    <g>
      <Ground color="#cfe0c0" />
      <RainLight />
      <Frog x={95} y={118} />
      <ellipse cx={145} cy={122} rx={20} ry={5} fill="#8fc0dc" opacity="0.7" />
      <SoundWaves x={116} y={98} s={0.7} />
      <path d="M40,120 q8,-8 16,0 Z" fill="#7aa864" stroke={INK} strokeWidth="1.4" />
    </g>
  ),
  kyankyan: () => (
    <g>
      <Ground />
      <g transform="translate(90,118) scale(0.72)">
        <Dog x={0} y={0} mouthOpen />
      </g>
      <SoundWaves x={112} y={94} s={0.8} />
      <FxText x={140} y={64} size={12}>！</FxText>
      <Person x={40} y={118} pose="stand" face="happy" color="#c98ab8" flip />
    </g>
  ),
  hihiin: () => (
    <g>
      <Ground color="#cfe0c0" />
      <path d="M10,96 L54,96 M18,96 L18,118 M46,96 L46,118" stroke="#8a5a33" strokeWidth="3" strokeLinecap="round" />
      <Horse x={105} y={118} />
      <SoundWaves x={142} y={78} s={0.9} />
      <FxText x={165} y={50} size={12}>！</FxText>
    </g>
  ),
  uwaan: () => (
    <g>
      <Ground />
      <Baby x={90} y={118} face="cry" color="#f0b45c" />
      <SoundWaves x={112} y={80} s={0.9} />
      <path d="M76,80 q-1.6,4 0,5 q1.6,-1 0,-5 M104,80 q-1.6,4 0,5 q1.6,-1 0,-5" fill="#7db8e8" stroke="none" />
      <FxText x={125} y={48} size={14}>！！</FxText>
      <Person x={35} y={118} pose="stand" face="worried" color="#c98ab8" />
    </g>
  ),

  // ── Giyougo — movement/motion ──────────────────────────────────────
  noronoro: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Turtle x={95} y={118} />
      <MotionLines x={68} y={104} len={7} gap={4} />
      <FxText x={140} y={80} size={11} opacity={0.6}>…</FxText>
      <Sun x={30} y={24} />
    </g>
  ),
  kibikibi: () => (
    <g>
      <Ground />
      <Person x={90} y={118} pose="walk" face="happy" color="#5b8dd9" />
      <MotionLines x={62} y={70} len={14} />
      <Spark x={118} y={48} s={0.8} />
      <rect x={128} y={70} width={26} height={20} rx={2} fill="#c9b18a" stroke={INK} strokeWidth="1.8" />
      <path d="M128,80 L154,80 M141,70 L141,90" stroke={INK} strokeWidth="1.3" opacity="0.6" />
    </g>
  ),
  furafura: () => (
    <g>
      <Ground />
      <Person x={85} y={118} pose="walk" face="worried" color="#e8756d" />
      <WobbleLines x={85} y={30} />
      <Spiral x={116} y={50} s={0.9} />
      <path d="M30,126 q15,-6 30,0 q15,6 30,0 q15,-6 30,0" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      <SweatDrop x={58} y={52} s={0.9} />
    </g>
  ),
  dotabata: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="run" face="worried" color="#f0b45c" />
      <DustPuff x={38} y={112} s={1.1} />
      <MotionLines x={40} y={70} len={16} />
      <WallClock x={168} y={28} s={1.1} hour={7} minute={45} />
      <FxText x={110} y={42} size={12}>！</FxText>
    </g>
  ),
  sorosoro: () => (
    <g>
      <Ground />
      <WallClock x={40} y={32} s={1.4} hour={9} minute={0} />
      <Door x={150} y={118} />
      <Person x={80} y={118} pose="walk" face="neutral" color="#7aa864" />
      <FxText x={80} y={36} size={11}>もう9時…</FxText>
    </g>
  ),
  urouro: () => (
    <g>
      <Ground />
      <Person x={90} y={118} pose="walk" face="worried" color="#8d8da8" />
      <ellipse cx={90} cy={126} rx={45} ry={8} fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="5 5" opacity="0.5" />
      <FxText x={120} y={40} size={14}>？</FxText>
      <FxText x={58} y={48} size={10}>？</FxText>
    </g>
  ),
  tekuteku: () => (
    <g>
      <Ground />
      <path d="M0,118 L200,118" stroke="#c9b8a0" strokeWidth="2" />
      <Person x={75} y={118} pose="walk" face="happy" color="#e8756d" />
      <rect x={148} y={62} width={34} height={18} rx={2} fill="#5b8dd9" stroke={INK} strokeWidth="1.8" />
      <FxText x={165} y={75} size={10} color="#fff">駅</FxText>
      <path d="M165,80 L165,118" stroke={INK} strokeWidth="2.5" />
      <MotionLines x={50} y={92} len={9} gap={5} />
    </g>
  ),
  sutasuta: () => (
    <g>
      <Ground />
      <Person x={100} y={118} pose="walk" face="neutral" color="#5b8dd9" />
      <MotionLines x={70} y={65} len={20} />
      <MotionLines x={72} y={85} len={16} />
      <MotionLines x={68} y={102} len={18} />
    </g>
  ),
  yochiyochi: () => (
    <g>
      <Ground />
      <Baby x={95} y={118} face="happy" />
      <WobbleLines x={95} y={62} />
      <Heart x={125} y={70} s={1} />
      <Person x={35} y={118} pose="stand" face="happy" color="#c98ab8" />
    </g>
  ),
  hirahira: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Tree x={40} y={118} s={1.1} />
      <Petal x={90} y={40} s={1.2} rotate={20} />
      <Petal x={115} y={62} s={1} rotate={-30} />
      <Petal x={140} y={45} s={1.1} rotate={60} />
      <Petal x={105} y={90} s={0.9} rotate={-60} />
      <Petal x={155} y={80} s={1} rotate={10} />
      <path d="M88,48 q8,10 -2,18 M138,53 q-6,10 4,16" fill="none" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
    </g>
  ),
  pyonpyon: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Rabbit x={85} y={118} />
      <path d="M40,110 q14,-24 28,0 M110,110 q14,-24 28,0" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
      <DustPuff x={45} y={114} s={0.7} />
      <Sun x={170} y={24} />
    </g>
  ),
  batabata: () => (
    <g>
      <Ground />
      <Person x={80} y={118} pose="run" face="worried" color="#e8756d" />
      <path d="M120,50 l12,-4 l3,7 l-12,4 Z" fill="#fff" stroke={INK} strokeWidth="1.4" transform="rotate(15 126 53)" />
      <path d="M140,72 l11,-3 l2,6 l-11,3 Z" fill="#fff" stroke={INK} strokeWidth="1.4" transform="rotate(-20 145 75)" />
      <MotionLines x={48} y={70} len={16} />
      <DustPuff x={44} y={112} s={1} />
      <SweatDrop x={100} y={46} s={0.9} />
    </g>
  ),
  daradara: () => (
    <g>
      <Ground />
      <Sofa x={100} y={118} />
      <Person x={95} y={90} pose="lie" face="relaxed" color="#f0b45c" />
      <Phone x={128} y={80} s={0.9} />
      <FxText x={50} y={45} size={12} opacity={0.6}>…</FxText>
      <FxText x={150} y={38} size={11}>♪</FxText>
    </g>
  ),
  gungun: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Sun x={170} y={24} />
      <Plant x={90} y={118} s={1.2} tall />
      <path d="M120,80 L120,52 M116,58 L120,52 L124,58" fill="none" stroke="#7aa864" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60,90 L60,68 M56,74 L60,68 L64,74" fill="none" stroke="#7aa864" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <Spark x={112} y={38} s={0.8} />
    </g>
  ),
  jiwajiwa: () => (
    <g>
      <Ground />
      <g transform="rotate(-75 62 106)"><Cup x={62} y={106} s={1.4} color="#5b8dd9" /></g>
      <ellipse cx={115} cy={116} rx={26} ry={7} fill="#7db8e8" opacity="0.7" />
      <Ripples x={115} y={116} />
      <path d="M148,114 q6,2 10,1 M152,120 q5,2 9,0" fill="none" stroke="#6ba3d6" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 3" />
    </g>
  ),
  sutakora: () => (
    <g>
      <Ground />
      <Person x={60} y={118} pose="run" face="shock" color="#7aa864" flip />
      <DustPuff x={92} y={112} s={1.1} />
      <MotionLines x={118} y={70} len={-16} />
      <Dog x={155} y={118} flip mouthOpen />
      <SoundWaves x={128} y={92} s={0.7} />
    </g>
  ),
  yoroyoro: () => (
    <g>
      <Ground />
      <Person x={85} y={118} pose="walk" face="worried" color="#5b8dd9" />
      <rect x={62} y={52} width={30} height={24} rx={2} fill="#c9a87a" stroke={INK} strokeWidth="1.8" transform="rotate(-6 77 64)" />
      <path d="M62,64 L92,62" stroke={INK} strokeWidth="1.2" opacity="0.4" />
      <WobbleLines x={85} y={28} />
      <SweatDrop x={110} y={56} s={0.9} />
      <path d="M40,126 q12,-5 24,0 q12,5 24,0" fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.4" />
    </g>
  ),
  sosokusa: () => (
    <g>
      <Ground />
      <Person x={70} y={118} pose="walk" face="worried" color="#8d8da8" flip />
      <MotionLines x={110} y={70} len={-14} />
      <SweatDrop x={52} y={50} s={0.9} />
      <Person x={155} y={118} pose="stand" face="neutral" color="#f0b45c" />
      <FxText x={70} y={36} size={10} opacity={0.7}>…</FxText>
    </g>
  ),
  nossori: () => (
    <g>
      <Ground color="#cfe0c0" />
      <Bear x={100} y={118} />
      <MotionLines x={68} y={96} len={8} gap={5} />
      <FxText x={150} y={70} size={11} opacity={0.6}>…</FxText>
      <Tree x={35} y={118} s={0.9} />
    </g>
  ),
  hyoihyoi: () => (
    <g>
      <Ground color="#cfe0c0" />
      <path d="M0,110 Q50,102 100,110 Q150,118 200,110 L200,140 L0,140 Z" fill="#8fc0dc" stroke={INK} strokeWidth="1.8" />
      <ellipse cx={55} cy={120} rx={14} ry={6} fill="#9aa5b5" stroke={INK} strokeWidth="1.6" />
      <ellipse cx={105} cy={124} rx={14} ry={6} fill="#9aa5b5" stroke={INK} strokeWidth="1.6" />
      <ellipse cx={155} cy={120} rx={14} ry={6} fill="#9aa5b5" stroke={INK} strokeWidth="1.6" />
      <Person x={105} y={118} pose="run" face="happy" color="#7aa864" />
      <path d="M58,108 q22,-26 44,0 M108,106 q22,-26 44,0" fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="4 4" opacity="0.5" />
    </g>
  ),
  bata: () => (
    <g>
      <Ground />
      <rect x={35} y={104} width={115} height={14} rx={6} fill="#c9d7f2" stroke={INK} strokeWidth="1.8" />
      <rect x={118} y={92} width={30} height={12} rx={5} fill="#fff" stroke={INK} strokeWidth="1.6" />
      <Person x={95} y={104} pose="lie" face="sleep" color="#e8756d" />
      <path d="M62,88 l-4,-6 M78,84 l-2,-7 M112,84 l2,-7" stroke={INK} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
      <DustPuff x={60} y={102} s={0.7} />
      <FxText x={160} y={60} size={12}>…</FxText>
    </g>
  ),
  sutto: () => (
    <g>
      <Ground />
      <Door x={120} y={118} open />
      <path d="M78,70 Q95,62 108,70" fill="none" stroke={INK} strokeWidth="1.6" strokeDasharray="4 4" opacity="0.6" />
      <path d="M104,66 L108,70 L102,72" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      <Person x={45} y={118} pose="stand" face="happy" color="#5b8dd9" />
      <FxText x={165} y={50} size={11} opacity={0.5}>…</FxText>
    </g>
  ),
  furari: () => (
    <g>
      <Ground color="#cfe0c0" />
      <CloudShape x={45} y={24} s={0.8} />
      <Sun x={170} y={22} />
      <path d="M0,120 Q60,112 120,120 Q160,125 200,120" fill="none" stroke="#c9b8a0" strokeWidth="6" strokeLinecap="round" />
      <Person x={90} y={118} pose="walk" face="relaxed" color="#f0b45c" />
      <FxText x={120} y={44} size={12} color="#7aa864">♪</FxText>
    </g>
  ),
  patapata: () => (
    <g>
      <Ground />
      <Baby x={100} y={118} face="happy" color="#e8756d" />
      <MotionLines x={78} y={92} len={9} gap={5} />
      <ellipse cx={50} cy={126} rx={3} ry={1.8} fill={INK} opacity="0.3" />
      <ellipse cx={60} cy={130} rx={3} ry={1.8} fill={INK} opacity="0.3" />
      <ellipse cx={70} cy={126} rx={3} ry={1.8} fill={INK} opacity="0.3" />
      <Person x={165} y={118} pose="stand" face="happy" color="#c98ab8" flip />
      <Heart x={140} y={70} s={0.9} />
    </g>
  ),
  gashigashi: () => (
    <g>
      <Ground />
      <Table x={110} y={118} w={90} />
      <Pan x={105} y={84} />
      <g transform="rotate(-24 128 62)">
        <rect x={122} y={52} width={12} height={16} rx={2} fill="#c9762a" stroke={INK} strokeWidth="1.6" />
        <path d="M124,68 L124,74 M128,68 L128,74 M132,68 L132,74" stroke="#f2e07a" strokeWidth="2" strokeLinecap="round" />
      </g>
      <MotionLines x={150} y={64} len={-10} />
      <circle cx={90} cy={68} r={3} fill="#dceef8" stroke={INK} strokeWidth="1.2" />
      <circle cx={100} cy={62} r={2.4} fill="#dceef8" stroke={INK} strokeWidth="1.2" />
      <circle cx={112} cy={66} r={2} fill="#dceef8" stroke={INK} strokeWidth="1.2" />
    </g>
  ),
  guigui: () => (
    <g>
      <Ground />
      <g transform="rotate(10 60 118)">
        <Person x={60} y={118} pose="stand" face="worried" color="#7aa864" />
      </g>
      <path d="M74,80 Q100,92 128,96" fill="none" stroke="#d9534f" strokeWidth="2.2" strokeLinecap="round" />
      <Dog x={148} y={118} mouthOpen />
      <MotionLines x={190} y={92} len={-12} />
      <SweatDrop x={44} y={50} s={0.9} />
    </g>
  ),
  suisui: () => (
    <g>
      <rect x="0" y="0" width="200" height="140" fill="#8fc0dc" />
      <Fish x={70} y={55} s={1.6} />
      <Fish x={125} y={90} s={1.3} color="#f2c234" />
      <path d="M88,55 q18,-2 34,2 M142,90 q18,-2 30,2" fill="none" stroke="#dceef8" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <circle cx={60} cy={38} r={2.5} fill="#dceef8" opacity="0.9" />
      <circle cx={115} cy={72} r={2} fill="#dceef8" opacity="0.9" />
      <path d="M20,128 q10,-8 20,0 q10,8 20,0 M130,132 q10,-8 20,0 q10,8 20,0" fill="none" stroke="#5d8a4a" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  ),
  motamota: () => (
    <g>
      <Ground />
      <Person x={75} y={118} pose="stand" face="worried" color="#8d8da8" />
      <Bag x={108} y={118} color="#b98a5c" />
      <rect x={122} y={104} width={14} height={10} rx={2} fill="#e8756d" stroke={INK} strokeWidth="1.4" transform="rotate(12 129 109)" />
      <SweatDrop x={55} y={50} s={0.9} />
      <WallClock x={168} y={28} s={1.1} hour={8} minute={10} />
      <Person x={170} y={118} pose="stand" face="sad" color="#f0b45c" flip />
    </g>
  ),
  kyorokyoro: () => (
    <g>
      <rect x={12} y={54} width={30} height={64} fill="#c9d7f2" stroke={INK} strokeWidth="1.8" />
      <rect x={150} y={44} width={36} height={74} fill="#dde4ec" stroke={INK} strokeWidth="1.8" />
      <path d="M18,64 L36,64 M18,78 L36,78 M18,92 L36,92 M158,56 L178,56 M158,72 L178,72 M158,88 L178,88" stroke={INK} strokeWidth="1.3" opacity="0.4" />
      <Ground />
      <Person x={95} y={118} pose="stand" face="worried" color="#e8756d" />
      <FxText x={62} y={44} size={13}>？</FxText>
      <FxText x={128} y={40} size={13}>？</FxText>
      <path d="M78,34 q-8,-4 -14,2 M112,32 q8,-4 14,2" fill="none" stroke={INK} strokeWidth="1.4" strokeDasharray="3 3" opacity="0.5" />
    </g>
  ),
  kosokoso: () => (
    <g>
      <Ground />
      <rect x={118} y={40} width={62} height={78} fill="#c9b18a" stroke={INK} strokeWidth="2" />
      <path d="M126,52 L172,52 M126,66 L172,66" stroke={INK} strokeWidth="1.2" opacity="0.3" />
      <Person x={85} y={118} pose="walk" face="neutral" color="#8d8da8" />
      <FxText x={60} y={44} size={10} opacity={0.6}>…</FxText>
      <MotionLines x={62} y={92} len={7} gap={4} />
    </g>
  ),
}

export function Scene({ id }) {
  const draw = SCENES[id]
  return (
    <svg viewBox="0 0 200 140" className="scene-svg" role="img" aria-hidden="true">
      <rect x="0" y="0" width="200" height="140" fill="transparent" />
      {draw ? draw() : null}
    </svg>
  )
}
