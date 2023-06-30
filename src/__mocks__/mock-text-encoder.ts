class TextEncoderMock {
    encode(input?: string): Uint8Array {
        const encoder = new (require('text-encoding').TextEncoder)();
        return encoder.encode(input);
    }
}

export default TextEncoderMock;