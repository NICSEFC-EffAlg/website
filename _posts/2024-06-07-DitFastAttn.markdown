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

Diffusion Transformers (DiT) have emerged as a powerful tool for image and video generation tasks. However, their quadratic computational complexity due to the self-attention mechanism poses a significant challenge, particularly for high-resolution and long video tasks. This paper mitigate the computational bottleneck in DiT models by introducing a novel post-training model compression method. We identify three key redundancies in the attention computation during DiT inference: 1. spatial redundancy, where many attention heads focus on local information; 2. temporal redundancy, with high similarity between neighboring steps' attention outputs; 3. conditional redundancy, where conditional and unconditional inferences exhibit significant similarity. To tackle these redundancies, we propose three techniques: 1. Window Attention with Residual Caching to reduce spatial redundancy; 2. Temporal Similarity Reduction to exploit the similarity between steps; 3. Conditional Redundancy Elimination to skip redundant computations during conditional generation. Our method compresses the model FLOPs to 35% of the original model. This work offers a practical solution for deploying DiT models in resource-constrained environments.

![DiTFastAttn Overview](/assets/posts_images/DiTFastAttn_overview.jpg)




## Method

![Overview](/assets/posts_images/Overview.png)

In the denoising process, we identify three types of redundancy: 

(1) **Redundancy in the spatial dimension**

Many attention heads primarily capture local spatial information, with attention values for distant tokens nearing zero. 

(2) **Similarity between the neighboring steps in attention outputs**

The attention outputs of the same attention head across neighboring steps can be highly similar.

(3) **Similarity between the conditional and unconditional inference in attention outputs**

We observe that in CFG, the attention outputs of conditional and unconditional inference exhibit significant similarity (SSIM ≥ 0.95) for certain heads and timesteps.



To address these redundancies, we propose three compression techniques: 

(1) We introduce **Window Attention with Residual Sharing (WA-RS)** to reduce spatial redundancy. 

(2) We introduce **Attention Sharing across Timesteps (AST)** to exploit step-wise similarities, thereby enhancing model efficiency. 

(3) We introduce **Attention Sharing across CFG (ASC)** to reduce redundancy by utilizing similarity between conditional and unconditional generation.

We introduce a simple greedy method to decide the compression plan, i.e., select the appropriate compression technique for each layer and step.



## Experiment

We evaluate DiTFastAttention on three commonly used diffusion transformers: DiT and Pixart-Sigma for image generation tasks, and Open-Sora for video generation tasks. Our findings demonstrate that DiTFastAttention consistently reduces computational cost. Notably, the higher the image resolution, the greater the savings in computation and latency. For instance, with PixArt-Sigma, DiTFastAttention delivers a 36% to 88% reduction in attention computation and a latency decrease of up to 37% during the generation of 2048×2048 images.



<center>
	<video width="480" height="320" controls>
  	<source src="../assets/posts_images/DiTFastAttn_Demo_v3_complete.mp4" type="video/mp4">
	</video>
</center>

We experiment with different thresholds δ at intervals of 0.025, starting from 0.95. We denote these threshold settings as D1 (δ=0.975), D2 (δ=0.95), ..., D6 (δ=0.85), respectively. 



### Results on Image Generation

![pixart1k_result](/assets/posts_images/pixart1k_result.png)

![pixart2k_result](/assets/posts_images/pixart2k_result.png)

### Results on Video Generation

<video width="320" height="240" controls autoplay>
	<source src="../assets/posts_images/raw.mp4" type="video/mp4">
</video>

 <p>Raw</p>

<video width="320" height="240" controls autoplay>
	<source src="../assets/posts_images/D1.mp4" type="video/mp4">
</video>

  <p>D1</p>

<video width="320" height="240" controls autoplay>
  	<source src="../assets/posts_images/D2.mp4" type="video/mp4">
	</video>

  <p>D2</p>

<video width="320" height="240" controls autoplay>
  	<source src="../assets/posts_images/D3.mp4" type="video/mp4">
	</video>

  <p>D3</p>

<video width="320" height="240" controls autoplay>
  	<source src="../assets/posts_images/D4.mp4" type="video/mp4">
	</video>

  <p>D4</p>

<video width="320" height="240" controls autoplay>
  	<source src="../assets/posts_images/D5.mp4" type="video/mp4">
	</video>

  <p>D5</p>

<video width="320" height="240" controls autoplay>
  	<source src="../assets/posts_images/D6.mp4" type="video/mp4">
	</video>

  <p>D6</p>

You can find the code for DiTFastAttn on GitHub at [DiTFastAttention](https://github.com/thu-nics/DiTFastAttn). Feel free to check out the repository for more details and to access the code.