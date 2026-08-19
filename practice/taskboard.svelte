<script>
  // Your standalone.lua should completely ignore this block!
  let planName = "Pro Tier";
  let price = "$29/mo";
  let features = [
    "Unlimited Projects",
    "Priority Support",
    "Custom Domains",
    "Analytics Dashboard"
  ];
</script>

<main class="pricing-container">
  
  <article class="pricing-card">
    <header class="card-header">
      <h2>{planName}</h2>
      <p class="price">{price}</p>
    </header>

    <div class="card-body">
      <h3>Included Features:</h3>
      <ul class="feature-list">
        
        {#each features as feature}
          <li class="feature-item">
            <span class="checkmark">✓</span>
            {feature}
          </li>
        {/each}

      </ul>
    </div>
    
    <footer class="card-footer">
      <button class="btn-subscribe">Subscribe Now</button>
    </footer>
  </article>

</main>

<style>
  /* Put your cursor on these rules to test Svelte support! */

  /* Test 1: Deep nesting jump */
  .pricing-container .pricing-card .card-body {
    padding: 2rem;
    background: #1a1a1a;
  }

  /* Test 2: The exact Child/Target match */
  .feature-list .feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  /* Test 3: The CSS Math Engine */
  /* This should highlight the 1st and 3rd items! */
  .feature-list .feature-item:nth-child(odd) {
    background-color: rgba(255, 62, 0, 0.1); /* Svelte Orange */
    border-radius: 4px;
  }
</style>
