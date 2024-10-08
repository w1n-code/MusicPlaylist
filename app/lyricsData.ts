import { PlaylistData } from './types'

// const nolyrics = "(가사는 일부곡의 좋아하는 일부분만)"
const year_lyrics = "(연도별 곡은 몇개만 적어둠)"
const guitar = "많아서 좋아하는 곡들만"
const guitar_lyrics = "(기타는 위에 세 곡만 의미 있고 나머진 딱히)"

export const playlistData: Record<string, PlaylistData> = {
  "2017-2020": {
    tracks: [
      {
        title: "*Beautiful",
        artist: "Wanna One (워너원)",
        group: "2017",
        youtubeId: "xXWyJEo6VgA",
        lyrics: "[직접 찾아 들으면서 가사를 아직까지\n잘 기억하고 있는 첫번째 곡]"
      },
      {
        title: "Yes or Yes",
        artist: "TWICE(트와이스)",
        group: "2018",
        youtubeId: "mAKsZ26SabQ",
        lyrics: year_lyrics
      },
      {
        title: "사랑을 했다",
        artist: "iKON",
        group: "2018",
        youtubeId: "vecSVX1QYbQ",
        lyrics: year_lyrics
      },
      {
        title: "Way Back Home",
        artist: "숀 (SHAUN)",
        group: "2018",
        youtubeId: "amOSaNX7KJg",
        lyrics: year_lyrics
      },
      {
        title: "*옥탑방",
        artist: "N.Flying(엔플라잉)",
        group: "2019",
        youtubeId: "VpaUh_BGqE0",
        lyrics: "[듣자마자 5학년 생각나는 곡]"
      },
      {
        title: "*작은 것들을 위한 시",
        artist: "방탄소년단(BTS)",
        group: "2019",
        youtubeId: "oFuY5M1lwiY",
        lyrics: "[방탄 입덕하고 나서 처음으로 발표된 곡]"
      },
      {
        title: "Dynamite",
        artist: "BTS(방탄소년단)",
        group: "2020",
        youtubeId: "gdZLi9oWNZg",
        lyrics: year_lyrics
      },
      {
        title: "Any song(아무노래)",
        artist: "ZICO(지코)",
        group: "2020",
        youtubeId: "UuV2BmJ1p_I",
        lyrics: year_lyrics
      },
      {
        title: "*Life Goes On",
        artist: "BTS (방탄소년단)",
        group: "2020",
        youtubeId: "-5q5mZbe3V8",
        lyrics: "끝이 보이지 않아\n출구가 있긴 할까\n발이 떼지질 않아 않아 oh\n잠시 두 눈을 감아\n여기 내 손을 잡아\n저 미래로 달아나자\nLike an echo in the forest\n하루가 돌아오겠지\n아무 일도 없단 듯이\nYeah life goes on\nLike an arrow in the blue sky\n또 하루 더 날아가지\nOn my pillow, on my table\nYeah life goes on\nLike this again"
      }
    ]
  },
  "2021-2023": {
    tracks: [
      {
        title: "Celebrity",
        artist: "IU(아이유)",
        group: "2021년",
        youtubeId: "0-q1KafFCLU",
        lyrics: year_lyrics
      },
      {
        title: "*롤린(Rollin')",
        artist: "브레이브걸스",
        group: "2021년",
        youtubeId: "-Axm4IYHVYk",
        lyrics: "[가장 2021년이 생각나는 노래 3곡중 하나]"
      },
      {
        title: "Butter",
        artist: "BTS(방탄소년단)",
        group: "2021년",
        youtubeId: "WMweEpGlu_U",
        lyrics: year_lyrics
      },
      {
        title: "바라만 본다",
        artist: "[MSG워너비] M.O.M",
        group: "2021년",
        youtubeId: "WMweEpGlu_U",
        lyrics: year_lyrics
      },
      {
        title: "낙하(NAKKA)(with IU)",
        artist: "AKMU",
        group: "2021년",
        youtubeId: "EtiPbWzUY9o",
        lyrics: year_lyrics
      },
      {
        title: "Counting Stars(Feat. Beenzino)",
        artist: "BE'O(비오)",
        group: "2021년",
        youtubeId: "mLCsbacHxA8",
        lyrics: year_lyrics
      },
      {
        title: "*만남은 쉽고 이별은 어려워 (Feat. Leellamarz) (Prod. TOIL)",
        artist: "베이식(Basick)",
        group: "2021년",
        youtubeId: "q8rJfD_jkGw",
        lyrics: "지금 떠나서 아름다운 기억으로만 간직해\n다들 꿈이란 건 이루지 못한 채 꾸고만 사는데\nIt's Ok 괜찮아 난 맛이라도 봤잖아\n다시 현실로 돌아가 그래 취직하고 잘 살아\n잘 잊혀지고 있잖아\n그런데 자꾸 왜 난 또 가사를 끄적이는 걸까\n만남은 쉽고 이별은 어려워\n ...\n어렵게 시간이 지나고 다시금 만난 그 꿈은 꽤 반짝였지이제는 영원할 것만 같았던 그 시간은 잠깐이었지\n그렇게 어렵게 놓아줬었는데 쉽게 다시 왔다 멀어지는 건\n내 의지완 달라 멀어지는 걸 인정하기는 죽기보다 싫어\n섭섭할 뿐이지 모자란 내 자신한테\n거짓말했었던 날들이 반복돼 사실 알고 있던\n것들인데도 난 모른 척 문제가 없는 척 언제나 척뿐이었지\n잘 돼가는 거 하나도 없는데 내 자존심 챙기는 것뿐이었지\n어쩌면 알고 있었지 모든 걸 아니 알고 있었어 전부터\n왜 모르겠어 I ain't dumb 이별은 어렵지만 피할 수 없는 거 같아\n준비는 예전부터 했는지도 몰라\n이제는 생긴 거 같아 마침표를 찍을 용기가\n끝나도 괜찮아 정말 할 수 있는 건 다 해봤어\n다음 페이지에 끝나도 좋아 그러나 거기에 너가 있다면\n이 얘기의 끝을 미룰 거야 그게 내가 원하던 결말\n아직도 어려워 이미 해봤던 이별이라도\n"
      },
      {
        title: "*회전목마(Feat. Zion.T, 원슈타인)",
        artist: "Sokodomo",
        group: "2021년",
        youtubeId: "an2Jh3ouLz8",
        lyrics: "[가장 2021년이 생각나는 노래 3곡중 하나]"
      },
      {
        title: "*불협화음(Feat. AKMU)",
        artist: "Mudd the Student",
        group: "2021년",
        youtubeId: "Nr_VQDuz3EE",
        lyrics: "[가장 2021년이 생각나는 노래 3곡중 하나]"
      },
      {
        title: "*헤어지자 말해요",
        artist: "박재정",
        group: "2021년 +",
        youtubeId: "OLPj51BJJsE",
        lyrics: "나는 사실 그대에게 좋은 사람이 아녜요\n잠시라도 이 행복을 느껴서 고마웠다고\n한 번은 널 볼 수 있을까\n이기적인 거 나도 잘 알아\n그땐 그럴 수밖에 없던\n어린 내게 한 번만 더 기회를 주길\n그댈 정말 사랑했다 말해요\n나는 사실 그대에게 좋은 사람이 되고 싶었어\n영영 다신 못 본다 해도\n그댈 위한 이 노래가 당신을 영원히 사랑할 테니"
      },
      {
        title: "TOMBOY",
        artist: "(여자)아이들((G)I-DLE)",
        group: "2022년",
        youtubeId: "Jh4QFaPmdss",
        lyrics: year_lyrics
      },
      {
        title: "*봄여름가을겨울(Still Life)",
        artist: "BIGBANG",
        group: "2022년",
        youtubeId: "mLCsbacHxA8",
        lyrics: "[지디 컴백 기다리는 중..]"
      },
      {
        title: "LOVE DIVE",
        artist: "IVE(아이브)",
        group: "2022년",
        youtubeId: "eQiILtUEjxc",
        lyrics: year_lyrics
      },
      {
        title: "That That(prod. & feat. SUGA of BTS)",
        artist: "PSY",
        group: "2022년",
        youtubeId: "eQiILtUEjxc",
        lyrics: year_lyrics
      },
      {
        title: "Attention",
        artist: "NewJeans(뉴진스)",
        group: "2022년",
        youtubeId: "js1CtxSY38I",
        lyrics: year_lyrics
      },
      {
        title: "After LIKE",
        artist: "IVE(아이브)",
        group: "2022년",
        youtubeId: "F0B7HDiY-10",
        lyrics: year_lyrics
      },
      {
        title: "*Numb Little Bug",
        artist: "Em Beihold",
        group: "2022년 +",
        youtubeId: "FbpzrymWpT8",
        lyrics: "Do you ever get a little bit tired of life?​\n너도 사는 게 조금 지겨워질 때가 있어?​\nLike you're not really happy but you don't wanna die​​\n왜 막 행복한 것도 아닌데 죽고 싶은 것도 아니고​\nLike you're hangin' by a thread but you gotta survive​​\n썩은 동앗줄에 겨우 매달린 것 같은데 꼭 살아남아야 하는 느낌​\n'Cause you gotta survive​​\n견뎌내야만 하니까​\nLike your body's in the room but you're not really there​​\n몸은 이 방 안에 있는데한데 정신은 거기 없고​\nLike you have empathy inside but you don't really care​​\n다른 사람이 힘들면 안타깝긴 한데 딱히 챙겨주는 건 없어​\nLike you're fresh outta love but it's been in the air​​\n사랑은 다 식었는데 그냥 붙어만 있는 것처럼​\nAm I past repair?​​\n이제 난 고쳐지기도 힘든 걸까?"
      },
    ]
  },
  "양태원의 머리 속": {
    tracks: [
      {
        title: "소우주",
        artist: "BTS(방탄소년단)",
        group: "가사를 좋아하는 곡들",
        youtubeId: "LXOJk2PFKgY",
        lyrics: "[밤이 깊을수록 더 빛나는 별빛]\n우린 빛나고 있네\n각자의 방 각자의 별에서\n어떤 빛은 야망\n어떤 빛은 방황\n사람들의 불빛들\n모두 소중한 하나\n어두운 밤 (외로워 마)\n별처럼 다 (우린 빛나)\n사라지지 마\n큰 존재니까\nLet us shine\n...\n칠흑 같던 밤들 속에\nShine, dream, smile\nOh let us light up the night\n우린 우리대로 빛나\nShine, dream, smile\nOh let us light up the night\n우리 그 자체로 빛나\nTonight"
      },
      {
        title: "Answer : Love Myself",
        artist: "BTS(방탄소년단)",
        group: "가사를 좋아하는 곡들",
        youtubeId: "3POhEmU0llA",
        lyrics: "눈을 뜬다 어둠 속 나\n심장이 뛰는 소리 낯설 때\n마주 본다 거울 속 너\n겁먹은 눈빛 해묵은 질문\n어쩌면 누군가를 사랑하는 것보다\n더 어려운 게 나 자신을 사랑하는 거야\n솔직히 인정할 건 인정하자\n니가 내린 잣대들은 너에게 더 엄격하단 걸\n니 삶 속의 굵은 나이테\n그 또한 너의 일부, 너이기에\n이제는 나 자신을 용서하자 버리기엔\n우리 인생은 길어 미로 속에선 날 믿어\n겨울이 지나면 다시 봄은 오는 거야\n차가운 밤의 시선\n초라한 날 감추려\n몹시 뒤척였지만\n저 수많은 별을 맞기 위해 난 떨어졌던가\n저 수천 개 찬란한 화살의 과녁은 나 하나\nYou've shown me I have reasons\nI should love myself\n내 숨 내 걸어온 길 전부로 답해\n어제의 나 오늘의 나 내일의 나\n(I'm learning how to love myself)\n빠짐없이 남김없이 모두 다 나\n정답은 없을지도 몰라\n어쩜 이것도 답은 아닌 거야\n그저 날 사랑하는 일조차\n누구의 허락이 필요했던 거야\n난 지금도 나를 또 찾고 있어\nBut 더는 죽고 싶지가 않은 걸\n슬프던 me\n아프던 me\n더 아름다울 美\n그래 그 아름다움이\n있다고, 아는 마음이\n나의 사랑으로 가는 길\n가장 필요한 나다운 일\n지금 날 위한 행보는\n바로 날 위한 행동\n날 위한 태도\n그게 날 위한 행복\nI'll show you what i got\n두렵진 않아 그건 내 존재니까\nLove myself\n시작의 처음부터\n끝의 마지막까지\n해답은 오직 하나\n왜 자꾸만 감추려고만 해 니 가면 속으로\n내 실수로 생긴 흉터까지 다 내 별자린데\nYou've shown me I have reasons\nI should love myself\n내 숨 내 걸어온 길 전부로 답해\n내 안에는 여전히\n서툰 내가 있지만\nYou've shown me I have reasons\nI should love myself\n내 숨 내 걸어온 길 전부로 답해\n어제의 나 오늘의 나 내일의 나\n(I'm learning how to love myself)\n빠짐없이 남김없이 모두 다 나"
      },
      {
        title: "Whalien 52",
        artist: "BTS(방탄소년단)",
        group: "가사를 좋아하는 곡들",
        youtubeId: "N6o-coKG67Y",
        lyrics: "이 넓은 바다 그 한가운데\n한 마리 고래가 나즈막히 외롭게 말을 해\n아무리 소리쳐도 닿지 않는 게\n사무치게 외로워 조용히 입 다무네\n아무렴 어때 뭐가 됐던 이젠 뭐 I don't care\n외로움이란 녀석만 내 곁에서 머물 때\n온전히 혼자가 돼 외로이 채우는 자물쇠\n...\n세상은 절대로 몰라\n내가 얼마나 슬픈지를\n내 아픔은 섞일 수 없는\n물과 기름\n그저 난 수면 위에서만\n숨을 쉴 때 관심 끝\n외로운 바닷속 꼬마\n나도 알리고 싶네\n내 가치를 Everyday\n걱정의 멀미를 해\n늘 스티커는 귀 밑에\nNever end,\n왜 끝은 없고 매번 hell\n시간이 가도\n차가운 심연 속의 Neverland\nBut 늘 생각해\n지금 새우잠 자더라도 꿈은 고래답게\n다가올 큰 칭찬이\n매일 춤을 추게 할거야나답게 Ye i'm swimmin'\n내 미래를 향해 가\n저 푸른 바다와\n내 헤르츠를 믿어"
      },
      {
        title: "Daydream(백일몽)",
        artist: "j-hope",
        group: "가사를 좋아하는 곡들",
        youtubeId: "OK3GJ0WIQ8s",
        lyrics: "내 성격은 half and half who knows?\n공인으로서의 노력하는 life who knows?\n큰 욕구는 자제하는 중 who knows?\n늘 공상에 차오르는 숨 who knows?\n편히 울고 싶은 거 I know\n미친 듯 놀고 싶은 거 I know\n사랑에 설레고 싶은 거 I know\n...\n한 번쯤 다른 나의 인생 그림\n그려 보고 싶은 거야, 도화지 dream\nSleep\n저기 저 경계선을 넘어\n느껴보는 거야\n앨리스가 빠진 구멍처럼\n호그와트 가는 길처럼\n신기루의 세계일 거야\n그리고 내 세상일 거야\n상상 그대로 일 거야\nBut 영원하진 않을 거야\nShit",
      }
    ]
  },
  "기타": {
    tracks: [
      {
        title: "고백",
        artist: "델리스파이스",
        group: guitar,
        youtubeId: "tXacKHOmXVU",
        lyrics: "[중1 때 기타 공연하면서 연주한 곡]"
      },
      {
        title: "All I Want For Christmas Is You",
        artist: "Mariah Carey",
        group: guitar,
        youtubeId: "3mQ8zjP84W0",
        lyrics: "[중2 때 매화제 5명 팀으로 매화제 나가려다 떨어진..\n혼성, 혼학년(?) 나쁘지 않았는데]"
      },
      {
        title: "Twilight(황혼)",
        artist: "Kotaro Oshio",
        group: guitar,
        youtubeId: "tXacKHOmXVU",
        lyrics: "[그래도 기타 플레이리스트인데 기타곡 한개는 넣어야겠지..?\n완벽하겐 못하지만 기타를 몇년했는데 도입부 정도는 딱 하지]"
      },
      {
        title: "그라데이션",
        artist: "10센치",
        group: guitar,
        youtubeId: "qbcvwz2QLh8",
        lyrics: guitar_lyrics
      },
      {
        title: "한 페이지가 될 수 있게",
        artist: "DAY6(데이식스)",
        group: guitar,
        youtubeId: "xk7g2JJXtBA",
        lyrics: guitar_lyrics
      },
      {
        title: "별 보러 가자",
        artist: "적재",
        group: guitar,
        youtubeId: "5MxSCYBkxf4",
        lyrics: guitar_lyrics
      },
      {
        title: "주저하는 연인들을 위해",
        artist: "잔나비",
        group: guitar,
        youtubeId: "fPPAgyt2ANU",
        lyrics: guitar_lyrics
      },
      {
        title: "예뻤어",
        artist: "DAY6(데이식스)",
        group: guitar,
        youtubeId: "AgbnoU8HdLQ",
        lyrics: guitar_lyrics
      },
      {
        title: "그리워하다",
        artist: "비투비(BTOB)",
        group: guitar,
        youtubeId: "Tr2sRwzmprU",
        lyrics: guitar_lyrics
      },
      {
        title: "딱 10CM만",
        artist: "10CM,BIG Naughty(서동현)",
        group: guitar,
        youtubeId: "hzy5fyXqPUU",
        lyrics: guitar_lyrics
      },
    ]
  },
  "나머지": {
    tracks: [
      {
        title: "*MMA2019 Dionysus",
        artist: "BTS(방탄소년단)",
        group: "아포방포(BTS)",
        youtubeId: "02ngFtfAdas",
        lyrics: "[제일 좋아하는 무대]"
      }
    ]
  }
}