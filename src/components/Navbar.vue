<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <a href="/">
          <img src="../assets/Images/VPLogo.png" alt="Voortrekker Park Logo" />
        </a>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" to="/">Home</router-link></li>
        <li>
          <router-link class="link" to="/constitution"
            >Constitution</router-link
          >
        </li>
        <li>
          <router-link class="link" to="/coctrental">CoCT Rental</router-link>
        </li>
        <li>
          <router-link class="link" to="/annexures">Annexures</router-link>
        </li>
        <li>
          <a href="/#policies" class="link">Policies/Rules</a>
        </li>
        <li>
          <router-link class="link" to="/news"
            >News Letters/AJV-AGM</router-link
          >
        </li>
        <li><a href="/#contact" class="link">Contact</a></li>
      </ul>
      <div class="icon">
        <img
          src="../assets/bars-solid.svg"
          alt="Hamburger menu"
          @click="toggleMobileNav"
          v-show="mobile"
          class="burgerMenu"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" to="/" @click="toggleMobileNav"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="link"
              to="/constitution"
              @click="toggleMobileNav"
              >Constitution</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/coctrental" @click="toggleMobileNav"
              >CoCT Rental</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/annexures" @click="toggleMobileNav"
              >Annexures</router-link
            >
          </li>
          <li>
            <a href="/#policies" class="link" @click="toggleMobileNav"
              >Policies/Rules</a
            >
          </li>
          <li>
            <router-link class="link" to="/news" @click="toggleMobileNav"
              >News Letters/AJV-AGM</router-link
            >
          </li>
          <li>
            <a href="/#contact" class="link" @click="toggleMobileNav"
              >Contact</a
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1080) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
@import '@/assets/base.css';

header {
  background: white;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: black;
  border-bottom: #1a7664 1px solid;

  nav {
    display: flex;
    flex-direction: row;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    position: relative;

    @media (min-width: 1140px) {
      max-width: 1400px;
    }

    ul,
    .link {
      font-weight: 500;
      color: black;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link {
      font-size: 14px;
      transition: 0.5s ease all;
      padding: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #1a7664;
        border-color: #1a7664;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 150px;
        transition: 0.5s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;
      color: black;

      img {
        cursor: pointer;
        width: 24px;
        height: 100%;
        // font-size: 24px;
        transition: 0.8s ease all;
      }

      .burgerMenu {
        z-index: 99;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 90%;
      max-width: 250px;
      height: 100%;
      background: white;
      top: 0;
      right: 0;

      li {
        margin-left: 0;
        .link {
          color: black;
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  background: white;
  box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1),
    0 2px 4px -1px rgba(255, 255, 255, 0.06);

  nav {
    padding: 8px 0;
    .branding {
      img {
        width: 100px;
        box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1),
          0 2px 4px -1px rgba(255, 255, 255, 0.06);
      }
    }
  }
}
</style>
