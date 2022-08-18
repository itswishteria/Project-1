<template>
  <div>
    <div class="div-center song-container">
      <div class="song-character">
        <img src="gifs/song-the-gif.gif" width="570px" height="570px" />
      </div>
      <div class="song-dialogue-container">
        <div class="song-dialogue-wrapper">
          <p class="song-dialogue-text">
            Hello everyone, my name is Song! And here you get to find out more
            of songket, the making of it, types of it and more! I hope you have
            fun learning here!
          </p>
        </div>
      </div>
    </div>

    <div class="themaking-container"></div>

    <div class="thetypes-container"></div>

    <div class="storytime-container"></div>

    <div class="contact-container"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.song-container {
  margin-left: 5rem;
  margin-right: 5rem;
}

.song-container > div {
  padding: 3rem;
}

.song-dialogue-container {
  margin: 40px;
  display: inline-block;
  position: relative;
  height: auto;
  background-color: lightyellow;
  background-color: grey;
  align-content: center;
  border-radius: 35px;
  padding: 1rem !important;
}

.song-dialogue-wrapper:before {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: auto;
  left: -35px;
  top: 30px;
  bottom: auto;
  border: 18px solid;
  border-color: transparent grey grey transparent;
}

.song-dialogue-text {
  padding: 0.5rem 2rem;
}
</style>
