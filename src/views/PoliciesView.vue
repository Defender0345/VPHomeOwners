<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <section>
      <div v-if="this.pdf" class="pdf-container">
        <iframe :src="pdf" type="application/pdf" width="80%"> </iframe>
        <p>
          Your web browser doesn't have a PDF plugin. Instead you can click here
          to download
          <a :href="pdf"> Beleid/Policy {{ id }} (AFR/ENG) </a>as a PDF file.
        </p>
      </div>
      <!-- Specifically for Policy 2 having 2 documents -->
      <div v-else-if="this.id == `2`" class="conductRules">
        <button class="btn" @click="switchPdf">
          CLICK HERE FOR {{ lang }}
        </button>
        <div class="pdf-container2">
          <iframe :src="pdf2" type="application/pdf" width="80%"></iframe>
          <p>
            Your web browser doesn't have a PDF plugin. Instead you can click
            here to download
            <a :href="pdf2">
              Conduct Rules / Gedrags Reels ({{
                lang === 'ENG' ? 'AFR' : 'ENG'
              }}) </a
            >as a PDF file.
          </p>
        </div>
      </div>
      <div v-else class="construction">
        <h2>This Page is currently under development</h2>
      </div>
    </section>
  </div>
</template>

<!-- eslint-disable prettier/prettier -->
<script>
export default {
  props: ['id'],
  data() {
    return {
      pdf: null,
      lang: 'AFR',
      pdf2: '../pdf/Beleid/Beleid2ConductRules2.pdf',
    };
  },
  methods: {
    getData() {
      var that = this;
      switch (this.id) {
        case '1':
          that.pdf = '../pdf/Beleid/Beleid1BedryfsmodelOperatingModel1.pdf';
          break;
        case '2':
          //  that.pdf = '../pdf/Beleid/Beleid2ConductRules2.pdf';
          break;
        case '3':
          that.pdf = '../pdf/Beleid/Beleid3Reels-Rules1.pdf';
          break;
        case '4':
          that.pdf = '../pdf/Beleid/Beleid4InfrastruktuurInfrastructure.pdf';
          break;
        case '5':
          that.pdf = '../pdf/Beleid/Beleid5RisikoBestuurRiskManagement.pdf';
          break;
        case '6':
          that.pdf = '../pdf/Beleid/Beleid6Elektries Electrical.pdf';
          break;
        case '7':
          that.pdf = '../pdf/Beleid/Beleid7SkaduAfdak-ShadePort.pdf';
          break;
        case '8':
          that.pdf = '../pdf/Beleid/Beleid8HeiningsFences.pdf';
          break;
        case '9':
          that.pdf = '../pdf/Beleid/Beleid9WendyhuisWendyHouse.pdf';
          break;
        // case '10':
        //   that.pdf = '../pdf/Beleid/#.pdf';
        //   break;
        case '11':
          that.pdf = '../pdf/Beleid/Beleid11SaalHall1.pdf';
          break;
        case '12':
          that.pdf =
            '../pdf/Beleid/Beleid12_1Parkeringofstoorvankaravanegrootsleepwaensenbote1.pdf';
          break;
        case '13':
          that.pdf = '../pdf/Beleid/Beleid13Boorgate-Wellpoints.pdf';
          break;
        case '14':
          that.pdf = '../pdf/Beleid/Beleid14ToegangsBeheerAccessControle1.pdf';
          break;
        case '15':
          that.pdf = '../pdf/Beleid/Beleid15.2Boetes-Fines.pdf';
          break;
        // case '16':
        //   that.pdf = '../pdf/Beleid/#.pdf';
        //   break;
        case '17':
          that.pdf = '../pdf/Beleid/Beleid17.2VerhuringenverkoopvanEenhede.pdf';
          break;
      }
    },
    switchPdf() {
      var that = this;
      switch (this.pdf2) {
        case '../pdf/Beleid/Beleid2ConductRules2.pdf':
          that.pdf2 = '../pdf/Beleid/Beleid2Gedragsreels2.pdf';
          that.lang = 'ENG';
          break;
        case '../pdf/Beleid/Beleid2Gedragsreels2.pdf':
          that.pdf2 = '../pdf/Beleid/Beleid2ConductRules2.pdf';
          that.lang = 'AFR';
          break;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
// Conduct Rules 2 styling
section {
  .conductRules {
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
  }
  .pdf-container2 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    iframe {
      width: 80vw;
      height: 90vh;
    }

    p {
      display: none;
    }
  }
}

// End
div {
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
    .construction {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      h2 {
        font-size: 2em;
        font-weight: bold;
      }
    }
  }
}

@media only screen and (max-width: 1080px) {
  div {
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
  section {
    .pdf-container2 {
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
