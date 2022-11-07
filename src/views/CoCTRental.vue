<template>
  <section>
    <div class="pdf-container">
      <iframe
        src="../pdf/VoortrekkerParkHuurooreenkoms.pdf"
        type="application/pdf"
        width="80%"
      ></iframe>
      <p>
        Your web browser doesn't have a PDF plugin. Instead you can click here
        to download
        <a href="../pdf/VoortrekkerParkHuurooreenkoms.pdf">
          Voortrekker Huurooreenkoms (AFR) </a
        >as a PDF file.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  .pdf-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 90vh;
    iframe {
      width: 80%;
      height: 80%;
    }

    p {
      display: none;
    }
  }
}

@media only screen and (max-width: 1080px) {
  section {
    .pdf-container {
      iframe {
        display: none;
      }
      p {
        display: block;
        color: black;
        font-size: 1em;
        padding: 0;
        a {
          cursor: pointer;
          text-decoration: underline;
          color: blue;
        }
      }
    }
  }
}
</style>
