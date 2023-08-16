<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <section>
    <button class="btn" @click="switchPdf">CLICK HERE FOR {{ lang }}</button>
    <h2>LATEST DOC BELOW / NUUTSTE DOK ONDER</h2>
    <div class="pdf-container">
      <iframe :src="pdf" type="application/pdf" width="80%"></iframe>
      <p>
        Your web browser doesn't have a PDF plugin. Instead you can click here
        to download
        <a :href="pdf">
          News Letter 2 Jul 2023 ({{ lang === 'ENG' ? 'AFR' : 'ENG' }}) </a
        >as a PDF file.
      </p>
    </div>
  </section>
  <section class="pdf-history" style="text-align: center">
    <h2>AJV/AGM</h2>
    <p>
      Download
      <a href="../pdf/NuusBrief/VPAJV2022NOTULE.pdf"
        >VP AJV 2022 NOTULE (AFR)</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/VPAJV2021NOTULE.pdf"
        >VP AJV 2021 NOTULE (AFR)</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/VPAJV2020NOTULE.pdf"
        >VP AJV 2020 NOTULE (AFR)</a
      >
      as a PDF file.
    </p>
    <h2>2023</h2>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief1VPHEVFeb2023.pdf"
        >Nuus Brief 1 (AFR) - Feb 2023</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Newsletter1VPHOAFeb2023.pdf"
        >News Letter 1 (ENG) - Feb 2023</a
      >
      as a PDF file.
    </p>
    <h2>2022</h2>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief3VPHEVOkt2022AFR.pdf"
        >Nuus Brief 3 (AFR) - Oct 2022</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Newsletter3VPHOAOct2022ENG.pdf"
        >News Letter 3 (ENG) - Oct 2022</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief2VPHEVJul2022AFR.pdf"
        >Nuus Brief 2 (AFR) - Jul 2022</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief2JulVPHEV2022ENG.pdf"
        >News Letter 2 (ENG) - Jul 2022</a
      >
      as a PDF file.
    </p>
    <!--  -->
    <p>
      Download
      <a href="../pdf/NuusBrief/OpeBriefVPInwonersMaart2022AFR.pdf"
        >Ope Brief (AFR) - Mar 2022</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/OpeBriefVPInwonersMaart2022ENG.pdf"
        >General Letter (ENG) - Mar 2022</a
      >
      as a PDF file.
    </p>
    <!--  -->
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief1VPHEVFeb2022.pdf"
        >Nuus Brief 1 (AFR) - Feb 2022</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Newsletter1VPHEVFeb2022.pdf"
        >News Letter 1 (ENG) - Feb 2022</a
      >
      as a PDF file.
    </p>
    <h2>2021</h2>
    <p>
      Download
      <a href="../pdf/NuusBrief/Newsletter4SeptVPHOA2021.pdf"
        >News Letter 4 (ENG) - Sept 2021</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief4SeptVPHEV2021.pdf"
        >Nuus Brief 4 (AFR) - Sept 2021</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Newsletter3VPHOA2021.pdf"
        >News Letter 3 (ENG) - May 2021</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief3MeiVPHEV2021.pdf"
        >Nuus Brief 3 (AFR) - Mei 2021</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/News Letter2VPHOA2021.pdf"
        >News Letter 2 (ENG) - Feb 2021</a
      >
      as a PDF file.
    </p>
    <p>
      Download
      <a href="../pdf/NuusBrief/Nuusbrief2VPHEV2021.pdf"
        >Nuus Brief 2 (AFR) - Feb 2021</a
      >
      as a PDF file.
    </p>
  </section>
</template>
<!-- eslint-disable prettier/prettier -->

<script>
export default {
  name: 'NewsView',
  data() {
    return {
      lang: 'AFR',
      pdf: '../pdf/NuusBrief/Newsletter2VPHOAJul2023ENG.pdf',
    };
  },
  methods: {
    switchPdf() {
      var that = this;
      switch (this.pdf) {
        case '../pdf/NuusBrief/Newsletter2VPHOAJul2023ENG.pdf':
          that.pdf = '../pdf/NuusBrief/Nuusbrief2VPHEVJul2023AFR.pdf';
          that.lang = 'ENG';
          break;
        case '../pdf/NuusBrief/Nuusbrief2VPHEVJul2023AFR.pdf':
          that.pdf = '../pdf/NuusBrief/Newsletter2VPHOAJul2023ENG.pdf';
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
    margin-bottom: 50px;
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

.pdf-history {
  p {
    margin: 10px;
    font-size: 1.03em;
  }
}

@media only screen and (max-width: 1080px) {
  section {
    h2 {
      width: 80%;
      text-align: center;
    }
    .btn {
      margin-top: 100px;
    }
    .pdf-container {
      height: 30vh;
      iframe {
        display: none;
      }
      p {
        display: block;
        color: black;
        font-size: 1em;
        padding: 0;
        width: 80%;
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
