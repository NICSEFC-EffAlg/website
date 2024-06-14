---
# layout: post
title:  "DiTFastAttn: Attention Compression for Diffusion Transformer Models"
date:   2024-06-07
permalink: /DiTFastAttn
---

Diffusion Transformers (DiT) have emerged as a powerful tool for image and video generation tasks. However, their quadratic computational complexity due to the self-attention mechanism poses a significant challenge, particularly for high-resolution and long video tasks. This paper mitigate the computational bottleneck in DiT models by introducing a novel post-training model compression method. We identify three key redundancies in the attention computation during DiT inference: 1. spatial redundancy, where many attention heads focus on local information; 2. temporal redundancy, with high similarity between neighboring steps' attention outputs; 3. conditional redundancy, where conditional and unconditional inferences exhibit significant similarity. To tackle these redundancies, we propose three techniques: 1. Window Attention with Residual Caching to reduce spatial redundancy; 2. Temporal Similarity Reduction to exploit the similarity between steps; 3. Conditional Redundancy Elimination to skip redundant computations during conditional generation. Our method compresses the model FLOPs to 35% of the original model. This work offers a practical solution for deploying DiT models in resource-constrained environments.

![DiTFastAttn Overview](/assets/posts_images/DiTFastAttn_overview.jpg)

<!-- The code will be release soon. -->
You can find the code for DiTFastAttn on GitHub at [DiTFastAttention](https://github.com/thu-nics/DiTFastAttn). Feel free to check out the repository for more details and to access the code.