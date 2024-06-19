---
# layout: post
title:  "DiTFastAttn: Attention Compression for Diffusion Transformer Models"
date:   2024-06-07
permalink: /DiTFastAttn
---

<span>
    <a class="custom_buttom" href="https://github.com/thu-nics/DiTFastAttn">
    Code
    </a>
    <a class="custom_buttom" href="https://arxiv.org/pdf/2406.08552">
    Paper
    </a>
</span>

## Abstract

<div style="flex: 1; padding: 10px; background-color: #f0f0f0; text-align: justify;">
    Diffusion Transformers (DiT) have emerged as a powerful tool for image and video generation tasks. However, their quadratic computational complexity due to the self-attention mechanism poses a significant challenge, particularly for high-resolution and long video tasks. This paper mitigate the computational bottleneck in DiT models by introducing a novel post-training model compression method. We identify three key redundancies in the attention computation during DiT inference: 1. spatial redundancy, where many attention heads focus on local information; 2. temporal redundancy, with high similarity between neighboring steps' attention outputs; 3. conditional redundancy, where conditional and unconditional inferences exhibit significant similarity. To tackle these redundancies, we propose three techniques: 1. Window Attention with Residual Caching to reduce spatial redundancy; 2. Temporal Similarity Reduction to exploit the similarity between steps; 3. Conditional Redundancy Elimination to skip redundant computations during conditional generation. Our method compresses the model FLOPs to 35% of the original model. This work offers a practical solution for deploying DiT models in resource-constrained environments.
</div>



<center>
	<figure style="width: 40%">
    <img src="../assets/posts_images/DiTFastAttn_overview.jpg" alt="DiTFastAttn_overview">
    <figcaption style="text-align: center;">Overview</figcaption>
  </figure>
</center>


## Demo

<center>
	<figure style="width: 60%">
    <img src="../assets/posts_images/DiTFastAttn_Demo_v3_complete.gif" alt="DiTFastAttn demo">
    <figcaption style="text-align: center;">DiTFastAttn Demo</figcaption>
  </figure>
</center>



<div style="flex: 1; padding: 10px; background-color: #f0f0f0; text-align: justify;">
  <p>We evaluate DiTFastAttn on three commonly used diffusion transformers: DiT and PixArt-Sigma for image generation tasks, and Open-Sora for video generation tasks. Our findings demonstrate that DiTFastAttn consistently reduces computational cost. Notably, the higher the image resolution, the greater the savings in computation and latency. For instance, with PixArt-Sigma, DiTFastAttn delivers a 36% to 88% reduction in attention computation and a latency decrease of up to 37% during the generation of 2K images.</p>
  <p>We experiment with different thresholds δ at intervals of 0.025, starting from 0.95. We denote these threshold settings as D1 (δ=0.975), D2 (δ=0.95), ..., D6 (δ=0.85), respectively.</p>
</div>



### Image Generation Results



<figure style="width: 95%; height: auto;">
    <img src="../assets/posts_images/pixart1k_result.png" alt="pixart1k_result">
    <figcaption style="text-align: center;">1K Image Generation Results</figcaption>
</figure>

<figure style="width: 95%; height: auto;">
    <img src="../assets/posts_images/pixart2k_result.png" alt="DiTFastAttn_overview">
    <figcaption style="text-align: center;">2K Image Generation Results</figcaption>
</figure>



### Video Generation Results

<div>   
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/raw.gif" alt="raw">     
    <figcaption style="text-align: center;">Raw</figcaption>   
  </figure>    
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D1.gif" alt="D1">     
    <figcaption style="text-align: center;">D1</figcaption>   
  </figure>    
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D2.gif" alt="D2">     
    <figcaption style="text-align: center;">D2</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D3.gif" alt="D3">     
    <figcaption style="text-align: center;">D3</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D4.gif" alt="D4">     
    <figcaption style="text-align: center;">D4</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D5.gif" alt="D5">     
    <figcaption style="text-align: center;">D5</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D6.gif" alt="D6">     
    <figcaption style="text-align: center;">D6</figcaption>   
  </figure>
</div>

<div>   
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/raw2.gif" alt="raw">     
    <figcaption style="text-align: center;">Raw</figcaption>   
  </figure>    
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D1_2.gif" alt="D1">     
    <figcaption style="text-align: center;">D1</figcaption>   
  </figure>    
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D2_2.gif" alt="D2">     
    <figcaption style="text-align: center;">D2</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D3_2.gif" alt="D3">     
    <figcaption style="text-align: center;">D3</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D4_2.gif" alt="D4">     
    <figcaption style="text-align: center;">D4</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D5_2.gif" alt="D5">     
    <figcaption style="text-align: center;">D5</figcaption>   
  </figure>
  <figure style="display: inline-block; width: 13%; height: auto">     
    <img src="../assets/posts_images/D6_2.gif" alt="D6">     
    <figcaption style="text-align: center;">D6</figcaption>   
  </figure>
</div>

You can find the code for DiTFastAttn on GitHub at [DiTFastAttention](https://github.com/thu-nics/DiTFastAttn). Feel free to check out the repository for more details and to access the code.