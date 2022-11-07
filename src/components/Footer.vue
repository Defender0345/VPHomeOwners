<template>
  <footer class="footer">
    <p>Copyright &copy; 2021 - Voortrekker Park Homeowners Association</p>
    <a href="https://www.drnsoftware.com" class="drn-logo">
      <img src="../assets/Images/DnD-logo-black.png" alt="DNR Software Logo" />
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  top: 57px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 150px;

  .drn-logo {
    position: absolute;
    cursor: pointer;
    right: 3%;

    img {
      max-height: 70px;
      max-width: 100px;
    }
  }
}

@media (max-width: 1080px) {
  .footer {
    .drn-logo {
      position: unset;
    }
  }
}

.footer a {
  color: #fff;
}
</style>
