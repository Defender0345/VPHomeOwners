<!-- eslint-disable prettier/prettier -->
<template>
  <main>
    <!-- About -->
    <section id="about" class="solutions flex-columns">
      <div class="row">
        <div class="column">
          <div class="column-1">
            <img
              class="showcase-image"
              src="@/assets/Images/showcase.jpg"
              alt="Picture of front gate"
            />
          </div>
        </div>
        <div class="about column">
          <div class="column-2 bg-primary aboutText">
            <h1>About Us / Ons Agtergrond</h1>
            <br />
            <h4>
              Voortrekker Park private holiday units originated during the mid
              90’s when the City of Cape Town decided to make better use of
              their assets. Because of this decision, a portion of the existing
              Voortrekker Park Resort was allocated and sub-divided into 105
              small “erven” to rent from the City of Cape Town, for the erection
              of holiday units... <br />
              <br />
              Voortrekkerpark private vakansie eenhede het gedurende die middel
              90’s ontstaan toe Stad Kaapstad besluit het om hul bates beter te
              benut. As gevolg hiervan, is ŉ gedeelte van die bestaande
              Voortrekkerpark vakansie oord afgesonder en onderverdeel in 105
              klein “erwe” te huur van Stad Kaapstad, vir die oprigting van
              vakansie eenhede...
            </h4>
            <div class="btn">
              <a class="link" href="/about">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Policies -->
    <section id="policies" class="policies">
      <h1><u>Our Policies/Rules</u></h1>
      <div class="wrapper">
        <a href="/policies/1">No 1: Bedryfs model - Operating model v1.1</a>
        <a href="/policies/2">No 2: Conduct Rules - Gedrags Reels v2.0</a>
        <a href="/policies/3">No 3: Verkorte Reëls - Abbreviated Rules v2.0</a>
        <a href="/policies/4">No 4: Infrastruktuur - Infrastructure v1.0</a>
        <a href="/policies/5">No 5: Risiko Bestuur - Risk Management v1.0</a>
        <a href="/policies/6">No 6: Elektries - Electrical v1.0</a>
        <a href="/policies/7">No 7: Skadu afdak - Shade port v1.0</a>
        <a href="/policies/8">No 8: Heinings - Fences v1.0</a>
        <a href="/policies/9"
          >No 9: Wendy of Leunhuis - Wendy house or Lean-to v1.0</a
        >
        <a href="/policies/10"
          >No 10: Bou Veranderings - Build Alterations (Outstanding)
          <br />
          (Sien asb "Gedrags Reels" / Please see "Conduct Rules")</a
        >
        <a href="/policies/11">No 11: Huur van saal - Hiring of hall v1.1</a>
        <a href="/policies/12"
          >No 12: Parkeer of stoor van karavane, groot sleepwaens en bote -
          Parking or storage of caravans, large trailers and boats v1.1</a
        >
        <a href="/policies/13"
          >No 13: Wellpoint or Borehole - Wellpoint of Boorgat v1.0</a
        >
        <a href="/policies/14">No 14: Toegangs beheer - Access control v1.1</a>
        <a href="/policies/15">No 15: Boetes - Fines v1.1</a>
        <a href="/policies/16"
          >No 16: Bestuurs portefeuljes - Management portfolios (Outstanding)</a
        >
        <a href="/policies/17"
          >No 17: Verhuring en Verkoop van Eenhede - Leasing and Selling of
          Units v1.1</a
        >
      </div>
    </section>
  </main>
</template>

<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: 'HomeView',
};
</script>

<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
.btn {
  cursor: pointer;
  .link {
    font-size: 20px;
    color: black;
    border: #1a7664 1px solid;
    padding: 4px 6px;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      color: #1a7664;
      box-shadow: 0 0 10px #1a7664;
      border-radius: 5px;
    }
  }
}

#about {
  top: 57px;
  .row {
    .about {
      min-height: 100%;
      .aboutText {
        min-height: 100%;
      }
    }
  }
}
.flex-columns.flex-reverse .row {
  flex-direction: row-reverse;
}
.flex-columns .row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.flex-columns .column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.flex-columns .column .column-1,
.flex-columns .column .column-2 {
  min-height: 90vh;
}

.flex-columns img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
}

.flex-columns .column-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-bottom: #1a7664 solid 1.5px;
}

.flex-columns h1 {
  font-weight: bold;
  font-size: 2em;
}
.flex-columns h2 {
  font-size: 20px;
  font-weight: 100;
}

.flex-columns h4 {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
}

.flex-columns p {
  margin: 20px 0;
}

/* Mobile Flex Items */
@media (max-width: 768px) {
  .flex-columns .column,
  .column {
    height: 100%;
    flex: 100%;
    max-width: 100%;
  }

  .flex-columns .column h2,
  .column h2 {
    font-size: 10px;
  }
}

// Policies Section

section.policies {
  top: 57px;
  height: 100%;
  h1 {
    text-align: center;
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1em 2em;
    text-align: center;

    a {
      text-decoration: none;
      color: black;
      border: #1a7664 solid 1.5px;
      padding: 0.6em 2em;
      margin: 0.6em;
      border-radius: 5em;

      &:hover {
        color: #1a7664;
        box-shadow: 0 0 10px #1a7664;
      }
    }
  }
}

@media (max-width: 1080px) {
  .flex-columns .column,
  .flex-grid .column {
    flex: 100%;
    max-width: 100%;
  }

  .flex-columns .column h4,
  .flex-grid .column h4 {
    font-size: 16px;
  }

  .flex-columns .column h2,
  .flex-grid .column h2 {
    font-size: 15px;
  }

  section.policies {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr;
      margin: 1em 2em;
    }
  }
}
</style>
