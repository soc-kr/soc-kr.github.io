

var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
   .addScene('tell1:두 번째 메세지', 850)
    .addScene('tell1:자발라, 오시리스다. 약속했던 대로... 지금 상황을 알려주지.', 850)
    .addScene('tell1:사실 별다른 소식은 없다. 수성, 화성, 이오, 타이탄이 사라졌다', 850)
    .addScene('tell1:이런 상황에서 새로운 시각을 열어줄 선물이 있다.', 850)
    .addScene('tell1:내... 추종자들이 오랫동안 간직해왔던 유물을 하나 보낸다.', 850)
    .addScene('tell1:원래는 군체의 유물로, 굴복자의 왕 오릭스의 누이인 시부 아라스의 송곳니다.', 850)
    .addScene('tell1:여행자가 재구축되긴 했지만... 움직일 수 있을 때까지', 850)
    .addScene('tell1:우리가 어둠에 대항하려면 어둠을 이해하는 수밖에 없다.', 850)
    .addScene('tell1:어쩌면 이 유물에서 공허한 약속이 아닌 실질적인 희망을 찾을 수 있을지도 모른다.', 850)
    .addScene('tell1:세 번째 메세지', 850)
    .addScene('tell1:나는 지구에서 멀어질 필요를 느꼈다. 그래서 꿈의 도시로 갔다.', 850)
    .addScene('tell1:도시는 아직도 저주의 순환 속에 있다. ', 850)
    .addScene('tell1:굴복자가 초래한 참상을 온전히 복구하는 날은 영원히 오지 않을지도 모른다.', 850)
    .addScene('tell1:페트라 역시 여전히 쓸모없다.', 850)
    .addScene('tell1:제 여왕이 어디 있는지도 모르고, 덕분에 우리도 믿을 수 있는 동료가 별로 없다.', 850)
    .addScene('tell1:아, 참... 세인트에게 내 우주선에 숨겨놓은 편지를 찾았다고 전해줘.', 850)
    .addScene('tell1:그리고... 아니, 이건 내가 직접 얘기해야겠군.', 850)
    .addScene('tell1:네 번째 메세지', 850)
    .addScene('tell1:탑에 갔었는데 당신은 아이코라와 회의 중이더군.', 850)
    .addScene('tell1:그래서 아나의 라스푸틴 작업이 어떻게 되어가나 보러 갔었지.', 850)
    .addScene('tell1:라스푸틴의 의식을 죽은 엑소의 몸에 설치하려는 시도를 몇 번 했지만 실패했더군.', 850)
    .addScene('tell1:아나가 머리는 좋지만, 황금기 폭군의 잔해를 되살리는 데 과한 노력을 기울이고 있다', 850)
    .addScene('tell1:그 재능을 좀 더... 생산적인 일에 쓰는게 좋을 것 같군.', 850)
    .addScene('tell1:내 개인적인 감정 때문일 수도 있지만.', 850)
    .addScene('tell1:다섯 번째 메세지', 850)
    .addScene('tell1:흠. 네소스의 궤도가 변했다. 리바이어던이 갑작스럽게 사라졌기 때문일 테지.', 850)
    .addScene('tell1:장거리 스캔으로는 그 함선이나 칼루스의 흔적이 보이지 않는다.', 850)
    .addScene('tell1:하지만 기갑단의 잔당은 남아있다.', 850)
    .addScene('tell1:통신을 도청해서 알아본 바로는 칼루스의 딸', 850)
    .addScene('tell1:카이아틀이 붉은 군단의 잔존 세력을 모으고 있다고 한다.', 850)
    .addScene('tell1:달갑지 않은 문제가 늘어난 셈이지.', 850)
    .addScene('tell1:여섯 번째 메세지', 850)
    .addScene('tell1:나는 카이아틀의 속셈을 알아내려고 기갑단이 있는 리프로 갔는데, 뜻밖에도 다른걸 발견했다', 850)
    .addScene('tell1:그곳에... 매우 기이한 무언가가 있다. ', 850)
    .addScene('tell1:작은 탑처럼. 유기적인 기계 구조물이 자라고 있더군.', 850)
    .addScene('tell1:그 주위에 기갑단이 모여 있었는데, 내각 지각할 수 없는 무언가에 도취되어 있었다. ', 850)
    .addScene('tell1:그저 절망이나 광기였는지도 모르지만', 850)
    .addScene('tell1:그 구조물을 장거리에서 스캔해보니,', 850)
    .addScene('tell1:군체의 것이라는 점 외엔 확실하게 알 수 있는 게 없더군', 850)
    .addScene('tell1:나는 그게 그저 기갑단을 홀리는 망상인지, 아니면... 다른 무언가인지 알아봐야겠다.', 850)
    .addScene('tell1:일곱번째 메세지', 850)
    .addScene('tell1:날이 갈수록 더 끔찍한 일이 생기더군.', 850)
    .addScene('tell1:군체에 도취된 기갑단을 관찰하기 위해 리프에 머물렀는데', 850)
    .addScene('tell1:놈들은 쉬지도 않고 몇 시간 동안이나 구조물 앞에 무릎을 꿇고 있었다.', 850)
    .addScene('tell1:가끔은 비명도 질렀다. 흐느낄 때도 있었지만, 대게 그저 침묵할 뿐이었지', 850)
    .addScene('tell1:아침이 밝으니 해안가를 향해 가버리더군', 850)
    .addScene('tell1:구조물을 더 가까이에서 살펴보려 했는데... 무슨 소리가 들렸다. ', 850)
    .addScene('tell1:나를 오라고 부르는 소리가.', 850)
    .addScene('tell1:그때 사기라가 그 구조물을 더 살펴보는 건 일단 보류하자고 했지.', 850)
    .addScene('tell1:여덟번째 메세지', 850)
    .addScene('tell1:여긴 어둡다. 심우주가 얼마나 고독한 곳인지 잊었었군', 850)
    .addScene('tell1:지금은 지구로 돌아가는 중이지만, 하루는 더 걸릴 것 같다.', 850)
    .addScene('tell1:내가 없는 동안 세인트가 어떻게 지내는지 궁금하군. ', 850)
    .addScene('tell1:잘 적응하는지 걱정이 되기도 하고. ', 850)
    .addScene('tell1:이 모든 게 자기 탓이라며 자책하지는 않는지 말이야', 850)
    .addScene('tell1:녀석은 너무 물러서 탈이라니까... ', 850)
    .addScene('tell1:우리가 역사의 흐름에 참견하지 않았으면 이 모든게 일어나지 않았을 수도 있을까?', 850)
    .addScene('tell1:아홉번째 메세지', 850)
    .addScene('tell1:우리가 지구의 궤도에 진입할 때 사기라가 리프에서 발견한 군체 구조물이', 850)
    .addScene('tell1:또 있나 알아보려고 장거리 스캔을 수행했다.', 850)
    .addScene('tell1:직감이 맞았다. 달에도 그런 구조물이 더 있더군.', 850)
    .addScene('tell1:군체의 술수에 대해선 에리스가 잘 아니까 물어보러 갔었지.', 850)
    .addScene('tell1:그런데 그녀를 찾을 수가 없었다.', 850)
    .addScene('tell1:혹시 어디 있는지 알고 있나?', 850)
    .addScene('tell1:열번째 메세지', 850)
    .addScene('tell1:방금 리프에 있는 우리 친구. 거미와 아주 흥미로운 대화를 나눴다.', 850)
    .addScene('tell1:거미는 이미 이 군체 구조물에 대해 알고 있었을 뿐 아니라, ', 850)
    .addScene('tell1:뒤엉킨 해안에서 내가 발견하지 못한 구조물도 몇 개 발견했더군.', 850)
    .addScene('tell1:자기 수하 몇 명이 행방불명되었다는 거야. ', 850)
    .addScene('tell1:가문 없는 몰락자들 가운데에도 사라진 자들이 있다고 하고.', 850)
    .addScene('tell1:사기라가 근방 기갑단 통신을 엿들었다. ', 850)
    .addScene('tell1:카이아틀의 정찰병들이 태양계에 낙오된 붉은 군단 사이에서 이상한 점을 발견했더군.', 850)
    .addScene('tell1:버려진 진지들이 있었는데, 내부 갈등의 흔적과 대규모 집단 무덤이 있다는 거다', 850)
    .addScene('tell1:이 군체 탑이 대체 무엇을 뜻하는지... 알아내야만 해.', 850)
    .addScene('tell1:나는 토성으로 간다. 오릭스의 드레드 노트 잔해 속에서 단서를 찾을 수 있겠지.', 850)
    .addScene('tell1:세인트에게 보고 싶다고 전해줘.', 850)
    .addScene('tell1:열항번째 메세지', 850)
    .addScene('tell1:좋은 소식이다. 드레드노트 안에 있던 군체의 유기적 통신 시스템을 뜯어내서 재구성하는 데 성공했다.', 850)
    .addScene('tell1:놈들의... 집단 의식망과 직접 인터페이스를 연결했지.', 850)
    .addScene('tell1:그 결과 엄청난 사실을 알아냈다, 자발라. ', 850)
    .addScene('tell1:군체는 사분오열의 상태로 지금 내전 중이다.', 850)
    .addScene('tell1:검은 함대는 우리와 소통하려는 걸 방해한 사바툰을 처단하려고 한다.', 850)
    .addScene('tell1:그 마녀 여왕이 어디 있는지는 심지어 그녀의 궁정 대신들조차도 모른다', 850)
    .addScene('tell1:이 틈을 타 시부 아라스가 자기 세력을 굳히고 있지', 850)
    .addScene('tell1:나는 내일 리프로 돌아가 거미와 다시 한번 얘기해볼 생각이다', 850)
    .addScene('tell1:내게 들려줄 소식이 있다더군.', 850)
    .addScene('tell1:거미가 상대하기 불쾌한 친구이긴 하지만, 놈의 정보망은 매우 방대하고', 850)
    .addScene('tell1:의외로 정보가 믿을 만하니까 말이야.', 850)
    .addScene('tell1:열두번째 메세지', 850)
    .addScene('tell1:거미의 정보원들에 따르면, 군체 구조물은 비밀석탑이라고 불린다는군. ', 850)
    .addScene('tell1:나무의 뿌리처럼 퍼져서 우리 차원에 파고든다는거야.', 850)
    .addScene('tell1:애초에 어디서 왔는지는 아직도 모른다. ', 850)
    .addScene('tell1:거미는 자기 최고의 정보원이 알아보고 있다고 하지만', 850)
    .addScene('tell1:사기라와 내 생각엔 상당히 의심스럽다.', 850)
    .addScene('tell1:열세번째 메세지', 850)
    .addScene('tell1:자발라,나는 비밀석탑에 대한 정보를 더 많이 찾기 위해 달로 가는 중이다.', 850)
    .addScene('tell1:사기라와 만나 조사를 할 계획이야.', 850)
    .addScene('tell1:열네번째이자 마지막 메세지', 850)
    .addScene('tell1:누군가 듣고 있다면...', 850)
    .addScene('tell1:사기라는 그녀는 나를 구하기 위해서', 850)
    .addScene('tell1:자신을 희생했습니다.', 850)
    .addScene('tell1:그들로 부터. 하이브에서. 사기라의 죽음을 책임질 존재를 추적하고 있다.', 850)
    .addScene('tell1:나는 그 존재를 찾을 것이다. 그리고 끝낼 것이다.', 850)
    .addScene('tell1:자발라', 850)
    .addScene('tell1:어린 늑대를 좌표로 보내주게', 850)
    .addScene('tell1:나는 더 기다릴 수 없어!', 850)
    