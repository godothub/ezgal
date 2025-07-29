shader_type canvas_item;

// 控制扫描线密度（数值越大线条越密）
uniform float line_density : hint_range(10.0, 500.0) = 100.0;
// 控制线条粗细
uniform float line_thickness : hint_range(0.1, 5.0) = 1.0;
// 控制噪声强度
uniform float noise_intensity : hint_range(0.0, 1.0) = 0.3;
// 控制干扰条纹的移动速度
uniform float scan_speed : hint_range(-5.0, 5.0) = 1.0;
// 控制水平扭曲程度
uniform float horizontal_distortion : hint_range(0.0, 0.1) = 0.02;

// 随机数生成函数
float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void fragment() {
    // 添加水平扭曲效果
    float distort = sin(UV.y * 50.0 + TIME * 1.0) * horizontal_distortion;
    vec2 distorted_uv = UV + vec2(distort, 0.0);

    // 获取原始颜色（使用扭曲后的UV）
    vec4 original_color = texture(TEXTURE, distorted_uv);

    // 创建扫描线效果
    float scan_line = abs(sin(UV.y * line_density + TIME * scan_speed));
    scan_line = smoothstep(0.8, 1.0, scan_line * line_thickness);

    // 创建随机噪声
    float random_noise = rand(vec2(UV.y * 100.0, TIME));

    // 组合效果
    float combined_effect = mix(1.0, 1.0 - scan_line * 0.7, noise_intensity);
    combined_effect = mix(combined_effect, random_noise, noise_intensity * 0.3);

    // 应用最终颜色
    COLOR.rgb = original_color.rgb * combined_effect;
    COLOR.a = original_color.a;

    // 添加偶尔的强烈水平干扰条纹
    if (rand(vec2(TIME * 0.1, 0.0)) > 0.98) {
        float stripe = sin(UV.y * 500.0 + TIME * 50.0);
        COLOR.rgb *= 1.0 - smoothstep(0.7, 0.9, abs(stripe)) * 0.7;
    }
}