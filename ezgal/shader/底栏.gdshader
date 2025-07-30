shader_type canvas_item;

void fragment() {
    vec2 uv = UV;
    float alpha = 1.0 - uv.y;
    COLOR.a = alpha;
}
