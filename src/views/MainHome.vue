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

    <!-- use a loop instead to render -->
    <div class="content-container">
      <div
        v-for="(items, index) in contents"
        :key="index"
        class="content-wrapper"
      >
        <img :src="items.backgroundImage" class="img-wrapper" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // an array with many objects
    const contents = [
      {
        title: 'The Making',
        backgroundImage: 'images/a.jpg',
      },
      {
        title: 'The Types',
        backgroundImage: 'images/b.jpg',
      },
      {
        title: 'Story Time',
        backgroundImage: 'images/song.jpg',
      },
      {
        title: 'Contact',
        backgroundImage: 'images/d.jpg',
      },
    ]

    return {
      contents,
    }
  },
}
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
  background-color: grey;
  align-content: center;
  border-radius: 35px;
  padding: 1rem !important;
}

/*
dialogue box reference :
https://codepen.io/kahboom/pen/bGpqPEw
*/
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

.img-wrapper {
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  margin: -1% auto 20px auto;
  position: relative;
  align-items: center;
}
</style>
