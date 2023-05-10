<ScrollContainer>

    {/* //Spinnnig  */}
    {/* <ScrollPage>
    // Your custom animation also can be batched!
    <Animator animation={batch(Sticky(), Fade(), Spin(3))}>
      <h1 style={{ fontSize: 50 }}>Hello!!!</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    ...
  </ScrollPage> */}

  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
  <div style={{width:'100vw', height:'100vh'}}>
  <div>
  <HeroSection></HeroSection>
      {/* <span style={{ fontSize: "30px", color: "white" }}>Let me show you scroll animation 😀</span> */}
      </div>
  {/* <Particle></Particle> */}
  </div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
  <div>
      <span style={{ fontSize: "30px"}}>Let me show you scroll animation 😀</span>
      </div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
      <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
    </Animator>
  </ScrollPage>
  
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - I'm Dante Chun -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>