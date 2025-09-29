<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="project-tags">
        <span v-for="tag in tagsList" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <a :href="behanceLink" target="_blank" class="project-link">
        View on Behance →
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: true
    },
    behanceLink: {
      type: String,
      required: true
    }
  },
  computed: {
    tagsList() {
      return this.tags.split(',').map(tag => tag.trim());
    }
  }
}
</script>

<style scoped>
.project-card {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15);
  border-color: #8b5cf6;
}

.project-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #e1e4e8;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #2c3e50;
  border: none;
  padding: 0;
}

.project-content p {
  color: #6a737d;
  margin-bottom: 1rem;
  line-height: 1.7;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #7c3aed;
}
</style>