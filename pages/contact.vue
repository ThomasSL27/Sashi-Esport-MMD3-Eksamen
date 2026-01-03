<script setup>
useHead({
  title: "Sashi Esport - Contact",
  meta: [
    { name: "description", content: "Contact Sashi Esport" }
  ]
})
const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
</script>

<template>
<main>
    <TheNav />
    <gameSlider />
    <div class="wrapper">
    <!-- White box -->
    <div class="white-box">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero impedit et modi ullam, iusto tempore culpa voluptatem a repellat, id corporis at! Odit eum quo, unde eos, accusamus culpa cum nostrum itaque est nihil ipsa nesciunt qui sed dolores quam facere quaerat maiores laboriosam quos. Eos amet consectetur vel maiores.
      </p>
    </div>
    <!-- Red box -->
    <div class="red-box">
      <h2>Contact Us</h2>
      <p>Please fill out the form below and we’ll get back to you.</p>
    <form @submit.prevent="submitForm">
  <div class="field">
    <label>Your Name</label>
    <input type="text" placeholder="John Doe" v-model="form.name" required />
  </div>

  <div class="field">
    <label>Your Email</label>
    <input type="email" placeholder="JohnDoe@email.com" v-model="form.email" required />
  </div>

  <div class="field">
    <label>Your Message</label>
    <textarea placeholder="Hello Sashi..." v-model="form.message" required></textarea>
  </div>

  <button type="submit">Send</button>
</form>

    </div>
  </div>
</main>
<TheFooter />
</template>

<style scoped>
  label{
    margin: 0;
  }
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}


.white-box {
  background: white;
  padding: 2rem;
  width: clamp(200px, 350px, 500px);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.white-box p{
  color: black;
}

.red-box {
  background: #d32f2f;
  color: white;
  padding: 2rem;
  width: clamp(200px, 350px, 500px);
  border-radius: 1rem;
}


/* Form */
.red-box form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.field label {
  margin-bottom: 0.25rem; /* tight label → input spacing */
}

.red-box input,
.red-box textarea {
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
}

.red-box textarea {
  min-height: 100px;
}

.red-box button {
  padding: 12px;
  background: white;
  color: #d32f2f;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}

.red-box button:hover {
  opacity: 0.9;
}
</style>