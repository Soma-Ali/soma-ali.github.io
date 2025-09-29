<template>
  <div class="skills-grid">
    <div v-for="skill in skills" :key="skill.title" class="skill-card">
      <div class="skill-icon" v-html="skill.icon"></div>
      <h3>{{ skill.title }}</h3>
      <p>{{ skill.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  data() {
    return {
      skills: [
        {
          title: 'Management',
          icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>',
          description: 'Managed social media accounts by planning and creating engaging content. I also tracked results to grow the audience and improve engagement.'
        },
        {
          title: 'Design',
          icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>',
          description: 'User-centered design with a focus on accessibility and beautiful interfaces.'
        },
        {
          title: 'Performance',
          icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon></svg>',
          description: 'Optimized solutions that are fast, scalable, and maintainable.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.skill-card {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15);
  border-color: #8b5cf6;
}

.skill-icon {
  width: 64px;
  height: 64px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #8b5cf6;
}

.skill-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
  border: none;
  padding: 0;
}

.skill-card p {
  color: #6a737d;
  line-height: 1.7;
  margin: 0;
}
</style>