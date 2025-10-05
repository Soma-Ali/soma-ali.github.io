<template>
  <nav class="custom-nav" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="nav-logo">
        <span class="logo-text">Portfolio</span>
      </div>
      <ul class="nav-menu" :class="{ active: menuOpen }">
        <li><a href="#home" class="nav-link" @click="closeMenu">Home</a></li>
        <li><a href="/about/" class="nav-link" @click="closeMenu">About</a></li>
        <li><a href="/projects/" class="nav-link" @click="closeMenu">Projects</a></li>
        <li><a href="/resume/" class="nav-link" @click="closeMenu">Resume</a></li>
      </ul>
      <div class="nav-toggle" :class="{ active: menuOpen }" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CustomNav',
  data() {
    return {
      menuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 100
    }
  }
}
</script>

<style scoped>
.custom-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #404040;
  z-index: 1000;
  transition: all 0.3s ease;
}

.custom-nav.scrolled {
  background: rgba(10, 10, 10, 0.95);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #8b5cf6;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
}

.nav-link {
  color: #a3a3a3;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #8b5cf6;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #8b5cf6;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background: #fafafa;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: #0a0a0a;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    padding: 2rem 0;
    border-top: 1px solid #404040;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active .bar:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-toggle.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>