<template>
  <section>
    <button class="btn" @click="switchPdf">CLICK HERE FOR {{ lang }}</button>
    <div class="pdf-container">
      <iframe :src="pdf" type="application/pdf" width="80%"></iframe>
      <p>
        Your web browser doesn't have a PDF plugin. Instead you can click here
        to download
        <a :href="pdf"> VPHOA Huurooreenkoms/ VPHEV Rental Agreement (AFR) </a
        >as a PDF file.
      </p>
    </div>
  </section>
</template>

<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'CoCTRentalView',
  data() {
    return {
      lang: 'AFR',
      pdf: '../pdf/2002VoortrekkerParkLeaseAgreement.pdf',
    };
  },
  methods: {
    switchPdf() {
      var that = this;
      switch (this.pdf) {
        case '../pdf/2002VoortrekkerParkLeaseAgreement.pdf':
          that.pdf = '../pdf/VoortrekkerParkHuurooreenkoms.pdf';
          that.lang = 'ENG';
          break;
        case '../pdf/VoortrekkerParkHuurooreenkoms.pdf':
          that.pdf = '../pdf/2002VoortrekkerParkLeaseAgreement.pdf';
          that.lang = 'AFR';
          break;
      }
    },
  },
};
</script>

<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .btn {
    cursor: pointer;
    text-align: center;
    margin-top: 150px;
    width: 250px;
    max-width: 300px;
    height: 50px;
    font-size: 1.2em;
    border-radius: 10px;

    &:hover {
      color: #1a7664;
      box-shadow: 0 0 10px #1a7664;
    }
  }
  .pdf-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
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
      height: 50vh;
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
