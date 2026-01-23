shader_type canvas_item;

uniform float speed : hint_range(0.1, 5.0) = 1.0;
uniform float min_alpha : hint_range(0.0, 1.0) = 0.0;
uniform float max_alpha : hint_range(0.0, 1.0) = 1.0;

void fragment() {
    float time_factor = sin(TIME * speed) * 0.5 + 0.5;
    float alpha = mix(min_alpha, max_alpha, time_factor);
    COLOR.a *= alpha;
}