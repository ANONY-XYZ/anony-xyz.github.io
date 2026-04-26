#!/usr/bin/env python3
import struct
import sys

def read_mp4_atoms(filename):
    """Read MP4 file structure to identify video codec"""
    with open(filename, 'rb') as f:
        while True:
            # Read atom size and type
            header = f.read(8)
            if len(header) < 8:
                break
            
            size = struct.unpack('>I', header[:4])[0]
            atom_type = header[4:8].decode('ascii', errors='ignore')
            
            print(f"Atom: {atom_type}, Size: {size} bytes")
            
            # Look for video codec info
            if atom_type in ['moov', 'trak', 'mdia', 'minf', 'stbl', 'stsd']:
                print(f"  -> Container atom: {atom_type}")
            elif atom_type in ['avc1', 'hvc1', 'hev1', 'mp4v', 'vp09']:
                print(f"  -> VIDEO CODEC FOUND: {atom_type}")
            
            if size == 0:
                break
            
            # Skip to next atom
            f.seek(size - 8, 1)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        read_mp4_atoms(sys.argv[1])
    else:
        read_mp4_atoms('assets/examples/videos/sample/sample1/ours.mp4')
