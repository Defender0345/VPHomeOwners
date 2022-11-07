<template>
  <section id="contact" class="flex-columns">
    <div class="row">
      <div class="column">
        <div class="column-2">
          <h1><u>Contact Us</u></h1>
          <h2>
            <img src="../assets/phone-solid.svg" alt="Phone Icon" />
            072 686 0076 <br />
            <img src="../assets/envelope-solid.svg" alt="Email Icon" />
            vphv123@gmail.com <br />
          </h2>
        </div>
      </div>
      <div class="column">
        <div class="column-1">
          <iframe
            id="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.9436467989169!2d18.83607961720795!3d-34.124549464873766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdcae6dc8516d3%3A0xb417263fdc3c48b9!2sVoortrekker%20Park%20Resorts!5e0!3m2!1sen!2sza!4v1614688818919!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
#contact {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 25vh;
  top: 57px;
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex-basis: 100%;
      flex: 1;
      .column-1 {
        height: 100%;
        max-height: 50vh;
        width: 100%;
      }
      .column-2 {
        padding-left: 25%;
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.5em;
          img {
            height: 100%;
            width: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 1080px) {
  #contact {
    height: 100%;
    .row {
      flex-direction: column;
    }
  }
}
</style>
